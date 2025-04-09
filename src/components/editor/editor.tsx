"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { EditorContent } from "@/components/editor/editor-content";
import { EditorHeader } from "@/components/editor/editor-header";
import { EditorSidebar } from "@/components/editor/editor-sidebar";
import type { Session } from "next-auth";
import type { Project } from "@/generated/prisma/client";

interface EditorProps {
  project: Project;
  user: Session["user"];
}

export function Editor({ project, user }: EditorProps) {
  const router = useRouter();
  const [content, setContent] = useState(project.content || "");
  const [title, setTitle] = useState(project.title || "");
  const [isSaving, setIsSaving] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Auto-save effect
  useEffect(() => {
    const saveTimeout = setTimeout(async () => {
      if (content !== project.content || title !== project.title) {
        await saveProject();
      }
    }, 3000);

    return () => clearTimeout(saveTimeout);
  }, [content, title, project.content, project.title]);

  const saveProject = async () => {
    setIsSaving(true);

    try {
      const response = await fetch(`/api/projects/${project.id}/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to save project");
      }

      setLastSaved(new Date());
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to save project",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const generateAiSuggestions = useCallback(async () => {
    setIsGenerating(true);

    try {
      const response = await fetch("/api/ai/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          projectId: project.id,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to generate suggestions");
      }

      const data = await response.json();
      setAiSuggestions(data.suggestions);
      toast.success("AI suggestions generated");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to generate AI suggestions",
      );
    } finally {
      setIsGenerating(false);
    }
  }, [content, project.id]);

  const applySuggestion = (suggestion: string) => {
    setContent((prevContent) => {
      // If content ends with a newline, don't add another one
      if (prevContent.endsWith("\n\n")) {
        return prevContent + suggestion;
      } else if (prevContent.endsWith("\n")) {
        return prevContent + "\n" + suggestion;
      } else {
        return prevContent + "\n\n" + suggestion;
      }
    });
    toast.success("Suggestion applied");
  };

  const updateContent = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="flex h-screen flex-col">
      <EditorHeader
        title={title}
        projectId={project.id}
        onTitleChange={setTitle}
        isSaving={isSaving}
        lastSaved={lastSaved}
        onSave={saveProject}
        onBack={() => router.push("/dashboard")}
      />
      <div className="flex flex-1 overflow-hidden">
        <EditorContent content={content} onChange={setContent} />
        <EditorSidebar
          suggestions={aiSuggestions}
          onGenerateSuggestions={generateAiSuggestions}
          onApplySuggestion={applySuggestion}
          isGenerating={isGenerating}
          content={content}
          projectId={project.id}
          onContentUpdate={updateContent}
        />
      </div>
    </div>
  );
}
