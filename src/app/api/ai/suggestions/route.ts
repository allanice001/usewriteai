import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { generateAiSuggestions } from "@/lib/openai";
import { checkSubscriptionLimit, incrementUsage } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { content, projectId, customPrompt } = await req.json();

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 },
      );
    }

    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 },
      );
    }

    // Check subscription limits
    const limitCheck = await checkSubscriptionLimit({
      userId: session.user.id,
      limitType: "aiSuggestions",
      increment: 1,
    });

    if (limitCheck.wouldExceedLimit) {
      return NextResponse.json(
        {
          error: "AI suggestions limit reached",
          message:
            "You have reached the maximum number of AI suggestions allowed on your current plan. Please upgrade to get more suggestions.",
          limit: limitCheck.limit,
          usage: limitCheck.currentUsage,
        },
        { status: 403 },
      );
    }

    // Generate AI suggestions using OpenAI
    const suggestions = await generateAiSuggestions({
      content,
      customPrompt,
      userId: session.user.id,
      projectId,
    });

    // Increment usage
    await incrementUsage({
      userId: session.user.id,
      limitType: "aiSuggestions",
      increment: 1,
    });

    // Also track word usage
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    await incrementUsage({
      userId: session.user.id,
      limitType: "wordLimit",
      increment: wordCount,
    });

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Error generating suggestions:", error);
    return NextResponse.json(
      {
        error: "Failed to generate suggestions",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
