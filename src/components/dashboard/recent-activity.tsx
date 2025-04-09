"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Edit, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Activity {
  id: string;
  type: "created" | "updated";
  projectId: string;
  projectTitle: string;
  timestamp: string;
}

interface RecentActivityProps {
  userId: string;
  className?: string;
}

export function RecentActivity({ userId, className }: RecentActivityProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`/api/user/activity?userId=${userId}`);

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Failed to load activities");
        }

        const data = await response.json();
        setActivities(data);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to load activities",
        );
        setActivities([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivities();
  }, [userId]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent project activities</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                </div>
              ))}
          </div>
        ) : activities.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground">
            No recent activity
          </p>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4">
                <div className="rounded-full bg-muted p-2">
                  {activity.type === "created" ? (
                    <FileText className="h-4 w-4" />
                  ) : (
                    <Edit className="h-4 w-4" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.type === "created" ? "Created" : "Updated"}{" "}
                    <Link
                      href={`/editor/${activity.projectId}`}
                      className="font-bold hover:underline"
                    >
                      {activity.projectTitle}
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(activity.timestamp), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
