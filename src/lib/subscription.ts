import { db } from "@/lib/db";
import { PLANS, type PlanId } from "@/lib/stripe";

export async function getUserSubscription(userId: string) {
  const subscription = await db.subscription.findUnique({
    where: { userId },
  });

  if (!subscription) {
    // Default to free plan if no subscription exists
    return {
      planId: "free" as PlanId,
      status: "active",
      limits: PLANS.FREE.limits,
    };
  }

  // Check if subscription is active
  const isActive =
    subscription.status === "active" &&
    (!subscription.stripeCurrentPeriodEnd ||
      subscription.stripeCurrentPeriodEnd > new Date());

  // Get plan limits
  const planId = isActive
    ? (subscription.planId as PlanId)
    : ("free" as PlanId);
  const limits =
    PLANS[planId.toUpperCase() as keyof typeof PLANS]?.limits ||
    PLANS.FREE.limits;

  return {
    planId,
    status: isActive ? "active" : "inactive",
    limits,
  };
}

export async function getUserUsage(userId: string) {
  // Get or create usage record
  let usage = await db.subscriptionUsage.findUnique({
    where: { userId },
  });

  if (!usage) {
    usage = await db.subscriptionUsage.create({
      data: { userId },
    });
  }

  // Check if we need to reset monthly usage
  const now = new Date();
  const lastReset = new Date(usage.lastResetDate);
  const resetMonthly =
    now.getMonth() !== lastReset.getMonth() ||
    now.getFullYear() !== lastReset.getFullYear();

  if (resetMonthly) {
    usage = await db.subscriptionUsage.update({
      where: { userId },
      data: {
        projectsCreated: 0,
        collaboratorsInvited: 0,
        aiSuggestionsUsed: 0,
        wordsProcessed: 0,
        lastResetDate: now,
      },
    });
  }

  return usage;
}

export async function checkSubscriptionLimit({
  userId,
  limitType,
  increment = 0,
}: {
  userId: string;
  limitType:
    | "projectLimit"
    | "collaboratorsPerProject"
    | "aiSuggestions"
    | "wordLimit";
  increment?: number;
}) {
  const { limits } = await getUserSubscription(userId);
  const usage = await getUserUsage(userId);

  let currentUsage = 0;
  let usageField = "";

  switch (limitType) {
    case "projectLimit":
      currentUsage = usage.projectsCreated;
      usageField = "projectsCreated";
      break;
    case "collaboratorsPerProject":
      currentUsage = usage.collaboratorsInvited;
      usageField = "collaboratorsInvited";
      break;
    case "aiSuggestions":
      currentUsage = usage.aiSuggestionsUsed;
      usageField = "aiSuggestionsUsed";
      break;
    case "wordLimit":
      currentUsage = usage.wordsProcessed;
      usageField = "wordsProcessed";
      break;
  }

  const limit = limits[limitType];
  const newUsage = currentUsage + increment;

  // Check if the limit would be exceeded
  const wouldExceedLimit =
    limit !== Number.POSITIVE_INFINITY && newUsage > limit;

  // If we're incrementing usage, update the usage record
  if (increment > 0 && !wouldExceedLimit) {
    await db.subscriptionUsage.update({
      where: { userId },
      data: {
        [usageField]: newUsage,
      },
    });
  }

  return {
    limit,
    currentUsage,
    newUsage,
    wouldExceedLimit,
    remaining:
      limit === Number.POSITIVE_INFINITY
        ? Number.POSITIVE_INFINITY
        : Math.max(0, limit - currentUsage),
  };
}

export async function incrementUsage({
  userId,
  limitType,
  increment = 1,
}: {
  userId: string;
  limitType:
    | "projectLimit"
    | "collaboratorsPerProject"
    | "aiSuggestions"
    | "wordLimit";
  increment?: number;
}) {
  const result = await checkSubscriptionLimit({ userId, limitType, increment });

  if (result.wouldExceedLimit) {
    throw new Error(`Subscription limit exceeded for ${limitType}`);
  }

  return result;
}
