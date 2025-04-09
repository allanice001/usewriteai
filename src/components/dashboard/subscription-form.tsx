"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";
import { Check, CreditCard, Zap } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { PLANS } from "@/lib/stripe";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface SubscriptionProps {
  subscription: {
    planId: string;
    status: string;
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    stripeCurrentPeriodEnd?: Date | null;
  };
  usage: {
    projectsCreated: number;
    collaboratorsInvited: number;
    aiSuggestionsUsed: number;
    wordsProcessed: number;
  };
  userId: string;
}

export function SubscriptionForm({
  subscription,
  usage,
  userId,
}: SubscriptionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(subscription.planId);

  // Check for success or canceled URL parameters
  useEffect(() => {
    if (searchParams?.get("success")) {
      toast.success("Subscription updated successfully!");
      router.replace("/dashboard/subscription");
    }

    if (searchParams?.get("canceled")) {
      toast.error("Subscription update canceled.");
      router.replace("/dashboard/subscription");
    }
  }, [searchParams, router]);

  const handleSubscription = async () => {
    setIsLoading(true);

    try {
      // If downgrading to free plan or current plan is free
      if (selectedPlan === "free") {
        const response = await fetch("/api/stripe/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            planId: "free",
          }),
        });

        const data = await response.json();

        if (data.success) {
          toast.success("Downgraded to Free plan successfully");
          router.refresh();
        } else {
          throw new Error("Failed to downgrade to Free plan");
        }
      } else {
        // For paid plans, redirect to Stripe checkout
        const response = await fetch("/api/stripe/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            planId: selectedPlan,
          }),
        });

        const data = await response.json();

        if (data.url) {
          window.location.href = data.url;
        } else {
          throw new Error("Failed to create checkout session");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/stripe/portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Failed to create customer portal session");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const currentPlan =
    PLANS[subscription.planId.toUpperCase() as keyof typeof PLANS] ||
    PLANS.FREE;
  const plans = Object.values(PLANS);

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="plans">Plans</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Overview</CardTitle>
              <CardDescription>
                Your current plan and usage statistics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-2 rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      {currentPlan.name} Plan
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentPlan.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      {currentPlan.id === "free"
                        ? "Free"
                        : `$${currentPlan.id === "pro" ? "19" : "99"}`}
                      {currentPlan.id !== "free" && (
                        <span className="text-sm font-normal text-muted-foreground">
                          /month
                        </span>
                      )}
                    </p>
                    {subscription.stripeCurrentPeriodEnd && (
                      <p className="text-xs text-muted-foreground">
                        Renews on{" "}
                        {formatDate(subscription.stripeCurrentPeriodEnd)}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant={
                    subscription.planId === "free" ? "default" : "outline"
                  }
                  className="mt-2"
                  onClick={
                    subscription.stripeSubscriptionId
                      ? handleManageSubscription
                      : () => {}
                  }
                  disabled={
                    isLoading ||
                    (!subscription.stripeSubscriptionId &&
                      subscription.planId === "free")
                  }
                >
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {subscription.planId === "free"
                    ? "Upgrade Plan"
                    : subscription.stripeSubscriptionId
                      ? "Manage Subscription"
                      : "No Active Subscription"}
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Usage</h3>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Projects</span>
                    <span>
                      {usage.projectsCreated} /{" "}
                      {currentPlan.limits.projectLimit ===
                      Number.POSITIVE_INFINITY
                        ? "∞"
                        : currentPlan.limits.projectLimit}
                    </span>
                  </div>
                  <Progress
                    value={
                      (usage.projectsCreated /
                        (currentPlan.limits.projectLimit ===
                        Number.POSITIVE_INFINITY
                          ? 100
                          : currentPlan.limits.projectLimit)) *
                      100
                    }
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Collaborators</span>
                    <span>
                      {usage.collaboratorsInvited} /{" "}
                      {currentPlan.limits.collaboratorsPerProject ===
                      Number.POSITIVE_INFINITY
                        ? "∞"
                        : currentPlan.limits.collaboratorsPerProject}
                    </span>
                  </div>
                  <Progress
                    value={
                      (usage.collaboratorsInvited /
                        (currentPlan.limits.collaboratorsPerProject ===
                        Number.POSITIVE_INFINITY
                          ? 100
                          : currentPlan.limits.collaboratorsPerProject)) *
                      100
                    }
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>AI Suggestions</span>
                    <span>
                      {usage.aiSuggestionsUsed} /{" "}
                      {currentPlan.limits.aiSuggestions ===
                      Number.POSITIVE_INFINITY
                        ? "∞"
                        : currentPlan.limits.aiSuggestions}
                    </span>
                  </div>
                  <Progress
                    value={
                      (usage.aiSuggestionsUsed /
                        (currentPlan.limits.aiSuggestions ===
                        Number.POSITIVE_INFINITY
                          ? 100
                          : currentPlan.limits.aiSuggestions)) *
                      100
                    }
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Words</span>
                    <span>
                      {usage.wordsProcessed.toLocaleString()} /{" "}
                      {currentPlan.limits.wordLimit === Number.POSITIVE_INFINITY
                        ? "∞"
                        : currentPlan.limits.wordLimit.toLocaleString()}
                    </span>
                  </div>
                  <Progress
                    value={
                      (usage.wordsProcessed /
                        (currentPlan.limits.wordLimit ===
                        Number.POSITIVE_INFINITY
                          ? 100
                          : currentPlan.limits.wordLimit)) *
                      100
                    }
                    className="h-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="plans">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={selectedPlan === plan.id ? "border-primary" : ""}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="text-3xl font-bold">
                  {plan.id === "free"
                    ? "Free"
                    : `$${plan.id === "pro" ? "19" : "99"}`}
                  {plan.id !== "free" && (
                    <span className="text-sm font-normal text-muted-foreground">
                      /month
                    </span>
                  )}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={selectedPlan === plan.id ? "outline" : "default"}
                  className="w-full"
                  onClick={() => setSelectedPlan(plan.id)}
                  disabled={subscription.planId === plan.id}
                >
                  {subscription.planId === plan.id
                    ? "Current Plan"
                    : selectedPlan === plan.id
                      ? "Selected"
                      : "Select Plan"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {selectedPlan !== subscription.planId && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Change Subscription</CardTitle>
              <CardDescription>
                {selectedPlan === "free" && subscription.planId !== "free"
                  ? "You are about to downgrade to the Free plan."
                  : `You are about to upgrade to the ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan.`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Current Plan</p>
                  <p className="text-lg font-bold">
                    {subscription.planId.charAt(0).toUpperCase() +
                      subscription.planId.slice(1)}
                  </p>
                </div>
                <Zap className="h-6 w-6 text-muted-foreground" />
                <div className="text-right">
                  <p className="text-sm font-medium">New Plan</p>
                  <p className="text-lg font-bold">
                    {selectedPlan.charAt(0).toUpperCase() +
                      selectedPlan.slice(1)}
                  </p>
                </div>
              </div>

              {selectedPlan === "free" && subscription.planId !== "free" && (
                <Alert className="mt-4" variant="destructive">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Downgrading to the Free plan will limit your access to
                    premium features. Any projects or collaborators beyond the
                    Free plan limits will remain accessible, but you won&#39;t
                    be able to create new ones until you&#39;re under the limit.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setSelectedPlan(subscription.planId)}
              >
                Cancel
              </Button>
              <Button onClick={handleSubscription} disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                {selectedPlan === "free" ? "Downgrade" : "Upgrade"} Subscription
              </Button>
            </CardFooter>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="billing">
        <Card>
          <CardHeader>
            <CardTitle>Billing Information</CardTitle>
            <CardDescription>
              Manage your payment methods and view billing history.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Payment Method</h3>
              {subscription.planId === "free" ? (
                <p className="text-sm text-muted-foreground">
                  No payment method required for the Free plan.
                </p>
              ) : subscription.stripeCustomerId ? (
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center">
                    <CreditCard className="mr-4 h-6 w-6" />
                    <div>
                      <p className="font-medium">Payment method on file</p>
                      <p className="text-xs text-muted-foreground">
                        Manage your payment method in the Stripe customer portal
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleManageSubscription}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Icons.spinner className="h-4 w-4 animate-spin" />
                    ) : (
                      "Manage"
                    )}
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No payment method on file.
                </p>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Billing History</h3>
              {subscription.planId === "free" ? (
                <p className="text-sm text-muted-foreground">
                  No billing history available for the Free plan.
                </p>
              ) : subscription.stripeCustomerId ? (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    View your billing history in the Stripe customer portal.
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleManageSubscription}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "View Billing History"
                    )}
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No billing history available.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
