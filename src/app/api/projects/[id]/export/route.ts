import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { exportToPdf, exportToWord, exportToMarkdown } from "@/lib/export";

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const projectId = params.id;
    const { format } = await req.json();

    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let exportUrl: string;

    switch (format) {
      case "pdf":
        exportUrl = await exportToPdf(projectId, session.user.id);
        break;
      case "docx":
        exportUrl = await exportToWord(projectId, session.user.id);
        break;
      case "md":
        exportUrl = await exportToMarkdown(projectId, session.user.id);
        break;
      default:
        return NextResponse.json(
          { error: "Unsupported format" },
          { status: 400 },
        );
    }

    return NextResponse.json({ url: exportUrl });
  } catch (error) {
    console.error("Error exporting project:", error);
    return NextResponse.json(
      {
        error: "Failed to export project",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
