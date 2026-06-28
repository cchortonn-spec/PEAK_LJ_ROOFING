import type { ThemeVariant } from "@/types";
import { cn } from "@/lib/utils";

interface PreviewBlockProps {
  id: string;
  label: string;
  configKey: string;
  configSnippet: string;
  configNote?: string;
  dataTheme?: ThemeVariant;
  children: React.ReactNode;
}

export function PreviewBlock({
  id,
  label,
  configKey,
  configSnippet,
  configNote,
  dataTheme,
  children,
}: PreviewBlockProps) {
  return (
    <article
      id={id}
      className="scroll-mt-24 border-b border-border bg-background"
      {...(dataTheme ? { "data-theme": dataTheme } : {})}
    >
      <div className="border-b border-border bg-muted/40 px-4 py-4 sm:px-6">
        <h3 className="text-lg font-semibold text-foreground">{label}</h3>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {configKey}:{" "}
          <span className="text-foreground">{configSnippet}</span>
        </p>
        {configNote && (
          <p className="mt-1 text-sm text-muted-foreground">{configNote}</p>
        )}
      </div>
      <div className={cn("overflow-hidden", dataTheme && "bg-background")}>
        {children}
      </div>
    </article>
  );
}

interface PreviewSectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PreviewSection({
  id,
  title,
  description,
  children,
}: PreviewSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="border-b border-border bg-foreground px-4 py-6 text-background sm:px-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && (
          <p className="mt-2 max-w-3xl text-sm text-background/80">
            {description}
          </p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}
