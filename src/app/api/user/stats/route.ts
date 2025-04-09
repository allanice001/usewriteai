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

    // Ensure the user can only access their own stats
    if (userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Count the total number of projects
    const totalProjects = await db.project.count({
      where: {
        userId,
      },
    });

    // Get the most recent project
    const mostRecentProject = await db.project.findFirst({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    // Calculate total words (this is a simplified approach)
    const projects = await db.project.findMany({
      where: {
        userId,
      },
      select: {
        content: true,
      },
    });

    let totalWords = 0;
    for (const project of projects) {
      if (project.content) {
        totalWords += project.content.split(/\s+/).filter(Boolean).length;
      }
    }

    // In a real app, you would track AI suggestions in a separate table
    // For now, we'll use a mock value
    const aiSuggestions = 32;

    return NextResponse.json({
      totalProjects,
      totalWords,
      aiSuggestions,
      lastActive: mostRecentProject?.updatedAt || null,
    });
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch user stats" },
      { status: 500 },
    );
  }
}
