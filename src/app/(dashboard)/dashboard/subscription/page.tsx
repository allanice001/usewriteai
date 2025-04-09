import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { SubscriptionForm } from "@/components/dashboard/subscription-form";
import { getCurrentUser } from "@/lib/session";
import { db } from "@/lib/db";

export const metadata = {
  title: "Subscription | UseWriteAI",
  description: "Manage your subscription plan",
};

export default async function SubscriptionPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  // Get the user's subscription
  let subscription = await db.subscription.findUnique({
    where: { userId: user.id },
  });

  // Create a default subscription if none exists
  if (!subscription) {
    subscription = await db.subscription.create({
      data: {
        userId: user.id,
        planId: "free",
        status: "active",
      },
    });
  }

  // Get the user's usage
  let usage = await db.subscriptionUsage.findUnique({
    where: { userId: user.id },
  });

  // Create a default usage record if none exists
  if (!usage) {
    usage = await db.subscriptionUsage.create({
      data: {
        userId: user.id,
      },
    });
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Subscription"
        text="Manage your subscription plan and billing."
      />
      <SubscriptionForm
        subscription={subscription}
        usage={usage}
        userId={user.id}
      />
    </DashboardShell>
  );
}
