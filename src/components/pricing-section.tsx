import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PricingSection() {
  return (
    <section className="container py-8 md:py-12 lg:py-24" id="pricing">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, Transparent Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that works best for you.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-8 lg:grid-cols-3 lg:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>
              Perfect for trying out UseWriteAI.
            </CardDescription>
            <div className="pt-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>3 projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic AI suggestions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>1,000 words per month</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/register" className="w-full">
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              For serious writers and content creators.
            </CardDescription>
            <div className="pt-4">
              <span className="text-3xl font-bold">$19</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced AI suggestions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>50,000 words per month</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Priority support</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/register" className="w-full">
              <Button className="w-full">Subscribe</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For teams and organizations.</CardDescription>
            <div className="pt-4">
              <span className="text-3xl font-bold">$99</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited everything</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Team collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Custom AI training</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Dedicated support</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/contact" className="w-full">
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
