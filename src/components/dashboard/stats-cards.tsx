"use client";

import { useEffect, useState } from "react";
import { FileText, Clock, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface StatsCardsProps {
  userId: string;
}

interface UserStats {
  totalProjects: number;
  totalWords: number;
  aiSuggestions: number;
  lastActive: string | null;
}

export function StatsCards({ userId }: StatsCardsProps) {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/user/stats?userId=${userId}`);

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Failed to load stats");
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to load stats",
        );
        // Fallback to mock data if the API fails
        setStats({
          totalProjects: 0,
          totalWords: 0,
          aiSuggestions: 0,
          lastActive: null,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="h-[120px]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-7 w-16" />
                <Skeleton className="mt-2 h-4 w-24" />
              </CardContent>
            </Card>
          ))}
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Never";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalProjects}</div>
          <p className="text-xs text-muted-foreground">
            {stats.totalProjects === 1
              ? "1 project"
              : `${stats.totalProjects} projects`}{" "}
            created
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Words</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats.totalWords.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            Words written across all projects
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">AI Suggestions</CardTitle>
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.aiSuggestions}</div>
          <p className="text-xs text-muted-foreground">
            AI suggestions generated
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Last Active</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatDate(stats.lastActive)}
          </div>
          <p className="text-xs text-muted-foreground">Last project update</p>
        </CardContent>
      </Card>
    </div>
  );
}
