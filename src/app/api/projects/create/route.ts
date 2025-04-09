import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { checkSubscriptionLimit, incrementUsage } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the project data from the request body
    const { title, description, content, userId } = await req.json();

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 },
      );
    }

    // Ensure the user can only create projects for themselves
    if (userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Check subscription limits
    const limitCheck = await checkSubscriptionLimit({
      userId,
      limitType: "projectLimit",
      increment: 1,
    });

    if (limitCheck.wouldExceedLimit) {
      return NextResponse.json(
        {
          error: "Project limit reached",
          message:
            "You have reached the maximum number of projects allowed on your current plan. Please upgrade to create more projects.",
          limit: limitCheck.limit,
          usage: limitCheck.currentUsage,
        },
        { status: 403 },
      );
    }

    // Create the project
    const project = await db.project.create({
      data: {
        title,
        description,
        content: content || "",
        userId,
      },
    });

    // Increment usage
    await incrementUsage({
      userId,
      limitType: "projectLimit",
      increment: 1,
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 },
    );
  }
}
