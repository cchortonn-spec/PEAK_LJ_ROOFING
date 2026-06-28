export interface Address {
  street: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface TrustBadge {
  id: string;
  label: string;
  icon: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
  isPlaceholder?: boolean;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  google?: string;
}

export interface BrandConfig {
  primaryColour: string;
  accentColour: string;
  logoPath: string;
  faviconPath: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  industry: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  website: string;
  whatsapp: string;
  whatsappUrl: string;
  whatsappMessage: string;
  address: Address;
  geo: GeoCoordinates;
  schemaType: string;
  priceRange: string;
  areasCovered: string[];
  yearsTrading: number;
  usp: string;
  guarantees: string[];
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface PageSEO {
  title: string;
  description: string;
  path: string;
}

export interface SectionHeading {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface PageHero extends SectionHeading {
  h1?: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface CTAConfig {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  subheading?: string;
  phone?: string;
  trustText?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export type ThemeVariant = "premium" | "modern-trade" | "emergency";

export type HeroVariant = "centered" | "split" | "background" | "premium";
export type ServicesLayout = "grid-3" | "grid-4" | "featured";
export type ServiceCardStyle = "simple" | "feature" | "horizontal";
export type GalleryVariant = "grid" | "masonry" | "featured";
export type CTAVariant = "dark" | "light" | "split";
export type AboutVariant = "image-right" | "image-left" | "stats";
export type WhyChooseUsVariant = "cards" | "icon-list";
export type ReviewsVariant = "grid" | "featured";
export type ProcessVariant = "numbered" | "timeline";
export type FAQVariant = "accordion" | "cta";

export interface ThemeConfig {
  variant: ThemeVariant;
}

export interface LayoutConfig {
  hero: { variant: HeroVariant };
  services: { layout: ServicesLayout; cardStyle: ServiceCardStyle };
  gallery: { variant: GalleryVariant; lightbox: boolean };
  cta: { variant: CTAVariant };
  about: { variant: AboutVariant };
  whyChooseUs: { variant: WhyChooseUsVariant };
  reviews: { variant: ReviewsVariant };
  process: { variant: ProcessVariant };
  faq: { variant: FAQVariant };
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroRotatingText {
  /** Static part before the rotating location */
  prefix: string;
  /** Locations that cycle — edit this list per client */
  rotatingLocations: string[];
  /** Seconds between each location change (default: 3) */
  rotationIntervalSeconds?: number;
}

export type HeroHeadline = HeroRotatingText;
export type HeroEyebrow = HeroRotatingText;

export interface HeroReviewBadge {
  rating: number;
  count: number;
  label: string;
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPlaceholder?: boolean;
}

export interface OpeningHours {
  weekday: string;
  emergency: string;
}

export interface ContactConfig {
  openingHours: OpeningHours;
  form: {
    title: string;
    description: string;
    submitLabel: string;
    sendingLabel: string;
    successTitle: string;
    successMessage: string;
    sendAnotherLabel: string;
    selectServicePlaceholder: string;
  };
  stickyBar: {
    callLabel: string;
    whatsappLabel: string;
  };
}

export interface AboutPageContent {
  seo: PageSEO;
  hero: PageHero;
  story: SectionHeading & { paragraphs: string[] };
  values: SectionHeading & { items: ValueItem[] };
  guarantees: SectionHeading;
}

export interface ServicesPageContent {
  seo: PageSEO;
  hero: PageHero;
  cta: CTAConfig;
}

export interface ContactPageContent {
  seo: PageSEO;
  hero: PageHero;
  infoTitle: string;
  infoDescription: string;
  areasTitle: string;
}

export interface HomePageContent {
  seo: PageSEO;
  hero: {
    eyebrow: HeroEyebrow;
    headline: HeroHeadline;
    subtext: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    trustPointsLimit: number;
    image?: HeroImage;
    reviewBadge?: HeroReviewBadge;
    stats?: HeroStat[];
  };
}

export interface PagesConfig {
  home: HomePageContent;
  about: AboutPageContent;
  services: ServicesPageContent;
  contact: ContactPageContent;
}

export interface SectionsConfig {
  services: SectionHeading & { viewAllLabel: string; homepageLimit: number };
  aboutPreview: SectionHeading & {
    paragraphs: string[];
    ctaLabel: string;
    statsLabel: string;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  whyChooseUs: SectionHeading;
  reviews: SectionHeading;
  gallery: SectionHeading & {
    emptyTitle: string;
    emptyDescription: string;
    placeholderHint: string;
  };
  process: SectionHeading;
  faq: SectionHeading;
}

export interface SiteConfig {
  theme: ThemeConfig;
  layout: LayoutConfig;
  business: BusinessConfig;
  brand: BrandConfig;
  seo: SEOConfig;
  navigation: NavItem[];
  pages: PagesConfig;
  sections: SectionsConfig;
  contact: ContactConfig;
  ctas: {
    default: CTAConfig;
  };
  services: Service[];
  reviews: Review[];
  faqs: FAQ[];
  process: ProcessStep[];
  trustBadges: TrustBadge[];
  whyChooseUs: WhyChooseUsItem[];
  gallery: GalleryImage[];
  social: SocialLinks;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}
