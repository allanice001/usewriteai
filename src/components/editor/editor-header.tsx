"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ChevronLeft, Save, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShareProjectDialog } from "@/components/editor/share-project-dialog";
import { ExportMenu } from "@/components/editor/export-menu";

interface EditorHeaderProps {
  title: string;
  projectId: string;
  onTitleChange: (title: string) => void;
  isSaving: boolean;
  lastSaved: Date | null;
  onSave: () => void;
  onBack: () => void;
}

export function EditorHeader({
  title,
  projectId,
  onTitleChange,
  isSaving,
  lastSaved,
  onSave,
  onBack,
}: EditorHeaderProps) {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  return (
    <div className="flex h-16 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="h-9 w-[200px] border-none text-lg font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Untitled"
        />
      </div>
      <div className="flex items-center gap-4">
        {lastSaved && (
          <p className="text-xs text-muted-foreground">
            Last saved {formatDistanceToNow(lastSaved, { addSuffix: true })}
          </p>
        )}
        <ExportMenu projectId={projectId} />
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShareDialogOpen(true)}
        >
          <Share className="mr-2 h-4 w-4" />
          Share
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <>Saving...</>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save
            </>
          )}
        </Button>
      </div>
      <ShareProjectDialog
        projectId={projectId}
        open={shareDialogOpen}
        onOpenChange={setShareDialogOpen}
      />
    </div>
  );
}
