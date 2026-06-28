import { HeroCentered } from "@/components/sections/hero/HeroCentered";
import { HeroSplit } from "@/components/sections/hero/HeroSplit";
import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { HeroPremium } from "@/components/sections/hero/HeroPremium";
import {
  ServicesGrid3,
  ServicesGrid4,
  ServicesFeatured,
} from "@/components/sections/services/ServicesLayouts";
import {
  ServiceCardSimple,
  ServiceCardFeature,
  ServiceCardHorizontal,
} from "@/components/sections/services/ServiceCards";
import {
  GalleryShell,
  GalleryGrid,
  GalleryMasonry,
  GalleryFeatured,
} from "@/components/sections/gallery/GalleryVariants";
import { CtaDark, CtaLight, CtaSplit } from "@/components/sections/cta/CtaVariants";
import {
  AboutImageRight,
  AboutImageLeft,
  AboutStats,
} from "@/components/sections/about/AboutVariants";
import {
  WhyChooseUsCards,
  WhyChooseUsIconList,
} from "@/components/sections/why/WhyChooseUsVariants";
import {
  ReviewsGrid,
  ReviewsFeatured,
} from "@/components/sections/reviews/ReviewsVariants";
import {
  ProcessNumbered,
  ProcessTimeline,
} from "@/components/sections/process/ProcessVariants";
import { FAQAccordion, FAQWithCTA } from "@/components/sections/faq/FAQVariants";
import { Section, SectionHeader, Container } from "@/components/common/Section";
import { PreviewBlock, PreviewSection } from "@/components/design-preview/PreviewBlock";
import { siteConfig } from "@/lib/config";
import {
  aboutVariants,
  ctaVariants,
  faqVariants,
  galleryLightboxOption,
  galleryVariants,
  heroVariants,
  processVariants,
  reviewsVariants,
  serviceCardVariants,
  servicesLayoutVariants,
  themeVariants,
  whyChooseUsVariants,
} from "@/lib/design-preview-registry";
import type { HeroVariant, ServicesLayout } from "@/types";

const previewServices = siteConfig.services.slice(0, 4);
const previewGallery = siteConfig.gallery.slice(0, 6);
const ctaContent = siteConfig.ctas.default;
const sampleService = siteConfig.services[0];

function ServicesLayoutPreview({
  layout,
}: {
  layout: ServicesLayout;
}) {
  const { sections } = siteConfig;
  const layoutProps = {
    services: previewServices,
    cardStyle: "simple" as const,
  };

  return (
    <Section id={`preview-services-${layout}`}>
      <Container>
        <SectionHeader
          eyebrow={sections.services.eyebrow}
          title={sections.services.title}
          description={sections.services.description}
        />
        {layout === "grid-4" && <ServicesGrid4 {...layoutProps} />}
        {layout === "featured" && (
          <ServicesFeatured {...layoutProps} showViewAll={false} />
        )}
        {layout === "grid-3" && <ServicesGrid3 {...layoutProps} />}
      </Container>
    </Section>
  );
}

