import { Brain, Edit, Sparkles } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          UseWriteAI helps you write better content faster with AI assistance.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Brain className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">AI-Powered Writing</h3>
              <p className="text-sm text-muted-foreground">
                Get intelligent suggestions and improvements for your content.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Edit className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">Distraction-Free Editor</h3>
              <p className="text-sm text-muted-foreground">
                Focus on your writing with our clean, minimal editor.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Sparkles className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">Content Enhancement</h3>
              <p className="text-sm text-muted-foreground">
                Improve readability, tone, and style with one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
