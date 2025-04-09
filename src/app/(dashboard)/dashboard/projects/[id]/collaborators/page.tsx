import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";
import { db } from "@/lib/db";
import Link from "next/link";
import { CollaboratorsList } from "@/components/dashboard/collaborators-list";

interface ProjectCollaboratorsPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectCollaboratorsPage({
  params,
}: ProjectCollaboratorsPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const project = await db.project.findUnique({
    where: {
      id: params.id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  if (!project) {
    redirect("/dashboard/projects");
  }

  // Check if the user is the owner
  const isOwner = project.userId === user.id;

  // If not the owner, check if they have admin permissions
  if (!isOwner) {
    const sharedProject = await db.sharedProject.findUnique({
      where: {
        projectId_userId: {
          projectId: params.id,
          userId: user.id,
        },
      },
    });

    if (!sharedProject || sharedProject.permissions !== "admin") {
      redirect(`/editor/${params.id}`);
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading={`Collaborators: ${project.title}`}
        text="Manage who can access and edit this project."
      >
        <div className="flex space-x-2">
          <Button asChild variant="outline">
            <Link href={`/editor/${params.id}`}>Edit Project</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/projects">Back to Projects</Link>
          </Button>
        </div>
      </DashboardHeader>

      <CollaboratorsList projectId={params.id} isOwner={isOwner} />
    </DashboardShell>
  );
}
