import { db } from "@/lib/db";

export async function updateProjectAnalytics(projectId: string) {
  try {
    // Fetch the project
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project || !project.content) {
      return;
    }

    const content = project.content;

    // Calculate basic metrics
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const characterCount = content.length;
    const paragraphCount = content.split(/\n\s*\n/).filter(Boolean).length;
    const sentenceCount = content.split(/[.!?]+/).filter(Boolean).length;

    // Calculate readability score (Flesch-Kincaid)
    const readabilityScore = calculateReadabilityScore(content);

    // Get or create analytics record
    const existingAnalytics = await db.writingAnalytics.findUnique({
      where: {
        projectId,
      },
    });

    if (existingAnalytics) {
      // Update existing record
      await db.writingAnalytics.update({
        where: {
          projectId,
        },
        data: {
          wordCount,
          characterCount,
          paragraphCount,
          sentenceCount,
          readabilityScore,
          lastUpdated: new Date(),
        },
      });
    } else {
      // Create new record
      await db.writingAnalytics.create({
        data: {
          projectId,
          wordCount,
          characterCount,
          paragraphCount,
          sentenceCount,
          readabilityScore,
          lastUpdated: new Date(),
        },
      });
    }
  } catch (error) {
    console.error("Error updating project analytics:", error);
  }
}

function calculateReadabilityScore(text: string): number {
  // Simplified Flesch-Kincaid readability score calculation
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const words = text.split(/\s+/).filter(Boolean).length;
  const syllables = countSyllables(text);

  if (sentences === 0 || words === 0) {
    return 0;
  }

  // Flesch-Kincaid formula: 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)
  const score =
    206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);

  // Clamp the score between 0 and 100
  return Math.max(0, Math.min(100, score));
}

function countSyllables(text: string): number {
  // This is a simplified syllable counter
  // In a real app, you would use a more sophisticated algorithm or a library
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  let syllableCount = 0;

  for (const word of words) {
    // Count vowel groups as syllables
    const vowelGroups = word.match(/[aeiouy]+/g);
    if (vowelGroups) {
      syllableCount += vowelGroups.length;
    }

    // Subtract syllables for silent 'e' at the end of words
    if (word.length > 2 && word.endsWith("e") && !/[aeiouy]e$/.test(word)) {
      syllableCount--;
    }

    // Ensure each word has at least one syllable
    if (syllableCount <= 0) {
      syllableCount = 1;
    }
  }

  return syllableCount;
}

export async function analyzeTopics(projectId: string) {
  try {
    // Fetch the project
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project || !project.content) {
      return;
    }

    // In a real app, you would use OpenAI or another AI service to analyze topics
    // For now, we'll create a mock analysis
    const topicAnalysis = {
      mainTopics: ["Topic 1", "Topic 2", "Topic 3"],
      keyTerms: ["Term 1", "Term 2", "Term 3"],
      sentiment: "positive",
    };

    // Update the analytics record
    await db.writingAnalytics.update({
      where: {
        projectId,
      },
      data: {
        topicAnalysis: topicAnalysis as any,
        lastUpdated: new Date(),
      },
    });

    return topicAnalysis;
  } catch (error) {
    console.error("Error analyzing topics:", error);
    throw error;
  }
}
