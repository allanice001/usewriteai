import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">Page not found</p>
        <p className="mt-4 text-muted-foreground">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
