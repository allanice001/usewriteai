import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProjectList } from "@/components/dashboard/project-list";
import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Projects",
  description: "Manage your writing projects",
};

export default async function ProjectsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Projects"
        text="Create and manage your writing projects."
      />
      <div className="grid gap-4">
        <ProjectList userId={user.id} />
      </div>
    </DashboardShell>
  );
}
