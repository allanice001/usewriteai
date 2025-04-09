# UseWriteAI
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, Copy the example environment variables to .env for the project
```bash
cp .env.example .env
```
Review the environment variable
Implement your own stripe and auth keys

then, start the docker environment to provide a local postgres for development, pushing the schema from prisma to postgres
```bash
# start docker containers in detached mode
docker compose up -d

# push the schema to postgres
prisma db push
```

then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Steps for Stripe Integration

1. **Set up Products and Prices in Stripe Dashboard**

  - Create a "Pro" product with a price ID matching your `STRIPE_PRO_PRICE_ID` variable
  - Create an "Enterprise" product with a price ID matching your `STRIPE_ENTERPRISE_PRICE_ID` variable 
  - Make sure both are set as recurring subscriptions (monthly billing)


2. **Configure Stripe Webhook**
  - In your Stripe Dashboard, go to Developers > Webhooks 
  - Add an endpoint that points to `https://yourdomain.com/api/stripe/webhook`
  - Select at least these events to listen for:
    - `checkout.session.completed`
    - `invoice.payment_succeeded`
    - `customer.subscription.updated`
    - `customer.subscription.deleted`
  - The webhook secret should match your `STRIPE_WEBHOOK_SECRET` variable


3. **Test the Integration**
  - Start with the free tier 
  - Try upgrading to Pro and check if Stripe checkout appears 
  - After successful payment, verify that your subscription status updates 
  - Test the usage limits by creating projects, collaborators, etc. 
  - Try managing your subscription through the customer portal

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
