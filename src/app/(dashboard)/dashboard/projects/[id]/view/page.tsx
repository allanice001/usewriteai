import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { getCurrentUser } from "@/lib/session";
import { PublicProjectContent } from "@/components/public-project-content";

interface PublicProjectPageProps {
  params: {
    id: string;
  };
}

export default async function PublicProjectPage({
  params,
}: PublicProjectPageProps) {
  const currentUser = await getCurrentUser();

  // Fetch the project
  const project = await db.project.findUnique({
    where: {
      id: params.id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  // Check if the project is public or the user has access
  const isOwner = currentUser?.id === project.userId;

  if (!project.isPublic && !isOwner) {
    // Check if the project is shared with the user
    const hasAccess =
      currentUser &&
      (await db.sharedProject.findUnique({
        where: {
          projectId_userId: {
            projectId: params.id,
            userId: currentUser.id,
          },
        },
      }));

    if (!hasAccess) {
      notFound();
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        {currentUser && (
          <div className="flex gap-2">
            {isOwner && (
              <Button asChild>
                <Link href={`/editor/${project.id}`}>Edit Project</Link>
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        {project.description && (
          <p className="mt-2 text-lg text-muted-foreground">
            {project.description}
          </p>
        )}
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>{project.user.name || project.user.email}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>Updated {formatDate(project.updatedAt)}</span>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <Card className="p-6">
        <PublicProjectContent content={project.content || ""} />
      </Card>
    </div>
  );
}
