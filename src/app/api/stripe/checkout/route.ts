import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createCheckoutSession, getPlanById } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { planId } = await req.json();

    if (!planId) {
      return NextResponse.json(
        { error: "Plan ID is required" },
        { status: 400 },
      );
    }

    const plan = getPlanById(planId);

    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    // Free plan doesn't require Stripe checkout
    if (planId === "free") {
      // Update user's subscription to free plan
      await db.subscription.upsert({
        where: { userId: session.user.id },
        update: {
          planId: "free",
          status: "active",
          stripeSubscriptionId: null,
          stripePriceId: null,
          stripeCurrentPeriodEnd: null,
        },
        create: {
          userId: session.user.id,
          planId: "free",
          status: "active",
        },
      });

      return NextResponse.json({
        success: true,
        url: "/dashboard/subscription?success=true",
      });
    }

    // For paid plans, create a Stripe checkout session
    const checkoutSession = await createCheckoutSession({
      userId: session.user.id,
      planId,
      successUrl: `${req.headers.get("origin")}/dashboard/subscription?success=true`,
      cancelUrl: `${req.headers.get("origin")}/dashboard/subscription?canceled=true`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
