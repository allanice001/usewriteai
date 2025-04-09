"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Copy, Globe, Lock, MoreHorizontal, UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ShareProjectDialogProps {
  projectId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface SharedUser {
  id: string;
  user: {
    id: string;
    name: string | null;
    email: string | null;
  };
  permissions: string;
}

interface Invitation {
  id: string;
  email: string;
  token: string;
  expires: string;
}

interface SharingInfo {
  project: {
    id: string;
    title: string;
    isPublic: boolean;
  };
  owner: {
    id: string;
    name: string | null;
    email: string | null;
  };
  isOwner: boolean;
  sharedWith: SharedUser[];
  invitations: Invitation[];
}

export function ShareProjectDialog({
  projectId,
  open,
  onOpenChange,
}: ShareProjectDialogProps) {
  const [sharingInfo, setSharingInfo] = useState<SharingInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("read");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      fetchSharingInfo();
    }
  }, [open, projectId]);

  const fetchSharingInfo = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/projects/${projectId}/share`);
      if (!response.ok) {
        throw new Error("Failed to fetch sharing information");
      }
      const data = await response.json();
      setSharingInfo(data);
    } catch (error) {
      toast.error("Failed to load sharing information");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShareProject = async (e: React.FormEvent) => {
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
      fetchSharingInfo();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to share project",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveUser = async (userId: string) => {
    try {
      const response = await fetch(
        `/api/projects/${projectId}/share/${userId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to remove user");
      }

      toast.success("User removed from project");
      fetchSharingInfo();
    } catch (error) {
      toast.error("Failed to remove user");
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
      fetchSharingInfo();
    } catch (error) {
      toast.error("Failed to update permissions");
      console.error(error);
    }
  };

  const handleTogglePublic = async () => {
    if (!sharingInfo) return;

    try {
      const response = await fetch(`/api/projects/${projectId}/public`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isPublic: !sharingInfo.project.isPublic,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update project visibility");
      }

      toast.success(
        `Project is now ${!sharingInfo.project.isPublic ? "public" : "private"}`,
      );
      fetchSharingInfo();
    } catch (error) {
      toast.error("Failed to update project visibility");
      console.error(error);
    }
  };

  const copyShareLink = () => {
    if (!sharingInfo) return;

    const shareUrl = `${window.location.origin}/projects/${projectId}/view`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Share link copied to clipboard");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Share Project</DialogTitle>
          <DialogDescription>
            Share your project with others or make it public.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Icons.spinner className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <>
            {sharingInfo && sharingInfo.isOwner && (
              <>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Public access</Label>
                      <p className="text-sm text-muted-foreground">
                        {sharingInfo.project.isPublic
                          ? "Anyone with the link can view this project"
                          : "Only you and people you share with can access"}
                      </p>
                    </div>
                    <Switch
                      checked={sharingInfo.project.isPublic}
                      onCheckedChange={handleTogglePublic}
                    />
                  </div>

                  {sharingInfo.project.isPublic && (
                    <div className="flex items-center space-x-2">
                      <Input
                        readOnly
                        value={`${window.location.origin}/projects/${projectId}/view`}
                        className="flex-1"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={copyShareLink}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  <form onSubmit={handleShareProject} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Share with people</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="email"
                          placeholder="Email address"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1"
                        />
                        <Select
                          value={permissions}
                          onValueChange={setPermissions}
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
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <UserPlus className="mr-2 h-4 w-4" />
                      )}
                      Share
                    </Button>
                  </form>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">People with access</h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage
                            src={`https://avatar.vercel.sh/${sharingInfo.owner.email}`}
                            alt={sharingInfo.owner.name || ""}
                          />
                          <AvatarFallback>
                            {sharingInfo.owner.name
                              ? sharingInfo.owner.name.charAt(0).toUpperCase()
                              : "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {sharingInfo.owner.name || sharingInfo.owner.email}{" "}
                            <span className="text-xs text-muted-foreground">
                              (you)
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {sharingInfo.owner.email}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Owner
                      </span>
                    </div>

                    {sharingInfo.sharedWith.map((shared) => (
                      <div
                        key={shared.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage
                              src={`https://avatar.vercel.sh/${shared.user.email}`}
                              alt={shared.user.name || ""}
                            />
                            <AvatarFallback>
                              {shared.user.name
                                ? shared.user.name.charAt(0).toUpperCase()
                                : "U"}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              {shared.user.name || shared.user.email}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {shared.user.email}
                            </p>
                          </div>
                        </div>
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
                                handleUpdatePermissions(shared.user.id, "read")
                              }
                              className={
                                shared.permissions === "read" ? "bg-muted" : ""
                              }
                            >
                              Can view
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleUpdatePermissions(shared.user.id, "write")
                              }
                              className={
                                shared.permissions === "write" ? "bg-muted" : ""
                              }
                            >
                              Can edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleUpdatePermissions(shared.user.id, "admin")
                              }
                              className={
                                shared.permissions === "admin" ? "bg-muted" : ""
                              }
                            >
                              Admin
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => handleRemoveUser(shared.user.id)}
                            >
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}

                    {sharingInfo.invitations.length > 0 && (
                      <>
                        <h4 className="text-xs font-medium text-muted-foreground pt-2">
                          Pending invitations
                        </h4>
                        {sharingInfo.invitations.map((invitation) => (
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
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            {sharingInfo && !sharingInfo.isOwner && (
              <div className="py-4 text-center">
                <p>
                  You don&#39;t have permission to manage sharing for this
                  project.
                </p>
              </div>
            )}
          </>
        )}

        <DialogFooter className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            {sharingInfo?.project.isPublic ? (
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
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
