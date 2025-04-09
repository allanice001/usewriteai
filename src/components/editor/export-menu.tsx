"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Download, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

interface ExportMenuProps {
  projectId: string;
}

export function ExportMenu({ projectId }: ExportMenuProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<string | null>(null);

  const handleExport = async (format: string) => {
    setIsExporting(true);
    setExportFormat(format);

    try {
      const response = await fetch(`/api/projects/${projectId}/export`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ format }),
      });

      if (!response.ok) {
        throw new Error("Failed to export project");
      }

      const data = await response.json();

      // Create a download link
      const link = document.createElement("a");
      link.href = data.url;
      link.download = `project-export.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success(`Project exported as ${format.toUpperCase()}`);
    } catch (error) {
      toast.error("Failed to export project");
      console.error(error);
    } finally {
      setIsExporting(false);
      setExportFormat(null);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isExporting}>
          {isExporting ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <FileDown className="mr-2 h-4 w-4" />
              Export
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleExport("pdf")}>
          <Download className="mr-2 h-4 w-4" />
          Export as PDF
          {exportFormat === "pdf" && (
            <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("docx")}>
          <Download className="mr-2 h-4 w-4" />
          Export as Word
          {exportFormat === "docx" && (
            <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("md")}>
          <Download className="mr-2 h-4 w-4" />
          Export as Markdown
          {exportFormat === "md" && (
            <Icons.spinner className="ml-2 h-4 w-4 animate-spin" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
