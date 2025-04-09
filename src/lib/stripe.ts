import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-03-31.basil",
  typescript: true,
});

export const PLANS = {
  FREE: {
    id: "free",
    name: "Free",
    description: "For trying out UseWriteAI",
    features: [
      "3 projects",
      "1 collaborator per project",
      "50 AI suggestions per month",
      "10,000 words per month",
    ],
    limits: {
      projectLimit: 3,
      collaboratorsPerProject: 1,
      aiSuggestions: 50,
      wordLimit: 10000,
    },
    stripePriceId: null, // Free plan doesn't have a Stripe price ID
  },
  PRO: {
    id: "pro",
    name: "Pro",
    description: "For serious writers and content creators",
    features: [
      "Unlimited projects",
      "5 collaborators per project",
      "500 AI suggestions per month",
      "100,000 words per month",
      "Priority support",
      "Export to PDF, Word, and Markdown",
    ],
    limits: {
      projectLimit: Number.POSITIVE_INFINITY,
      collaboratorsPerProject: 5,
      aiSuggestions: 500,
      wordLimit: 100000,
    },
    stripePriceId: process.env.STRIPE_PRO_PRICE_ID,
  },
  ENTERPRISE: {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams and organizations",
    features: [
      "Unlimited everything",
      "Unlimited collaborators",
      "Unlimited AI suggestions",
      "Unlimited words",
      "Custom AI training",
      "Dedicated support",
      "Advanced analytics",
    ],
    limits: {
      projectLimit: Number.POSITIVE_INFINITY,
      collaboratorsPerProject: Number.POSITIVE_INFINITY,
      aiSuggestions: Number.POSITIVE_INFINITY,
      wordLimit: Number.POSITIVE_INFINITY,
    },
    stripePriceId: process.env.STRIPE_ENTERPRISE_PRICE_ID,
  },
};

export type PlanId = keyof typeof PLANS;

export function getPlanById(
  planId: string,
): (typeof PLANS)[PlanId] | undefined {
  return Object.values(PLANS).find((plan) => plan.id === planId);
}

export function getPlanByPriceId(
  priceId: string,
): (typeof PLANS)[PlanId] | undefined {
  return Object.values(PLANS).find((plan) => plan.stripePriceId === priceId);
}

export async function createCheckoutSession({
  userId,
  planId,
  successUrl,
  cancelUrl,
}: {
  userId: string;
  planId: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const plan = getPlanById(planId);

  if (!plan || !plan.stripePriceId) {
    throw new Error("Invalid plan or plan does not have a Stripe price ID");
  }

  // Create a checkout session
  const session = await stripe.checkout.sessions.create({
    customer_email: undefined, // Will be set by Stripe based on the user's email
    client_reference_id: userId,
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price: plan.stripePriceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId,
      planId,
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return session;
}

export async function createCustomerPortalSession({
  customerId,
  returnUrl,
}: {
  customerId: string;
  returnUrl: string;
}) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  return session;
}

export async function cancelSubscription(subscriptionId: string) {
  return await stripe.subscriptions.cancel(subscriptionId);
}
