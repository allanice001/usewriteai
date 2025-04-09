"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy, Globe, Lock, MoreHorizontal, UserPlus, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Collaborator {
  id: string;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  };
  permissions: string;
}

interface Invitation {
  id: string;
  email: string;
  expires: string;
}

interface CollaboratorsListProps {
  projectId: string;
  isOwner: boolean;
}

export function CollaboratorsList({
  projectId,
  isOwner,
}: CollaboratorsListProps) {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [isPublic, setIsPublic] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("read");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCollaborators();
  }, [projectId]);

  const fetchCollaborators = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/projects/${projectId}/share`);
      if (!response.ok) {
        throw new Error("Failed to fetch collaborators");
      }
      const data = await response.json();
      setCollaborators(data.sharedWith || []);
      setInvitations(data.invitations || []);
      setIsPublic(data.project.isPublic);
    } catch (error) {
      toast.error("Failed to load collaborators");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInviteCollaborator = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/projects/${projectId}/share`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          permissions,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to share project");
      }

      toast.success(`Project shared with ${email}`);
      setEmail("");
      fetchCollaborators();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to share project",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveCollaborator = async (userId: string) => {
    try {
      const response = await fetch(
        `/api/projects/${projectId}/share/${userId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to remove collaborator");
      }

      toast.success("Collaborator removed");
      fetchCollaborators();
    } catch (error) {
      toast.error("Failed to remove collaborator");
      console.error(error);
    }
  };

  const handleUpdatePermissions = async (
    userId: string,
    newPermissions: string,
  ) => {
    try {
      const response = await fetch(
        `/api/projects/${projectId}/share/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            permissions: newPermissions,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update permissions");
      }

      toast.success("Permissions updated");
      fetchCollaborators();
    } catch (error) {
      toast.error("Failed to update permissions");
      console.error(error);
    }
  };

  const handleTogglePublic = async () => {
    try {
      const response = await fetch(`/api/projects/${projectId}/public`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPublic: !isPublic,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update project visibility");
      }

      setIsPublic(!isPublic);
      toast.success(`Project is now ${!isPublic ? "public" : "private"}`);
    } catch (error) {
      toast.error("Failed to update project visibility");
      console.error(error);
    }
  };

  const copyShareLink = () => {
    const shareUrl = `${window.location.origin}/projects/${projectId}/view`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Share link copied to clipboard");
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Collaborators</CardTitle>
          <CardDescription>Loading collaborators...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Icons.spinner className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {isOwner && (
        <Card>
          <CardHeader>
            <CardTitle>Project Visibility</CardTitle>
            <CardDescription>
              Control who can access this project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Public access</Label>
                <p className="text-sm text-muted-foreground">
                  {isPublic
                    ? "Anyone with the link can view this project"
                    : "Only you and people you share with can access"}
                </p>
              </div>
              <Switch checked={isPublic} onCheckedChange={handleTogglePublic} />
            </div>

            {isPublic && (
              <div className="mt-4 flex items-center space-x-2">
                <Input
                  readOnly
                  value={`${window.location.origin}/projects/${projectId}/view`}
                  className="flex-1"
                />
                <Button size="sm" variant="outline" onClick={copyShareLink}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Invite Collaborators</CardTitle>
          <CardDescription>
            Share your project with others to collaborate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleInviteCollaborator} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <div className="flex space-x-2">
                <Input
                  id="email"
                  placeholder="colleague@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  disabled={!isOwner}
                />
                <Select
                  value={permissions}
                  onValueChange={setPermissions}
                  disabled={!isOwner}
                >
                  <SelectTrigger className="w-[110px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="read">Can view</SelectItem>
                    <SelectItem value="write">Can edit</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting || !isOwner}
              className="w-full"
            >
              {isSubmitting ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <UserPlus className="mr-2 h-4 w-4" />
              )}
              Invite Collaborator
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Collaborators</CardTitle>
          <CardDescription>People with access to this project.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {collaborators.length === 0 && invitations.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
                <UserPlus className="mb-2 h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">No collaborators yet</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Invite people to collaborate on this project.
                </p>
              </div>
            ) : (
              <>
                {collaborators.map((collaborator) => (
                  <div
                    key={collaborator.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src={
                            collaborator.user.image ||
                            `https://avatar.vercel.sh/${collaborator.user.email}`
                          }
                          alt={collaborator.user.name || ""}
                        />
                        <AvatarFallback>
                          {collaborator.user.name
                            ? collaborator.user.name.charAt(0).toUpperCase()
                            : collaborator.user.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {collaborator.user.name || collaborator.user.email}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {collaborator.user.email}
                        </p>
                      </div>
                    </div>
                    {isOwner && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() =>
                              handleUpdatePermissions(
                                collaborator.user.id,
                                "read",
                              )
                            }
                            className={
                              collaborator.permissions === "read"
                                ? "bg-muted"
                                : ""
                            }
                          >
                            Can view
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleUpdatePermissions(
                                collaborator.user.id,
                                "write",
                              )
                            }
                            className={
                              collaborator.permissions === "write"
                                ? "bg-muted"
                                : ""
                            }
                          >
                            Can edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleUpdatePermissions(
                                collaborator.user.id,
                                "admin",
                              )
                            }
                            className={
                              collaborator.permissions === "admin"
                                ? "bg-muted"
                                : ""
                            }
                          >
                            Admin
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-destructive focus:text-destructive"
                            onClick={() =>
                              handleRemoveCollaborator(collaborator.user.id)
                            }
                          >
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                ))}

                {invitations.length > 0 && (
                  <>
                    <h4 className="text-sm font-medium text-muted-foreground pt-4">
                      Pending Invitations
                    </h4>
                    {invitations.map((invitation) => (
                      <div
                        key={invitation.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage
                              src={`https://avatar.vercel.sh/${invitation.email}`}
                              alt={invitation.email}
                            />
                            <AvatarFallback>
                              {invitation.email.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              {invitation.email}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Invitation sent - expires{" "}
                              {new Date(
                                invitation.expires,
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        {isOwner && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => {
                              // In a real app, you would implement a way to revoke invitations
                              toast.error(
                                "Revoking invitations is not implemented yet",
                              );
                            }}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Revoke invitation</span>
                          </Button>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            {isPublic ? (
              <>
                <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Public</span>
              </>
            ) : (
              <>
                <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Private</span>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
