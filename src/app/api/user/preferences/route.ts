import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the user's preferences
    let preferences = await db.userPreference.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    // If preferences don't exist, create default preferences
    if (!preferences) {
      preferences = await db.userPreference.create({
        data: {
          userId: session.user.id,
          theme: "system",
          emailNotifications: true,
          aiSuggestions: true,
          autoSave: true,
          fontSize: 16,
          editorFontFamily: "Inter",
        },
      });
    }

    return NextResponse.json(preferences);
  } catch (error) {
    console.error("Error fetching user preferences:", error);
    return NextResponse.json(
      { error: "Failed to fetch user preferences" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    // Get the user session to ensure the request is authenticated
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updates = await req.json();

    // Validate the updates
    const validFields = [
      "theme",
      "emailNotifications",
      "aiSuggestions",
      "autoSave",
      "fontSize",
      "editorFontFamily",
    ];
    const filteredUpdates = Object.entries(updates).reduce(
      (acc, [key, value]) => {
        if (validFields.includes(key)) {
          acc[key] = value;
        }
        return acc;
      },
      {} as Record<string, any>,
    );

    // Update the user's preferences
    const preferences = await db.userPreference.upsert({
      where: {
        userId: session.user.id,
      },
      update: filteredUpdates,
      create: {
        userId: session.user.id,
        ...filteredUpdates,
      },
    });

    return NextResponse.json(preferences);
  } catch (error) {
    console.error("Error updating user preferences:", error);
    return NextResponse.json(
      { error: "Failed to update user preferences" },
      { status: 500 },
    );
  }
}
