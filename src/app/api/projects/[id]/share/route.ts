import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { randomUUID } from "crypto";
import { checkSubscriptionLimit, incrementUsage } from "@/lib/subscription";

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const projectId = params.id;
    const { email, permissions } = await req.json();

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
      include: {
        sharedWith: true,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    if (project.userId !== session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Check if the user is trying to share with themselves
    if (session.user.email === email) {
      return NextResponse.json(
        { error: "You cannot share a project with yourself" },
        { status: 400 },
      );
    }

    // Check subscription limits for collaborators
    const limitCheck = await checkSubscriptionLimit({
      userId: session.user.id,
      limitType: "collaboratorsPerProject",
      increment: 1,
    });

    if (limitCheck.wouldExceedLimit) {
      return NextResponse.json(
        {
          error: "Collaborator limit reached",
          message:
            "You have reached the maximum number of collaborators allowed on your current plan. Please upgrade to add more collaborators.",
          limit: limitCheck.limit,
          usage: limitCheck.currentUsage,
        },
        { status: 403 },
      );
    }

    // Check if the user exists
    const userToShare = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (userToShare) {
      // Check if the project is already shared with this user
      const existingShare = project.sharedWith.find(
        (share) => share.userId === userToShare.id,
      );

      if (existingShare) {
        // Update the permissions if the project is already shared
        const updatedShare = await db.sharedProject.update({
          where: {
            id: existingShare.id,
          },
          data: {
            permissions,
          },
        });

        return NextResponse.json(updatedShare);
      }

      // Share the project with the user
      const sharedProject = await db.sharedProject.create({
        data: {
          projectId,
          userId: userToShare.id,
          permissions,
        },
      });

      // Increment usage
      await incrementUsage({
        userId: session.user.id,
        limitType: "collaboratorsPerProject",
        increment: 1,
      });

      return NextResponse.json(sharedProject);
    } else {
      // Create an invitation for the user
      const token = randomUUID();
      const expires = new Date();
      expires.setDate(expires.getDate() + 7); // Expires in 7 days

      const invitation = await db.projectInvitation.create({
        data: {
          projectId,
          email,
          token,
          expires,
        },
      });

      // Increment usage
      await incrementUsage({
        userId: session.user.id,
        limitType: "collaboratorsPerProject",
        increment: 1,
      });

      // In a real app, you would send an email to the user with the invitation link
      // For now, we'll just return the invitation
      return NextResponse.json(invitation);
    }
  } catch (error) {
    console.error("Error sharing project:", error);
    return NextResponse.json(
      { error: "Failed to share project" },
      { status: 500 },
    );
  }
}

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
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Check if the user is the owner or the project is shared with them
    const isOwner = project.userId === session.user.id;
    if (!isOwner) {
      const sharedProject = await db.sharedProject.findUnique({
        where: {
          projectId_userId: {
            projectId,
            userId: session.user.id,
          },
        },
      });

      if (!sharedProject) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
      }
    }

    // Get all users the project is shared with
    const sharedWith = await db.sharedProject.findMany({
      where: {
        projectId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // Get all pending invitations
    const invitations = await db.projectInvitation.findMany({
      where: {
        projectId,
        expires: {
          gt: new Date(),
        },
      },
    });

    return NextResponse.json({
      project: {
        id: project.id,
        title: project.title,
        isPublic: project.isPublic,
      },
      owner: project.user,
      isOwner,
      sharedWith,
      invitations,
    });
  } catch (error) {
    console.error("Error fetching project sharing info:", error);
    return NextResponse.json(
      { error: "Failed to fetch project sharing info" },
      { status: 500 },
    );
  }
}
