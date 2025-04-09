"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, FileText, Home, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function DashboardNav() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/projects",
      label: "Projects",
      icon: FileText,
      active:
        pathname === "/dashboard/projects" ||
        pathname.startsWith("/dashboard/projects/"),
    },
    {
      href: "/dashboard/profile",
      label: "Profile",
      icon: User,
      active: pathname === "/dashboard/profile",
    },
    {
      href: "/dashboard/subscription",
      label: "Subscription",
      icon: CreditCard,
      active: pathname === "/dashboard/subscription",
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/dashboard/settings",
    },
  ];

  return (
    <nav className="grid items-start gap-2">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            route.active
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
        >
          <route.icon className="mr-2 h-4 w-4" />
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
