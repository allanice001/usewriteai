import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const projectId = params.id;
    const { isPublic } = await req.json();

    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if the project exists and belongs to the user
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    if (project.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Update the project's public status
    const updatedProject = await db.project.update({
      where: {
        id: projectId,
      },
      data: {
        isPublic,
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("Error updating project public status:", error);
    return NextResponse.json(
      { error: "Failed to update project public status" },
      { status: 500 },
    );
  }
}
