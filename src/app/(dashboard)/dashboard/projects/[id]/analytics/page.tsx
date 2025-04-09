import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProjectAnalytics } from "@/components/editor/project-analytics";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/session";
import { db } from "@/lib/db";
import Link from "next/link";

interface ProjectAnalyticsPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectAnalyticsPage({
  params,
}: ProjectAnalyticsPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const project = await db.project.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!project) {
    redirect("/dashboard/projects");
  }

  // Check if the user has access to this project
  if (project.userId !== user.id) {
    const sharedProject = await db.sharedProject.findUnique({
      where: {
        projectId_userId: {
          projectId: params.id,
          userId: user.id,
        },
      },
    });

    if (!sharedProject && !project.isPublic) {
      redirect("/dashboard/projects");
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading={`Analytics: ${project.title}`}
        text="View detailed analytics for your project."
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

      <div className="grid gap-6">
        <ProjectAnalytics projectId={params.id} />

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-medium">AI Usage</h3>
            {/* AI usage stats would go here */}
            <p className="text-sm text-muted-foreground mt-2">
              Coming soon: Track your AI usage and token consumption.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium">Export History</h3>
            {/* Export history would go here */}
            <p className="text-sm text-muted-foreground mt-2">
              Coming soon: View your export history and download previous
              exports.
            </p>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
