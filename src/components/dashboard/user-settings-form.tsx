"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Icons } from "@/components/icons";
import { useTheme } from "next-themes";
import type { Session } from "next-auth";

interface UserPreferences {
  theme: string;
  emailNotifications: boolean;
  aiSuggestions: boolean;
  autoSave: boolean;
  fontSize: number;
  editorFontFamily: string;
}

interface UserSettingsFormProps {
  user: Session["user"];
}

export function UserSettingsForm({ user }: UserSettingsFormProps) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(user.name || "");
  const [preferences, setPreferences] = useState<UserPreferences>({
    theme: "system",
    emailNotifications: true,
    aiSuggestions: true,
    autoSave: true,
    fontSize: 16,
    editorFontFamily: "Inter",
  });
  const [isLoadingPreferences, setIsLoadingPreferences] = useState(true);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const response = await fetch("/api/user/preferences");
        if (response.ok) {
          const data = await response.json();
          setPreferences(data);
          setTheme(data.theme);
        }
      } catch (error) {
        console.error("Error fetching preferences:", error);
      } finally {
        setIsLoadingPreferences(false);
      }
    };

    fetchPreferences();
  }, [setTheme]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Update user profile
      const profileResponse = await fetch("/api/user/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });

      if (!profileResponse.ok) {
        const error = await profileResponse.json();
        throw new Error(error.error || "Failed to update profile");
      }

      toast.success("Profile updated successfully");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to update profile",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updatePreference = async (key: keyof UserPreferences, value: any) => {
    try {
      // Update local state immediately for a responsive UI
      setPreferences((prev) => ({ ...prev, [key]: value }));

      // If the preference is theme, update the theme
      if (key === "theme") {
        setTheme(value);
      }

      // Send the update to the server
      const response = await fetch("/api/user/preferences", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [key]: value }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update preference");
      }

      toast.success(`${key} preference updated`);
    } catch (error) {
      // Revert the local state if there was an error
      setPreferences((prev) => ({ ...prev, [key]: preferences[key] }));
      toast.error(
        error instanceof Error ? error.message : "Failed to update preference",
      );
    }
  };

  const fontFamilies = [
    { value: "Inter", label: "Inter" },
    { value: "Roboto", label: "Roboto" },
    { value: "Merriweather", label: "Merriweather" },
    { value: "Courier New", label: "Courier New" },
    { value: "Arial", label: "Arial" },
    { value: "Times New Roman", label: "Times New Roman" },
  ];

  if (isLoadingPreferences) {
    return (
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Loading preferences...</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Icons.spinner className="h-8 w-8 animate-spin" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your profile information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={user.email || ""} disabled />
              <p className="text-sm text-muted-foreground">
                Your email address cannot be changed.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save Profile
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the application looks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Select
              value={preferences.theme}
              onValueChange={(value) => updatePreference("theme", value)}
            >
              <SelectTrigger id="theme">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="fontSize">
              Font Size ({preferences.fontSize}px)
            </Label>
            <Slider
              id="fontSize"
              min={12}
              max={24}
              step={1}
              value={[preferences.fontSize]}
              onValueChange={(value) => updatePreference("fontSize", value[0])}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="editorFontFamily">Editor Font</Label>
            <Select
              value={preferences.editorFontFamily}
              onValueChange={(value) =>
                updatePreference("editorFontFamily", value)
              }
            >
              <SelectTrigger id="editorFontFamily">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {fontFamilies.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Editor Preferences</CardTitle>
          <CardDescription>Customize your writing experience.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="autoSave">Auto Save</Label>
              <p className="text-sm text-muted-foreground">
                Automatically save your work as you type.
              </p>
            </div>
            <Switch
              id="autoSave"
              checked={preferences.autoSave}
              onCheckedChange={(checked) =>
                updatePreference("autoSave", checked)
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="aiSuggestions">AI Suggestions</Label>
              <p className="text-sm text-muted-foreground">
                Enable AI-powered writing suggestions.
              </p>
            </div>
            <Switch
              id="aiSuggestions"
              checked={preferences.aiSuggestions}
              onCheckedChange={(checked) =>
                updatePreference("aiSuggestions", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Manage your notification preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="emailNotifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email notifications about your projects.
              </p>
            </div>
            <Switch
              id="emailNotifications"
              checked={preferences.emailNotifications}
              onCheckedChange={(checked) =>
                updatePreference("emailNotifications", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            Irreversible and destructive actions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-destructive">
              Delete Account
            </h3>
            <p className="text-sm text-muted-foreground">
              Permanently delete your account and all associated data. This
              action cannot be undone.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            type="button"
            onClick={() => {
              toast.error("This feature is not implemented yet");
            }}
          >
            Delete Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
