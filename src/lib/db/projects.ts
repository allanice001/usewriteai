export type ProjectCreateInput = {
  title: string;
  description?: string;
  userId: string;
};

export type ProjectUpdateInput = {
  title?: string;
  description?: string;
  content?: string;
};

// You can keep utility functions that don't use Prisma directly
export function validateProjectTitle(title: string): boolean {
  return title.length > 0 && title.length <= 100;
}

export function validateProjectContent(content: string): boolean {
  return content.length <= 50000; // Example max length
}
