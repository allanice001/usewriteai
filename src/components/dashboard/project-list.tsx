"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  BarChart,
  Edit,
  MoreHorizontal,
  Plus,
  Trash,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreateProjectDialog } from "@/components/dashboard/create-project-dialog";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/generated/prisma/client";

interface ProjectListProps {
  userId: string;
  className?: string;
  limit?: number;
}

export function ProjectList({ userId, className, limit }: ProjectListProps) {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Use the API route instead of direct Prisma call
        const response = await fetch(`/api/projects?userId=${userId}`);

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Failed to load projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to load projects",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [userId]);

  const handleDelete = async (id: string) => {
    try {
      // Use the API route instead of direct Prisma call
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to delete project");
      }

      setProjects(projects.filter((project) => project.id !== id));
      toast.success("Project deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete project",
      );
    }
  };

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={`grid gap-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {limit ? "Recent Projects" : "Your Projects"}
        </h2>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array(limit || 3)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="h-[200px] animate-pulse bg-muted" />
            ))}
        </div>
      ) : displayedProjects.length === 0 ? (
        <Card className="p-8 text-center">
          <CardDescription>
            You don&apos;t have any projects yet. Create one to get started.
          </CardDescription>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setIsCreating(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{project.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/dashboard/projects/${project.id}/analytics`}
                        >
                          <BarChart className="mr-2 h-4 w-4" />
                          Analytics
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/dashboard/projects/${project.id}/collaborators`}
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Collaborators
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/editor/${project.id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => handleDelete(project.id)}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardDescription>
                  {project.description || "No description"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.content?.substring(0, 100) || "No content yet"}
                  {project.content && project.content.length > 100 ? "..." : ""}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-xs text-muted-foreground">
                  Last updated: {formatDate(project.updatedAt)}
                </p>
                <Link
                  href={`/projects/${project.id}/view`}
                  className="text-xs text-primary hover:underline"
                >
                  View Public
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {limit && projects.length > limit && (
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/dashboard/projects">View All Projects</Link>
          </Button>
        </div>
      )}

      <CreateProjectDialog
        open={isCreating}
        onOpenChange={setIsCreating}
        userId={userId}
        onSuccess={(newProject) => {
          setProjects([newProject, ...projects]);
          router.refresh();
        }}
      />
    </div>
  );
}
