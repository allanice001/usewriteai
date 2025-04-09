import { jsPDF } from "jspdf";
import { db } from "@/lib/db";
import { marked } from "marked";

export async function exportToPdf(
  projectId: string,
  userId: string,
): Promise<string> {
  try {
    // Fetch the project
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new Error("Project not found");
    }

    // Check if the user has access to the project
    if (project.userId !== userId) {
      const sharedProject = await db.sharedProject.findUnique({
        where: {
          projectId_userId: {
            projectId,
            userId,
          },
        },
      });

      if (!sharedProject && !project.isPublic) {
        throw new Error("Unauthorized");
      }
    }

    // Convert markdown to HTML
    const html = await marked(project.content || "");

    // Create a new PDF document
    const doc = new jsPDF();

    // Add the title
    doc.setFontSize(24);
    doc.text(project.title, 20, 20);

    // Add the content
    doc.setFontSize(12);

    // This is a simplified approach - in a real app, you would use a more sophisticated
    // method to convert HTML to PDF with proper formatting
    const contentLines = html.replace(/<[^>]*>/g, "").split("\n");
    let y = 40;
    for (const line of contentLines) {
      if (line.trim()) {
        const wrappedText = doc.splitTextToSize(line, 170);
        doc.text(wrappedText, 20, y);
        y += 10 * wrappedText.length;

        // Add a new page if needed
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
      }
    }

    // Save the PDF to a blob
    const pdfBlob = doc.output("blob");

    // In a real app, you would upload this blob to a storage service
    // For now, we'll create a data URL
    const reader = new FileReader();
    const pdfUrl = await new Promise<string>((resolve) => {
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(pdfBlob);
    });

    // Record the export in the database
    await db.exportHistory.create({
      data: {
        projectId,
        format: "pdf",
        fileUrl: "pdf-export", // In a real app, this would be the URL to the stored file
      },
    });

    return pdfUrl;
  } catch (error) {
    console.error("Error exporting to PDF:", error);
    throw error;
  }
}

export async function exportToWord(
  projectId: string,
  userId: string,
): Promise<string> {
  try {
    // Fetch the project
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new Error("Project not found");
    }

    // Check if the user has access to the project
    if (project.userId !== userId) {
      const sharedProject = await db.sharedProject.findUnique({
        where: {
          projectId_userId: {
            projectId,
            userId,
          },
        },
      });

      if (!sharedProject && !project.isPublic) {
        throw new Error("Unauthorized");
      }
    }

    // Convert markdown to HTML
    const html = marked(project.content || "");

    // In a real app, you would generate a proper DOCX file
    // For now, we'll create a simple HTML file that can be opened in Word
    const wordContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${project.title}</title>
      </head>
      <body>
        <h1>${project.title}</h1>
        ${html}
      </body>
      </html>
    `;

    // Create a blob with the HTML content
    const blob = new Blob([wordContent], { type: "application/vnd.ms-word" });

    // Create a data URL
    const reader = new FileReader();
    const wordUrl = await new Promise<string>((resolve) => {
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });

    // Record the export in the database
    await db.exportHistory.create({
      data: {
        projectId,
        format: "docx",
        fileUrl: "word-export", // In a real app, this would be the URL to the stored file
      },
    });

    return wordUrl;
  } catch (error) {
    console.error("Error exporting to Word:", error);
    throw error;
  }
}

export async function exportToMarkdown(
  projectId: string,
  userId: string,
): Promise<string> {
  try {
    // Fetch the project
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      throw new Error("Project not found");
    }

    // Check if the user has access to the project
    if (project.userId !== userId) {
      const sharedProject = await db.sharedProject.findUnique({
        where: {
          projectId_userId: {
            projectId,
            userId,
          },
        },
      });

      if (!sharedProject && !project.isPublic) {
        throw new Error("Unauthorized");
      }
    }

    // Create a blob with the markdown content
    const blob = new Blob([project.content || ""], { type: "text/markdown" });

    // Create a data URL
    const reader = new FileReader();
    const markdownUrl = await new Promise<string>((resolve) => {
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });

    // Record the export in the database
    await db.exportHistory.create({
      data: {
        projectId,
        format: "md",
        fileUrl: "markdown-export", // In a real app, this would be the URL to the stored file
      },
    });

    return markdownUrl;
  } catch (error) {
    console.error("Error exporting to Markdown:", error);
    throw error;
  }
}
