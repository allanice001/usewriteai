import OpenAI from "openai";
import { db } from "@/lib/db";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAiSuggestions({
  content,
  customPrompt,
  userId,
  projectId,
}: {
  content: string;
  customPrompt?: string;
  userId: string;
  projectId: string;
}) {
  try {
    // Prepare the system message
    const systemMessage =
      "You are an AI writing assistant that provides helpful, concise suggestions to improve writing.";

    // Prepare the user message
    let userMessage = "";

    if (customPrompt) {
      userMessage = `${customPrompt}\n\nHere is the current content:\n${content}`;
    } else {
      userMessage = `Please provide 3-4 specific suggestions to improve the following content. Focus on clarity, engagement, and style. Keep each suggestion under 100 words:\n\n${content}`;
    }

    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Extract the suggestions from the response
    const suggestionsText = response.choices[0].message.content || "";

    // Parse the suggestions (assuming they're numbered or in a list)
    const suggestions = suggestionsText
      .split(/\d+\.|\n-|\n\*/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    // Track API usage
    const tokensUsed = response.usage?.total_tokens || 0;
    await trackApiUsage(userId, tokensUsed);

    // Record the AI interaction
    await recordAiInteraction(
      projectId,
      userMessage,
      suggestionsText,
      tokensUsed,
      "suggestion",
    );

    return suggestions;
  } catch (error) {
    console.error("Error generating AI suggestions:", error);
    throw error;
  }
}

export async function improveReadability({
  content,
  userId,
  projectId,
}: {
  content: string;
  userId: string;
  projectId: string;
}) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are an AI writing assistant that improves text readability. Make the text clearer, more concise, and easier to understand while preserving the original meaning.",
        },
        {
          role: "user",
          content: `Improve the readability of the following text:\n\n${content}`,
        },
      ],
      temperature: 0.5,
      max_tokens: Math.max(content.length * 1.5, 1000),
    });

    const improvedText = response.choices[0].message.content || "";

    // Track API usage
    const tokensUsed = response.usage?.total_tokens || 0;
    await trackApiUsage(userId, tokensUsed);

    // Record the AI interaction
    await recordAiInteraction(
      projectId,
      `Improve readability: ${content.substring(0, 100)}...`,
      improvedText.substring(0, 100) + "...",
      tokensUsed,
      "readability",
    );

    return improvedText;
  } catch (error) {
    console.error("Error improving readability:", error);
    throw error;
  }
}

export async function summarizeText({
  content,
  userId,
  projectId,
}: {
  content: string;
  userId: string;
  projectId: string;
}) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are an AI writing assistant that creates concise summaries. Capture the key points while keeping the summary brief.",
        },
        {
          role: "user",
          content: `Summarize the following text in a few paragraphs:\n\n${content}`,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    });

    const summary = response.choices[0].message.content || "";

    // Track API usage
    const tokensUsed = response.usage?.total_tokens || 0;
    await trackApiUsage(userId, tokensUsed);

    // Record the AI interaction
    await recordAiInteraction(
      projectId,
      `Summarize text: ${content.substring(0, 100)}...`,
      summary,
      tokensUsed,
      "summary",
    );

    return summary;
  } catch (error) {
    console.error("Error summarizing text:", error);
    throw error;
  }
}

export async function expandText({
  content,
  userId,
  projectId,
}: {
  content: string;
  userId: string;
  projectId: string;
}) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are an AI writing assistant that expands text with relevant details, examples, and explanations while maintaining the original tone and style.",
        },
        {
          role: "user",
          content: `Expand the following text with more details and examples:\n\n${content}`,
        },
      ],
      temperature: 0.7,
      max_tokens: Math.max(content.length * 3, 1000),
    });

    const expandedText = response.choices[0].message.content || "";

    // Track API usage
    const tokensUsed = response.usage?.total_tokens || 0;
    await trackApiUsage(userId, tokensUsed);

    // Record the AI interaction
    await recordAiInteraction(
      projectId,
      `Expand text: ${content.substring(0, 100)}...`,
      expandedText.substring(0, 100) + "...",
      tokensUsed,
      "expansion",
    );

    return expandedText;
  } catch (error) {
    console.error("Error expanding text:", error);
    throw error;
  }
}

export async function changeTone({
  content,
  tone,
  userId,
  projectId,
}: {
  content: string;
  tone: string;
  userId: string;
  projectId: string;
}) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an AI writing assistant that rewrites text to match a specific tone (${tone}) while preserving the original meaning.`,
        },
        {
          role: "user",
          content: `Rewrite the following text in a ${tone} tone:\n\n${content}`,
        },
      ],
      temperature: 0.7,
      max_tokens: Math.max(content.length * 1.5, 1000),
    });

    const rewrittenText = response.choices[0].message.content || "";

    // Track API usage
    const tokensUsed = response.usage?.total_tokens || 0;
    await trackApiUsage(userId, tokensUsed);

    // Record the AI interaction
    await recordAiInteraction(
      projectId,
      `Change tone to ${tone}: ${content.substring(0, 100)}...`,
      rewrittenText.substring(0, 100) + "...",
      tokensUsed,
      "tone",
    );

    return rewrittenText;
  } catch (error) {
    console.error("Error changing tone:", error);
    throw error;
  }
}

async function trackApiUsage(userId: string, tokensUsed: number) {
  // Get or create API usage record
  let apiUsage = await db.apiUsage.findUnique({
    where: { userId },
  });

  if (!apiUsage) {
    apiUsage = await db.apiUsage.create({
      data: {
        userId,
        totalTokensUsed: 0,
        monthlyTokensUsed: 0,
      },
    });
  }

  // Check if we need to reset monthly usage
  const now = new Date();
  const lastReset = new Date(apiUsage.lastResetDate);
  const resetMonthly =
    now.getMonth() !== lastReset.getMonth() ||
    now.getFullYear() !== lastReset.getFullYear();

  // Update usage
  await db.apiUsage.update({
    where: { userId },
    data: {
      totalTokensUsed: apiUsage.totalTokensUsed + tokensUsed,
      monthlyTokensUsed: resetMonthly
        ? tokensUsed
        : apiUsage.monthlyTokensUsed + tokensUsed,
      lastResetDate: resetMonthly ? now : apiUsage.lastResetDate,
    },
  });
}

async function recordAiInteraction(
  projectId: string,
  prompt: string,
  response: string,
  tokensUsed: number,
  interactionType: string,
) {
  await db.aiInteraction.create({
    data: {
      projectId,
      prompt,
      response,
      tokensUsed,
      interactionType,
    },
  });
}
