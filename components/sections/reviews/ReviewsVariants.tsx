import { StarRating } from "@/components/common/Shared";
import { FadeIn } from "@/components/common/FadeIn";
import { Section, SectionHeader, Container } from "@/components/common/Section";
import { siteConfig } from "@/lib/config";

export function ReviewsGrid() {
  const section = siteConfig.sections.reviews;

  return (
    <Section variant="muted" id="reviews">
      <Container>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {siteConfig.reviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 0.1}>
              <blockquote className="card-themed flex h-full flex-col bg-background p-6">
                <StarRating rating={review.rating} className="mb-4" />
                <p className="flex-1 text-base leading-relaxed text-foreground/80">
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="mt-4 border-t border-border pt-4">
                  <cite className="not-italic">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ReviewsFeatured() {
  const section = siteConfig.sections.reviews;
  const [featured, ...rest] = siteConfig.reviews;

  if (!featured) return null;

  return (
    <Section variant="muted" id="reviews">
      <Container>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <FadeIn>
          <blockquote className="card-themed mx-auto max-w-3xl bg-background p-8 text-center sm:p-12">
            <StarRating rating={featured.rating} className="mb-6 justify-center" />
            <p className="text-xl leading-relaxed text-foreground/85 sm:text-2xl">
              &ldquo;{featured.text}&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <p className="text-lg font-semibold">{featured.name}</p>
                <p className="text-muted-foreground">{featured.location}</p>
              </cite>
            </footer>
          </blockquote>
        </FadeIn>
        {rest.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {rest.slice(0, 3).map((review, index) => (
              <FadeIn key={review.id} delay={index * 0.08}>
                <blockquote className="card-themed bg-background p-5">
                  <StarRating rating={review.rating} className="mb-3" />
                  <p className="line-clamp-3 text-sm text-foreground/80">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm font-medium">{review.name}</footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
