import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Section, Container } from "@/components/common/Section";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/common/Shared";
import { createConfigPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = createConfigPageMetadata("about");

export default function AboutPage() {
  const { about } = siteConfig.pages;
  const { business } = siteConfig;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: ROUTES.home },
          { name: "About", url: ROUTES.about },
        ])}
      />

      <PageHero hero={about.hero} />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">{about.story.title}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold">
            {about.values.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.items.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <h2 className="mb-8 text-center text-3xl font-bold">
            {about.guarantees.title}
          </h2>
          <ul className="space-y-4">
            {business.guarantees.map((guarantee) => (
              <li key={guarantee} className="flex items-start gap-3">
                <CheckCircle
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-lg text-foreground/80">{guarantee}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
