"use client";

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
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

interface NotificationSettings {
  emailNotifications: boolean;
  projectUpdates: boolean;
  newFeatures: boolean;
  marketingEmails: boolean;
  collaborationInvites: boolean;
}

interface UserNotificationSettingsProps {
  userId: string;
}

export function UserNotificationSettings({
  userId,
}: UserNotificationSettingsProps) {
  const [settings, setSettings] = useState<NotificationSettings>({
    emailNotifications: true,
    projectUpdates: true,
    newFeatures: true,
    marketingEmails: false,
    collaborationInvites: true,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // In a real app, you would fetch the user's notification settings
        // For now, we'll use the default values
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching notification settings:", error);
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, [userId]);

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      // In a real app, you would save the user's notification settings
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      toast.success("Notification settings saved");
    } catch (error) {
      toast.error("Failed to save notification settings");
    } finally {
      setIsSaving(false);
    }
  };

  const updateSetting = (key: keyof NotificationSettings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Loading notification settings...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Icons.spinner className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Manage how and when you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="emailNotifications">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications for important updates.
            </p>
          </div>
          <Switch
            id="emailNotifications"
            checked={settings.emailNotifications}
            onCheckedChange={(checked) =>
              updateSetting("emailNotifications", checked)
            }
          />
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Email Preferences</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="projectUpdates">Project Updates</Label>
              <p className="text-sm text-muted-foreground">
                Notifications about your projects and collaborations.
              </p>
            </div>
            <Switch
              id="projectUpdates"
              checked={settings.projectUpdates}
              onCheckedChange={(checked) =>
                updateSetting("projectUpdates", checked)
              }
              disabled={!settings.emailNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newFeatures">New Features</Label>
              <p className="text-sm text-muted-foreground">
                Updates about new features and improvements.
              </p>
            </div>
            <Switch
              id="newFeatures"
              checked={settings.newFeatures}
              onCheckedChange={(checked) =>
                updateSetting("newFeatures", checked)
              }
              disabled={!settings.emailNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketingEmails">Marketing Emails</Label>
              <p className="text-sm text-muted-foreground">
                Promotional emails and special offers.
              </p>
            </div>
            <Switch
              id="marketingEmails"
              checked={settings.marketingEmails}
              onCheckedChange={(checked) =>
                updateSetting("marketingEmails", checked)
              }
              disabled={!settings.emailNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="collaborationInvites">
                Collaboration Invites
              </Label>
              <p className="text-sm text-muted-foreground">
                Notifications when someone invites you to collaborate.
              </p>
            </div>
            <Switch
              id="collaborationInvites"
              checked={settings.collaborationInvites}
              onCheckedChange={(checked) =>
                updateSetting("collaborationInvites", checked)
              }
              disabled={!settings.emailNotifications}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveSettings} disabled={isSaving}>
          {isSaving && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  );
}
