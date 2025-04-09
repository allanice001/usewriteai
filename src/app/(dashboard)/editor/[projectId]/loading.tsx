import { Skeleton } from "@/components/ui/skeleton";

export default function EditorLoading() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-[200px]" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-9 w-[100px]" />
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto p-4">
          <Skeleton className="h-[calc(100vh-8rem)] w-full" />
        </div>
        <div className="w-80 border-l bg-muted/40 p-4">
          <Skeleton className="h-10 w-full" />
          <div className="mt-4 space-y-4">
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-[200px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
