import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/common/FadeIn";
import { Section, Container } from "@/components/common/Section";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

function AboutContent({ imagePosition }: { imagePosition: "left" | "right" }) {
  const { business, sections } = siteConfig;
  const { aboutPreview } = sections;

  const content = (
    <FadeIn direction={imagePosition === "right" ? "left" : "right"}>
      <p className="eyebrow mb-3">{aboutPreview.eyebrow}</p>
      <h2 className="text-3xl tracking-tight sm:text-4xl">{aboutPreview.title}</h2>
      {aboutPreview.paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
          className="mt-4 text-lg leading-relaxed text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
      <ul className="mt-6 space-y-3">
        {business.guarantees.map((guarantee) => (
          <li key={guarantee} className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            <span className="text-foreground/80">{guarantee}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ROUTES.about}
        className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-[var(--btn-radius)]")}
      >
        {aboutPreview.ctaLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </FadeIn>
  );

  const visual = (
    <FadeIn direction={imagePosition === "right" ? "right" : "left"} delay={0.15}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary/5 shadow-md">
        {aboutPreview.image ? (
          <>
            <Image
              src={aboutPreview.image.src}
              alt={aboutPreview.image.alt}
              width={aboutPreview.image.width}
              height={aboutPreview.image.height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="size-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent p-6">
              <div className="rounded-xl bg-background/95 p-5 text-center shadow-lg backdrop-blur-sm">
                <p className="text-5xl font-bold text-accent">{business.yearsTrading}+</p>
                <p className="mt-1 text-lg font-medium text-foreground/80">
                  {aboutPreview.statsLabel}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Serving {business.areasCovered.length} areas across {business.address.county}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 text-center">
              <p className="text-6xl font-bold text-accent">{business.yearsTrading}+</p>
              <p className="mt-2 text-lg font-medium text-foreground/70">
                {aboutPreview.statsLabel}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Serving {business.areasCovered.length} areas across {business.address.county}
              </p>
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {imagePosition === "left" ? (
        <>
          {visual}
          {content}
        </>
      ) : (
        <>
          {content}
          {visual}
        </>
      )}
    </div>
  );
}

export function AboutImageRight() {
  return (
    <Section variant="muted" id="about">
      <Container>
        <AboutContent imagePosition="right" />
      </Container>
    </Section>
  );
}

export function AboutImageLeft() {
  return (
    <Section variant="muted" id="about">
      <Container>
        <AboutContent imagePosition="left" />
      </Container>
    </Section>
  );
}

export function AboutStats() {
  const { business, sections } = siteConfig;
  const { aboutPreview } = sections;

  return (
    <Section variant="muted" id="about">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <FadeIn direction="left" className="lg:col-span-3">
            <p className="eyebrow mb-3">{aboutPreview.eyebrow}</p>
            <h2 className="text-3xl tracking-tight sm:text-4xl">{aboutPreview.title}</h2>
            {aboutPreview.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-4 text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href={ROUTES.about}
              className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-[var(--btn-radius)]")}
            >
              {aboutPreview.ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </FadeIn>
          <FadeIn direction="right" delay={0.15} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-themed col-span-2 p-6 text-center">
                <p className="text-5xl font-bold text-accent">{business.yearsTrading}+</p>
                <p className="mt-2 text-sm text-muted-foreground">{aboutPreview.statsLabel}</p>
              </div>
              <div className="card-themed p-4 text-center">
                <p className="text-2xl font-bold text-accent">{business.areasCovered.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Areas</p>
              </div>
              <div className="card-themed p-4 text-center">
                <p className="text-2xl font-bold text-accent">{siteConfig.reviews.length}+</p>
                <p className="mt-1 text-xs text-muted-foreground">Reviews</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
