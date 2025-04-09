import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { changeTone } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { content, tone, projectId } = await req.json();

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 },
      );
    }

    if (!tone) {
      return NextResponse.json({ error: "Tone is required" }, { status: 400 });
    }

    if (!projectId) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 },
      );
    }

    const rewrittenText = await changeTone({
      content,
      tone,
      userId: session.user.id,
      projectId,
    });

    return NextResponse.json({ rewrittenText });
  } catch (error) {
    console.error("Error changing tone:", error);
    return NextResponse.json(
      {
        error: "Failed to change tone",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
