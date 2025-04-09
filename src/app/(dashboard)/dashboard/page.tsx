import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProjectList } from "@/components/dashboard/project-list";
import { getCurrentUser } from "@/lib/session";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export const metadata = {
  title: "Dashboard",
  description: "Manage your writing projects",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Welcome back to your writing dashboard."
      />
      <div className="grid gap-6">
        <StatsCards userId={user.id} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <ProjectList
            userId={user.id}
            className="md:col-span-1 lg:col-span-4"
            limit={3}
          />
          <RecentActivity
            userId={user.id}
            className="md:col-span-1 lg:col-span-3"
          />
        </div>
      </div>
    </DashboardShell>
  );
}
