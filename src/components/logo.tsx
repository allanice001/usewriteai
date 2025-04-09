import { Pen } from "lucide-react";

export function Logo() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
      <Pen className="h-4 w-4 text-primary-foreground" />
    </div>
  );
}
