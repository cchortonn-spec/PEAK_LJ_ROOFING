import type { Metadata } from "next";
import Link from "next/link";
import { DesignPreviewContent } from "@/components/design-preview/DesignPreviewContent";
import { previewSectionGroups } from "@/lib/design-preview-registry";

export const metadata: Metadata = {
  title: "Design Preview (Internal)",
  description: "Internal design preview page for comparing framework variants.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DesignPreviewPage() {
  return (
    <>
      <div className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-4 text-center sm:px-6">
        <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
          Internal design preview only — not for production use
        </p>
        <p className="mt-1 text-xs text-amber-800/80 dark:text-amber-200/80">
          Compare all themes and section variants. Content is pulled from{" "}
          <code className="rounded bg-amber-500/10 px-1 font-mono">
            lib/config.ts
          </code>
          . This page is hidden from search engines.
        </p>
      </div>

      <nav
        aria-label="Design preview sections"
        className="sticky top-0 z-40 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:px-6"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {previewSectionGroups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              {group.title}
            </Link>
          ))}
        </div>
      </nav>

      <DesignPreviewContent />
    </>
  );
}
