import { siteConfig } from "@/lib/config";
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
  WhyChooseUsVariant,
} from "@/types";

/** Widen literal config values for variant switchers */
export const layoutVariants = {
  theme: siteConfig.theme.variant,
  hero: siteConfig.layout.hero.variant as HeroVariant,
  servicesLayout: siteConfig.layout.services.layout as ServicesLayout,
  servicesCardStyle: siteConfig.layout.services.cardStyle as ServiceCardStyle,
  gallery: siteConfig.layout.gallery.variant as GalleryVariant,
  galleryLightbox: siteConfig.layout.gallery.lightbox,
  cta: siteConfig.layout.cta.variant as CTAVariant,
  about: siteConfig.layout.about.variant as AboutVariant,
  whyChooseUs: siteConfig.layout.whyChooseUs.variant as WhyChooseUsVariant,
  reviews: siteConfig.layout.reviews.variant as ReviewsVariant,
  process: siteConfig.layout.process.variant as ProcessVariant,
  faq: siteConfig.layout.faq.variant as FAQVariant,
};
