import type {
  AboutVariant,
  CTAVariant,
  FAQVariant,
  GalleryVariant,
  HeroVariant,
  ProcessVariant,
  ReviewsVariant,
  ServiceCardStyle,
  ServicesLayout,
  ThemeVariant,
  WhyChooseUsVariant,
} from "@/types";

export interface PreviewVariantEntry<T extends string = string> {
  id: string;
  label: string;
  value: T;
  configKey: string;
  configSnippet: string;
  configNote?: string;
}

export interface PreviewSectionGroup {
  id: string;
  title: string;
  description?: string;
}

export const previewSectionGroups: PreviewSectionGroup[] = [
  { id: "themes", title: "Theme Variants" },
  { id: "hero", title: "Hero Variants" },
  { id: "services-layout", title: "Service Section Layouts" },
  { id: "services-cards", title: "Service Card Styles" },
  { id: "gallery", title: "Gallery Variants" },
  { id: "cta", title: "CTA Variants" },
  { id: "about", title: "About Variants" },
  { id: "why-choose-us", title: "Why Choose Us Variants" },
  { id: "reviews", title: "Review Variants" },
  { id: "process", title: "Process Variants" },
  { id: "faq", title: "FAQ Variants" },
];

export const themeVariants: PreviewVariantEntry<ThemeVariant>[] = [
  {
    id: "theme-premium",
    label: "Premium",
    value: "premium",
    configKey: "theme.variant",
    configSnippet: 'theme: { variant: "premium" }',
    configNote: "Refined navy/gold, generous spacing, soft shadows",
  },
  {
    id: "theme-modern-trade",
    label: "Modern Trade",
    value: "modern-trade",
    configKey: "theme.variant",
    configSnippet: 'theme: { variant: "modern-trade" }',
    configNote: "Bold blue/orange, crisp shadows, balanced spacing",
  },
  {
    id: "theme-emergency",
    label: "Emergency",
    value: "emergency",
    configKey: "theme.variant",
    configSnippet: 'theme: { variant: "emergency" }',
    configNote: "High-contrast red/dark, tight spacing, urgent feel",
  },
];

export const heroVariants: PreviewVariantEntry<HeroVariant>[] = [
  {
    id: "hero-centered",
    label: "Centered",
    value: "centered",
    configKey: "layout.hero.variant",
    configSnippet: 'layout: { hero: { variant: "centered" } }',
  },
  {
    id: "hero-split",
    label: "Split",
    value: "split",
    configKey: "layout.hero.variant",
    configSnippet: 'layout: { hero: { variant: "split" } }',
  },
  {
    id: "hero-background",
    label: "Background",
    value: "background",
    configKey: "layout.hero.variant",
    configSnippet: 'layout: { hero: { variant: "background" } }',
  },
  {
    id: "hero-premium",
    label: "Premium",
    value: "premium",
    configKey: "layout.hero.variant",
    configSnippet: 'layout: { hero: { variant: "premium" } }',
  },
];

export const servicesLayoutVariants: PreviewVariantEntry<ServicesLayout>[] = [
  {
    id: "services-grid-3",
    label: "Grid 3",
    value: "grid-3",
    configKey: "layout.services.layout",
    configSnippet: 'layout: { services: { layout: "grid-3", cardStyle: "simple" } }',
  },
  {
    id: "services-grid-4",
    label: "Grid 4",
    value: "grid-4",
    configKey: "layout.services.layout",
    configSnippet: 'layout: { services: { layout: "grid-4", cardStyle: "simple" } }',
  },
  {
    id: "services-featured",
    label: "Featured",
    value: "featured",
    configKey: "layout.services.layout",
    configSnippet: 'layout: { services: { layout: "featured", cardStyle: "simple" } }',
  },
];

export const serviceCardVariants: PreviewVariantEntry<ServiceCardStyle>[] = [
  {
    id: "card-simple",
    label: "Simple",
    value: "simple",
    configKey: "layout.services.cardStyle",
    configSnippet: 'layout: { services: { layout: "grid-3", cardStyle: "simple" } }',
  },
  {
    id: "card-feature",
    label: "Feature",
    value: "feature",
    configKey: "layout.services.cardStyle",
    configSnippet: 'layout: { services: { layout: "grid-3", cardStyle: "feature" } }',
  },
  {
    id: "card-horizontal",
    label: "Horizontal",
    value: "horizontal",
    configKey: "layout.services.cardStyle",
    configSnippet: 'layout: { services: { layout: "grid-3", cardStyle: "horizontal" } }',
  },
];

