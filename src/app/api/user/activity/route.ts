import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the user ID from the URL query parameters
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 },
      );
    }

    // Ensure the user can only access their own activity
    if (userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Get the most recently updated projects
    const recentProjects = await db.project.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
      select: {
        id: true,
        title: true,
        updatedAt: true,
        createdAt: true,
      },
    });

    // Transform the projects into activity items
    const activities = recentProjects.map((project) => {
      const isCreated =
        project.createdAt.getTime() === project.updatedAt.getTime();
      return {
        id: project.id,
        type: isCreated ? "created" : "updated",
        projectId: project.id,
        projectTitle: project.title,
        timestamp: project.updatedAt.toISOString(),
      };
    });

    return NextResponse.json(activities);
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return NextResponse.json(
      { error: "Failed to fetch user activity" },
      { status: 500 },
    );
  }
}