function ThemeSwatch() {
  return (
    <div className="space-y-6 p-8 sm:p-10">
      <div>
        <p className="eyebrow mb-2">Theme Preview</p>
        <h3 className="text-2xl font-bold">Sample Heading</h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Body text, card borders, shadows, and button styles for this theme.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-[var(--btn-radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Primary Button
        </button>
        <button
          type="button"
          className="rounded-[var(--btn-radius)] bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
        >
          Accent Button
        </button>
      </div>
      <div className="card-themed max-w-sm p-6">
        <p className="font-semibold">Sample Card</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Border radius, shadow, and spacing tokens apply here.
        </p>
      </div>
    </div>
  );
}

const heroComponents: Record<HeroVariant, React.ComponentType> = {
  centered: HeroCentered,
  split: HeroSplit,
  background: HeroBackground,
  premium: HeroPremium,
};

export function DesignPreviewContent() {
  return (
    <div className="bg-background">
      <PreviewSection
        id="themes"
        title="Theme Variants"
        description="Global visual presets — set theme.variant in lib/config.ts"
      >
        {themeVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
            configNote={variant.configNote}
            dataTheme={variant.value}
          >
            <ThemeSwatch />
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="hero"
        title="Hero Variants"
        description="Homepage hero layouts — set layout.hero.variant in lib/config.ts"
      >
        {heroVariants.map((variant) => {
          const HeroComponent = heroComponents[variant.value];
          return (
            <PreviewBlock
              key={variant.id}
              id={variant.id}
              label={variant.label}
              configKey={variant.configKey}
              configSnippet={variant.configSnippet}
            >
              <HeroComponent />
            </PreviewBlock>
          );
        })}
      </PreviewSection>

      <PreviewSection
        id="services-layout"
        title="Service Section Layouts"
        description="Grid arrangements — set layout.services.layout in lib/config.ts"
      >
        {servicesLayoutVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            <ServicesLayoutPreview layout={variant.value} />
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="services-cards"
        title="Service Card Styles"
        description="Card appearance — set layout.services.cardStyle in lib/config.ts"
      >
        {serviceCardVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            <Section>
              <Container>
                <div className="mx-auto max-w-md">
                  {variant.value === "simple" && (
                    <ServiceCardSimple service={sampleService} />
                  )}
                  {variant.value === "feature" && (
                    <ServiceCardFeature service={sampleService} />
                  )}
                  {variant.value === "horizontal" && (
                    <ServiceCardHorizontal service={sampleService} />
                  )}
                </div>
              </Container>
            </Section>
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="gallery"
        title="Gallery Variants"
        description="Project gallery layouts — set layout.gallery.variant in lib/config.ts"
      >
        {galleryVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            <GalleryShell>
              {variant.value === "grid" && (
                <GalleryGrid images={previewGallery} lightbox={false} />
              )}
              {variant.value === "masonry" && (
                <GalleryMasonry images={previewGallery} lightbox={false} />
              )}
              {variant.value === "featured" && (
                <GalleryFeatured images={previewGallery} lightbox={false} />
              )}
            </GalleryShell>
          </PreviewBlock>
        ))}
        <PreviewBlock
          id={galleryLightboxOption.id}
          label={galleryLightboxOption.label}
          configKey={galleryLightboxOption.configKey}
          configSnippet={galleryLightboxOption.configSnippet}
          configNote={galleryLightboxOption.configNote}
        >
          <div className="border-t border-border bg-muted/30 px-4 py-6 text-sm text-muted-foreground sm:px-6">
            Lightbox is enabled via config only — not shown in static previews
            to keep this page fast. Set{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              layout.gallery.lightbox: true
            </code>{" "}
            on the live site to enable click-to-expand.
          </div>
        </PreviewBlock>
      </PreviewSection>

      <PreviewSection
        id="cta"
        title="CTA Variants"
        description="Call-to-action sections — set layout.cta.variant in lib/config.ts"
      >
        {ctaVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            {variant.value === "dark" && <CtaDark {...ctaContent} />}
            {variant.value === "light" && <CtaLight {...ctaContent} />}
            {variant.value === "split" && <CtaSplit {...ctaContent} />}
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="about"
        title="About Variants"
        description="About preview sections — set layout.about.variant in lib/config.ts"
      >
        {aboutVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            {variant.value === "image-right" && <AboutImageRight />}
            {variant.value === "image-left" && <AboutImageLeft />}
            {variant.value === "stats" && <AboutStats />}
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="why-choose-us"
        title="Why Choose Us Variants"
        description="Trust sections — set layout.whyChooseUs.variant in lib/config.ts"
      >
        {whyChooseUsVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            {variant.value === "cards" && <WhyChooseUsCards />}
            {variant.value === "icon-list" && <WhyChooseUsIconList />}
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="reviews"
        title="Review Variants"
        description="Testimonial sections — set layout.reviews.variant in lib/config.ts"
      >
        {reviewsVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            {variant.value === "grid" && <ReviewsGrid />}
            {variant.value === "featured" && <ReviewsFeatured />}
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="process"
        title="Process Variants"
        description="How it works sections — set layout.process.variant in lib/config.ts"
      >
        {processVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            {variant.value === "numbered" && <ProcessNumbered />}
            {variant.value === "timeline" && <ProcessTimeline />}
          </PreviewBlock>
        ))}
      </PreviewSection>

      <PreviewSection
        id="faq"
        title="FAQ Variants"
        description="FAQ sections — set layout.faq.variant in lib/config.ts"
      >
        {faqVariants.map((variant) => (
          <PreviewBlock
            key={variant.id}
            id={variant.id}
            label={variant.label}
            configKey={variant.configKey}
            configSnippet={variant.configSnippet}
          >
            {variant.value === "accordion" && <FAQAccordion />}
            {variant.value === "cta" && <FAQWithCTA />}
          </PreviewBlock>
        ))}
      </PreviewSection>
    </div>
  );
}
