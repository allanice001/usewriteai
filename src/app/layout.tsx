import "@/styles/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "UseWriteAI - AI Writing Assistant",
    template: "%s | UseWriteAI",
  },
  description: "Generate high-quality content with AI assistance",
  keywords: [
    "AI",
    "writing",
    "content",
    "assistant",
    "editor",
    "NextJS",
    "React",
  ],
  authors: [
    {
      name: "UseWriteAI Team",
    },
  ],
  creator: "UseWriteAI Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usewriteai.com",
    title: "UseWriteAI - AI Writing Assistant",
    description: "Generate high-quality content with AI assistance",
    siteName: "UseWriteAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "UseWriteAI - AI Writing Assistant",
    description: "Generate high-quality content with AI assistance",
    creator: "@usewriteai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://usewriteai.com/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
