"use client";

import { useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icons } from "@/components/icons";
import { Copy, Key, Plus, Trash } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: Date;
  lastUsed: Date | null;
}

interface UserApiKeysProps {
  userId: string;
}

export function UserApiKeys({ userId }: UserApiKeysProps) {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateKey = async () => {
    if (!newKeyName) {
      toast.error("Please enter a name for your API key");
      return;
    }

    setIsLoading(true);
    try {
      // In a real app, you would create a new API key
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      // Create a mock API key
      const newKey: ApiKey = {
        id: Math.random().toString(36).substring(2, 9),
        name: newKeyName,
        key: `wai_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
        createdAt: new Date(),
        lastUsed: null,
      };

      setApiKeys([...apiKeys, newKey]);
      setNewKeyName("");
      setIsCreating(false);
      toast.success("API key created successfully");
    } catch (error) {
      toast.error("Failed to create API key");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteKey = async (id: string) => {
    try {
      // In a real app, you would delete the API key
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call

      setApiKeys(apiKeys.filter((key) => key.id !== id));
      toast.success("API key deleted successfully");
    } catch (error) {
      toast.error("Failed to delete API key");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("API key copied to clipboard");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
        <CardDescription>
          Manage your API keys for programmatic access to UseWriteAI.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {apiKeys.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
            <Key className="mb-2 h-10 w-10 text-muted-foreground" />
            <h3 className="text-lg font-medium">No API Keys</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              You haven&#39;t created any API keys yet. Create one to get
              started.
            </p>
            <Button onClick={() => setIsCreating(true)} className="mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Create API Key
            </Button>
          </div>
        ) : (
          <>
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Your API Keys</h3>
              <Button onClick={() => setIsCreating(true)} size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create New Key
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((key) => (
                  <TableRow key={key.id}>
                    <TableCell className="font-medium">{key.name}</TableCell>
                    <TableCell>{formatDate(key.createdAt)}</TableCell>
                    <TableCell>
                      {key.lastUsed ? formatDate(key.lastUsed) : "Never"}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(key.key)}
                        >
                          <Copy className="h-4 w-4" />
                          <span className="sr-only">Copy</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteKey(key.id)}
                        >
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}

        {isCreating && (
          <Card>
            <CardHeader>
              <CardTitle>Create New API Key</CardTitle>
              <CardDescription>
                Create a new API key for programmatic access to UseWriteAI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="key-name">Key Name</Label>
                  <Input
                    id="key-name"
                    placeholder="e.g., Development, Production"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateKey} disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Create API Key
              </Button>
            </CardFooter>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
