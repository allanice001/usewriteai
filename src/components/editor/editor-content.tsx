"use client";

import { useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

interface EditorContentProps {
  content: string;
  onChange: (content: string) => void;
}

export function EditorContent({ content, onChange }: EditorContentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="flex-1 overflow-auto p-4">
      <Textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[calc(100vh-8rem)] w-full resize-none border-none p-4 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Start writing..."
      />
    </div>
  );
}
