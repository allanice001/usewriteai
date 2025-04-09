import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error: any) {
    console.error(`Webhook Error: ${error.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 },
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata?.userId;
        const planId = session.metadata?.planId;

        if (!userId || !planId) {
          console.error("Missing userId or planId in session metadata");
          return NextResponse.json(
            { error: "Missing metadata" },
            { status: 400 },
          );
        }

        // Store the customer ID with the user
        await db.user.update({
          where: { id: userId },
          data: { stripeCustomerId: session.customer as string },
        });

        // First, safely extract the price ID
        const stripePriceId = session.line_items?.data?.[0]?.price?.id || null;

        // Set default expiration to 30 days from now
        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

        // Create or update the subscription
        await db.subscription.upsert({
          where: { userId },
          update: {
            stripeSubscriptionId: session.subscription as string,
            stripePriceId,
            stripeCurrentPeriodEnd: thirtyDaysFromNow,
            planId,
            status: "active",
          },
          create: {
            userId,
            stripeSubscriptionId: session.subscription as string,
            stripePriceId,
            stripeCurrentPeriodEnd: thirtyDaysFromNow,
            planId,
            status: "active",
          },
        });

        break;
      }
      case "invoice.payment_succeeded": {
        const invoice = event.data.object;
        // Safely access subscription ID - it might be in a different location in the object
        const subscriptionId =
          ((invoice as any).subscription as string) || null;
        const customerId = invoice.customer as string;

        // Find the user by Stripe customer ID
        const user = await db.user.findFirst({
          where: { stripeCustomerId: customerId },
          include: { subscription: true },
        });

        if (!user) {
          console.error(`No user found with Stripe customer ID: ${customerId}`);
          return NextResponse.json(
            { error: "User not found" },
            { status: 404 },
          );
        }

        // Only update if we have line items with period data
        if (invoice.lines?.data?.[0]?.period?.end) {
          // Update the subscription period end
          await db.subscription.update({
            where: { userId: user.id },
            data: {
              stripeCurrentPeriodEnd: new Date(
                invoice.lines.data[0].period.end * 1000,
              ),
              status: "active",
            },
          });
        }

        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const customerId = subscription.customer as string;

        // Find the user by Stripe customer ID
        const user = await db.user.findFirst({
          where: { stripeCustomerId: customerId },
        });

        if (!user) {
          console.error(`No user found with Stripe customer ID: ${customerId}`);
          return NextResponse.json(
            { error: "User not found" },
            { status: 404 },
          );
        }

        // Safely access current_period_end with type assertion
        const currentPeriodEnd = (subscription as any).current_period_end
          ? new Date((subscription as any).current_period_end * 1000)
          : null;

        // Update the subscription
        await db.subscription.update({
          where: { userId: user.id },
          data: {
            status: subscription.status,
            stripeCurrentPeriodEnd: currentPeriodEnd,
          },
        });

        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const customerId = subscription.customer as string;

        // Find the user by Stripe customer ID
        const user = await db.user.findFirst({
          where: { stripeCustomerId: customerId },
        });

        if (!user) {
          console.error(`No user found with Stripe customer ID: ${customerId}`);
          return NextResponse.json(
            { error: "User not found" },
            { status: 404 },
          );
        }

        // Update the subscription to free plan
        await db.subscription.update({
          where: { userId: user.id },
          data: {
            planId: "free",
            status: "canceled",
            stripeSubscriptionId: null,
            stripePriceId: null,
            stripeCurrentPeriodEnd: null,
          },
        });

        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error handling webhook event:", error);
    return NextResponse.json(
      { error: "Error handling webhook event" },
      { status: 500 },
    );
  }
}

export const runtime = "nodejs";
