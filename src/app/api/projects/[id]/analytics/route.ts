import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { updateProjectAnalytics, analyzeTopics } from "@/lib/analytics";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const projectId = params.id;

    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if the project exists
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Check if the user has access to the project
    if (project.userId !== session.user.id) {
      const sharedProject = await db.sharedProject.findUnique({
        where: {
          projectId_userId: {
            projectId,
            userId: session.user.id,
          },
        },
      });

      if (!sharedProject && !project.isPublic) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
      }
    }

    // Get the analytics
    let analytics = await db.writingAnalytics.findUnique({
      where: {
        projectId,
      },
    });

    // If analytics don't exist or are outdated, update them
    if (
      !analytics ||
      new Date(analytics.lastUpdated).getTime() <
        new Date(project.updatedAt).getTime()
    ) {
      await updateProjectAnalytics(projectId);
      analytics = await db.writingAnalytics.findUnique({
        where: {
          projectId,
        },
      });
    }

    return NextResponse.json(analytics);
  } catch (error) {
    console.error("Error fetching project analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch project analytics" },
      { status: 500 },
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const projectId = params.id;
    const { action } = await req.json();

    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if the project exists
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Check if the user has access to the project
    if (project.userId !== session.user.id) {
      const sharedProject = await db.sharedProject.findUnique({
        where: {
          projectId_userId: {
            projectId,
            userId: session.user.id,
          },
        },
      });

      if (!sharedProject && !project.isPublic) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
      }
    }

    if (action === "analyze-topics") {
      const topicAnalysis = await analyzeTopics(projectId);
      return NextResponse.json({ topicAnalysis });
    } else if (action === "update-analytics") {
      await updateProjectAnalytics(projectId);
      const analytics = await db.writingAnalytics.findUnique({
        where: {
          projectId,
        },
      });
      return NextResponse.json(analytics);
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error performing analytics action:", error);
    return NextResponse.json(
      { error: "Failed to perform analytics action" },
      { status: 500 },
    );
  }
}