export const galleryVariants: PreviewVariantEntry<GalleryVariant>[] = [
  {
    id: "gallery-grid",
    label: "Grid",
    value: "grid",
    configKey: "layout.gallery.variant",
    configSnippet: 'layout: { gallery: { variant: "grid", lightbox: false } }',
  },
  {
    id: "gallery-masonry",
    label: "Masonry",
    value: "masonry",
    configKey: "layout.gallery.variant",
    configSnippet: 'layout: { gallery: { variant: "masonry", lightbox: false } }',
  },
  {
    id: "gallery-featured",
    label: "Featured",
    value: "featured",
    configKey: "layout.gallery.variant",
    configSnippet: 'layout: { gallery: { variant: "featured", lightbox: false } }',
  },
];

export const galleryLightboxOption: PreviewVariantEntry<"true" | "false"> = {
  id: "gallery-lightbox",
  label: "Lightbox",
  value: "true",
  configKey: "layout.gallery.lightbox",
  configSnippet: "layout: { gallery: { variant: \"grid\", lightbox: true } }",
  configNote: "Optional — enables click-to-expand on gallery images",
};

export const ctaVariants: PreviewVariantEntry<CTAVariant>[] = [
  {
    id: "cta-dark",
    label: "Dark",
    value: "dark",
    configKey: "layout.cta.variant",
    configSnippet: 'layout: { cta: { variant: "dark" } }',
  },
  {
    id: "cta-light",
    label: "Light",
    value: "light",
    configKey: "layout.cta.variant",
    configSnippet: 'layout: { cta: { variant: "light" } }',
  },
  {
    id: "cta-split",
    label: "Split",
    value: "split",
    configKey: "layout.cta.variant",
    configSnippet: 'layout: { cta: { variant: "split" } }',
  },
];

export const aboutVariants: PreviewVariantEntry<AboutVariant>[] = [
  {
    id: "about-image-right",
    label: "Image Right",
    value: "image-right",
    configKey: "layout.about.variant",
    configSnippet: 'layout: { about: { variant: "image-right" } }',
  },
  {
    id: "about-image-left",
    label: "Image Left",
    value: "image-left",
    configKey: "layout.about.variant",
    configSnippet: 'layout: { about: { variant: "image-left" } }',
  },
  {
    id: "about-stats",
    label: "Stats",
    value: "stats",
    configKey: "layout.about.variant",
    configSnippet: 'layout: { about: { variant: "stats" } }',
  },
];

export const whyChooseUsVariants: PreviewVariantEntry<WhyChooseUsVariant>[] = [
  {
    id: "why-cards",
    label: "Cards",
    value: "cards",
    configKey: "layout.whyChooseUs.variant",
    configSnippet: 'layout: { whyChooseUs: { variant: "cards" } }',
  },
  {
    id: "why-icon-list",
    label: "Icon List",
    value: "icon-list",
    configKey: "layout.whyChooseUs.variant",
    configSnippet: 'layout: { whyChooseUs: { variant: "icon-list" } }',
  },
];

export const reviewsVariants: PreviewVariantEntry<ReviewsVariant>[] = [
  {
    id: "reviews-grid",
    label: "Grid",
    value: "grid",
    configKey: "layout.reviews.variant",
    configSnippet: 'layout: { reviews: { variant: "grid" } }',
  },
  {
    id: "reviews-featured",
    label: "Featured",
    value: "featured",
    configKey: "layout.reviews.variant",
    configSnippet: 'layout: { reviews: { variant: "featured" } }',
  },
];

export const processVariants: PreviewVariantEntry<ProcessVariant>[] = [
  {
    id: "process-numbered",
    label: "Numbered",
    value: "numbered",
    configKey: "layout.process.variant",
    configSnippet: 'layout: { process: { variant: "numbered" } }',
  },
  {
    id: "process-timeline",
    label: "Timeline",
    value: "timeline",
    configKey: "layout.process.variant",
    configSnippet: 'layout: { process: { variant: "timeline" } }',
  },
];

export const faqVariants: PreviewVariantEntry<FAQVariant>[] = [
  {
    id: "faq-accordion",
    label: "Accordion",
    value: "accordion",
    configKey: "layout.faq.variant",
    configSnippet: 'layout: { faq: { variant: "accordion" } }',
  },
  {
    id: "faq-cta",
    label: "With CTA",
    value: "cta",
    configKey: "layout.faq.variant",
    configSnippet: 'layout: { faq: { variant: "cta" } }',
  },
];
