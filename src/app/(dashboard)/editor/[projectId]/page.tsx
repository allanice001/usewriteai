import { redirect } from "next/navigation";
import { Editor } from "@/components/editor/editor";
import { getCurrentUser } from "@/lib/session";
import { headers } from "next/headers";

export const metadata = {
  title: "Editor",
  description: "Write and edit your content with AI assistance",
};

interface EditorPageProps {
  params: {
    projectId: string;
  };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch the project from the API route
  // Since this is a server component, we can use fetch with the full URL
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = headers().get("host") || "localhost:3000";

  const response = await fetch(
    `${protocol}://${host}/api/projects/${params.projectId}`,
    {
      headers: {
        Cookie: headers().get("cookie") || "",
      },
    },
  );

  if (!response.ok) {
    redirect("/dashboard");
  }

  const project = await response.json();

  return <Editor project={project} user={user} />;
}
