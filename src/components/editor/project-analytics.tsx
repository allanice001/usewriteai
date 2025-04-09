"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { BarChart, BookOpen, Brain, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";

interface ProjectAnalyticsProps {
  projectId: string;
}

interface Analytics {
  id: string;
  projectId: string;
  wordCount: number;
  characterCount: number;
  sentenceCount: number;
  paragraphCount: number;
  readabilityScore: number | null;
  topicAnalysis: any | null;
  lastUpdated: string;
}

export function ProjectAnalytics({ projectId }: ProjectAnalyticsProps) {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    fetchAnalytics();
  }, [projectId]);

  const fetchAnalytics = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/projects/${projectId}/analytics`);
      if (!response.ok) {
        throw new Error("Failed to fetch analytics");
      }
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      toast.error("Failed to load analytics");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnalyzeTopics = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch(`/api/projects/${projectId}/analytics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "analyze-topics",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze topics");
      }

      await fetchAnalytics();
      toast.success("Topic analysis complete");
    } catch (error) {
      toast.error("Failed to analyze topics");
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleRefreshAnalytics = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/projects/${projectId}/analytics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "update-analytics",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update analytics");
      }

      const data = await response.json();
      setAnalytics(data);
      toast.success("Analytics updated");
    } catch (error) {
      toast.error("Failed to update analytics");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>Loading analytics...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Icons.spinner className="h-8 w-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (!analytics) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>No analytics available</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Analytics will be generated when you save your project.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRefreshAnalytics} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate Analytics
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Last updated: {new Date(analytics.lastUpdated).toLocaleString()}
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefreshAnalytics}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metrics">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="metrics">
              <BarChart className="mr-2 h-4 w-4" />
              Metrics
            </TabsTrigger>
            <TabsTrigger value="topics">
              <Brain className="mr-2 h-4 w-4" />
              Topics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="metrics" className="space-y-4 pt-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Words</span>
                <span className="text-sm">{analytics.wordCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Characters</span>
                <span className="text-sm">{analytics.characterCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Sentences</span>
                <span className="text-sm">{analytics.sentenceCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Paragraphs</span>
                <span className="text-sm">{analytics.paragraphCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Reading Time</span>
                <span className="text-sm">
                  {Math.ceil(analytics.wordCount / 200)} min
                </span>
              </div>
            </div>

            {analytics.readabilityScore !== null && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Readability Score</span>
                  <span className="text-sm">
                    {Math.round(analytics.readabilityScore)}/100
                  </span>
                </div>
                <Progress value={analytics.readabilityScore} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {analytics.readabilityScore > 80
                    ? "Very easy to read"
                    : analytics.readabilityScore > 60
                      ? "Easy to read"
                      : analytics.readabilityScore > 40
                        ? "Moderately difficult"
                        : "Difficult to read"}
                </p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="topics" className="pt-4">
            {analytics.topicAnalysis ? (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">Main Topics</h4>
                  <ul className="mt-2 space-y-1">
                    {analytics.topicAnalysis.mainTopics.map(
                      (topic: string, index: number) => (
                        <li key={index} className="text-sm">
                          • {topic}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Key Terms</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {analytics.topicAnalysis.keyTerms.map(
                      (term: string, index: number) => (
                        <span
                          key={index}
                          className="rounded-full bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {term}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Overall Sentiment</h4>
                  <p className="mt-1 text-sm capitalize">
                    {analytics.topicAnalysis.sentiment}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <BookOpen className="mb-2 h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  No topic analysis available yet.
                </p>
                <Button
                  onClick={handleAnalyzeTopics}
                  className="mt-4"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-4 w-4" />
                      Analyze Topics
                    </>
                  )}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
