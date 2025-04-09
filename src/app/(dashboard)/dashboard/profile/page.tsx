import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { UserProfileForm } from "@/components/dashboard/user-profile-form";
import { getCurrentUser } from "@/lib/session";
import { db } from "@/lib/db";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserApiKeys } from "@/components/dashboard/user-api-keys";
import { UserNotificationSettings } from "@/components/dashboard/user-notification-settings";

export const metadata = {
  title: "Profile | UseWriteAI",
  description: "Manage your profile and account settings",
};

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  // Get user's full profile data
  const userProfile = await db.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      createdAt: true,
    },
  });

  if (!userProfile) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Profile"
        text="Manage your profile and account settings."
      />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <UserProfileForm user={userProfile} />
        </TabsContent>

        <TabsContent value="notifications">
          <UserNotificationSettings userId={user.id} />
        </TabsContent>

        <TabsContent value="api-keys">
          <UserApiKeys userId={user.id} />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}
