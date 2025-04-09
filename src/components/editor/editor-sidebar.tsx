"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Lightbulb,
  Wand2,
  Check,
  Sparkles,
  FileText,
  Edit,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icons } from "@/components/icons";

interface EditorSidebarProps {
  suggestions: string[];
  onGenerateSuggestions: () => void;
  onApplySuggestion: (suggestion: string) => void;
  isGenerating: boolean;
  content: string;
  projectId: string;
  onContentUpdate: (newContent: string) => void;
}

export function EditorSidebar({
  suggestions,
  onGenerateSuggestions,
  onApplySuggestion,
  isGenerating,
  content,
  projectId,
  onContentUpdate,
}: EditorSidebarProps) {
  const [customPrompt, setCustomPrompt] = useState("");
  const [useCustomPrompt, setUseCustomPrompt] = useState(false);
  const [activeTab, setActiveTab] = useState("suggestions");
  const [selectedTone, setSelectedTone] = useState("professional");
  const [isProcessing, setIsProcessing] = useState(false);

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const characterCount = content.length;
  const paragraphCount = content.split(/\n\s*\n/).filter(Boolean).length;
  const sentenceCount = content.split(/[.!?]+/).filter(Boolean).length;

  const handleImproveReadability = async () => {
    if (!content.trim()) {
      toast.error("Please add some content first");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch("/api/ai/readability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          projectId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to improve readability");
      }

      const data = await response.json();
      onContentUpdate(data.improvedText);
      toast.success("Text readability improved");
    } catch (error) {
      toast.error("Failed to improve readability");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSummarizeText = async () => {
    if (!content.trim()) {
      toast.error("Please add some content first");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch("/api/ai/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          projectId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to summarize text");
      }

      const data = await response.json();

      // Show the summary in a toast with a button to apply it
      toast(
        <div className="flex flex-col gap-2">
          <p className="font-medium">Summary</p>
          <p className="text-sm">{data.summary}</p>
          <Button
            size="sm"
            className="mt-2"
            onClick={() => {
              onContentUpdate(content + "\n\n## Summary\n\n" + data.summary);
              toast.success("Summary added to your document");
            }}
          >
            Add to Document
          </Button>
        </div>,
        {
          duration: 10000,
        },
      );
    } catch (error) {
      toast.error("Failed to summarize text");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleExpandText = async () => {
    if (!content.trim()) {
      toast.error("Please add some content first");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch("/api/ai/expand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          projectId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to expand text");
      }

      const data = await response.json();
      onContentUpdate(data.expandedText);
      toast.success("Text expanded with additional details");
    } catch (error) {
      toast.error("Failed to expand text");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleChangeTone = async () => {
    if (!content.trim()) {
      toast.error("Please add some content first");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch("/api/ai/tone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          tone: selectedTone,
          projectId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to change tone");
      }

      const data = await response.json();
      onContentUpdate(data.rewrittenText);
      toast.success(`Text tone changed to ${selectedTone}`);
    } catch (error) {
      toast.error("Failed to change tone");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-80 border-l bg-muted/40 p-4">
      <Tabs
        defaultValue="suggestions"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="suggestions" className="mt-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="custom-prompt" className="text-xs">
                  Use Custom Prompt
                </Label>
                <Switch
                  id="custom-prompt"
                  checked={useCustomPrompt}
                  onCheckedChange={setUseCustomPrompt}
                />
              </div>
              {useCustomPrompt && (
                <Textarea
                  placeholder="Enter your custom prompt for AI suggestions..."
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="h-20 text-sm"
                />
              )}
            </div>
            <Button
              onClick={onGenerateSuggestions}
              disabled={isGenerating}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Suggestions
                </>
              )}
            </Button>

            {suggestions.length > 0 ? (
              <div className="flex flex-col gap-2">
                {suggestions.map((suggestion, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-3">
                      <p className="text-sm">{suggestion}</p>
                      <div className="mt-2 flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onApplySuggestion(suggestion)}
                        >
                          <Check className="mr-2 h-3 w-3" />
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-8 text-center">
                <Lightbulb className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Generate AI suggestions to improve your writing
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="tools" className="mt-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium">Writing Tools</h3>
            <Separator />
            <div className="grid gap-2">
              <Button
                variant="outline"
                className="justify-start"
                onClick={handleImproveReadability}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Improve Readability
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={handleSummarizeText}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <FileText className="mr-2 h-4 w-4" />
                )}
                Summarize Text
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={handleExpandText}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Edit className="mr-2 h-4 w-4" />
                )}
                Expand Text
              </Button>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="justify-between"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <MessageSquare className="mr-2 h-4 w-4" />
                    )}
                    <span>Change Tone</span>
                    <span className="ml-auto text-xs text-muted-foreground capitalize">
                      {selectedTone}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-3">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-medium">Select Tone</h4>
                    <Select
                      value={selectedTone}
                      onValueChange={setSelectedTone}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">
                          Professional
                        </SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="persuasive">Persuasive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      size="sm"
                      onClick={handleChangeTone}
                      disabled={isProcessing}
                    >
                      Apply Tone
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="stats" className="mt-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium">Document Stats</h3>
            <Separator />
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Words:</span>
                <span className="text-sm font-medium">{wordCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Characters:
                </span>
                <span className="text-sm font-medium">{characterCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Paragraphs:
                </span>
                <span className="text-sm font-medium">{paragraphCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Sentences:
                </span>
                <span className="text-sm font-medium">{sentenceCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Reading time:
                </span>
                <span className="text-sm font-medium">
                  {Math.ceil(wordCount / 200)} min
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => {
                const stats = {
                  wordCount,
                  characterCount,
                  paragraphCount,
                  sentenceCount,
                  readingTime: Math.ceil(wordCount / 200),
                };

                navigator.clipboard.writeText(JSON.stringify(stats, null, 2));
                toast.success("Stats copied to clipboard");
              }}
            >
              <RefreshCw className="mr-2 h-3 w-3" />
              Update Stats
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
