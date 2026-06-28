"use client";

import { DynamicIcon } from "@/components/common/DynamicIcon";
import { FadeIn } from "@/components/common/FadeIn";
import { Container } from "@/components/common/Section";
import { siteConfig } from "@/lib/config";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-background py-6" aria-label="Trust indicators">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {siteConfig.trustBadges.map((badge, index) => (
            <li key={badge.id}>
              <FadeIn delay={index * 0.08} direction="up">
                <span className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <DynamicIcon name={badge.icon} className="size-5 text-accent" />
                  {badge.label}
                </span>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
