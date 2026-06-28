import { Container, Section } from "@/components/common/Section";
import type { PageHero as PageHeroConfig } from "@/types";

interface PageHeroProps {
  hero: PageHeroConfig;
}

export function PageHero({ hero }: PageHeroProps) {
  return (
    <Section variant="primary" className="!py-16">
      <Container size="narrow">
        <div className="text-center">
          {hero.eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              {hero.eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {hero.h1 ?? hero.title}
          </h1>
          {hero.description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              {hero.description}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
