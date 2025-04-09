import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string; userId: string } },
) {
  try {
    const projectId = params.id;
    const userIdToRemove = params.userId;

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

    // Remove the user from the shared project
    await db.sharedProject.delete({
      where: {
        projectId_userId: {
          projectId,
          userId: userIdToRemove,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error removing user from shared project:", error);
    return NextResponse.json(
      { error: "Failed to remove user from shared project" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string; userId: string } },
) {
  try {
    const projectId = params.id;
    const userIdToUpdate = params.userId;
    const { permissions } = await req.json();

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

    // Update the user's permissions
    const updatedShare = await db.sharedProject.update({
      where: {
        projectId_userId: {
          projectId,
          userId: userIdToUpdate,
        },
      },
      data: {
        permissions,
      },
    });

    return NextResponse.json(updatedShare);
  } catch (error) {
    console.error("Error updating user permissions:", error);
    return NextResponse.json(
      { error: "Failed to update user permissions" },
      { status: 500 },
    );
  }
}
