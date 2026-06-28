# COMPONENTS.md — Component Documentation

Every reusable component in the framework, its purpose, and where to use it.

---

## Layout Components

### Header
**File:** `components/layout/Header.tsx`
**Type:** Client Component
**Purpose:** Sticky site header with logo, navigation, and click-to-call button.
**Features:** Scroll-triggered background blur and shadow. Phone button visible on desktop.
**Used on:** Every page (via root layout)

### Navigation
**File:** `components/layout/Navigation.tsx`
**Type:** Client Component
**Purpose:** Site navigation with desktop links and mobile slide-out menu.
**Features:** Desktop horizontal nav. Mobile hamburger → Sheet drawer with links and phone button.
**Used on:** Inside Header component

### Footer
**File:** `components/layout/Footer.tsx`
**Type:** Server Component
**Purpose:** Site footer with business info, links, services, contact details, and social media.
**Features:** 4-column grid, NAP details, areas covered, copyright.
**Used on:** Every page (via root layout)

---

## Design Preview (Internal)

**Route:** `/design-preview`  
**Files:** `app/design-preview/page.tsx`, `components/design-preview/`

Internal-only page to visually compare every theme and section variant side-by-side. Uses demo content from `lib/config.ts`. Hidden from SEO via `noindex, nofollow` metadata. Not included in the sitemap. Does not show site header/footer.

Run locally: `npm run dev` → visit `http://localhost:3000/design-preview`

---

## Section Components (v2 — Switcher Pattern)

Each section reads its variant from `layout` in config and renders the matching sub-component. Page imports stay unchanged.

### Theme

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `theme.variant` | `"premium"` | High-end trades, refined navy/gold feel |
| `theme.variant` | `"modern-trade"` | General plumbers, electricians, builders |
| `theme.variant` | `"emergency"` | Emergency services, 24/7 callouts |

### Hero
**Switcher:** `components/sections/Hero.tsx`

| Config key | Config value | File | When to use |
|------------|--------------|------|-------------|
| `layout.hero.variant` | `"centered"` | `hero/HeroCentered.tsx` | Default, clean, conversion-focused |
| `layout.hero.variant` | `"split"` | `hero/HeroSplit.tsx` | Content + visual side-by-side |
| `layout.hero.variant` | `"background"` | `hero/HeroBackground.tsx` | Dramatic full-width with overlay |
| `layout.hero.variant` | `"premium"` | `hero/HeroPremium.tsx` | Stats cards + trust badges overlapping |

### Services
**Switcher:** `components/sections/Services.tsx`

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.services.layout` | `"grid-3"` | Standard 3-column service grid |
| `layout.services.layout` | `"grid-4"` | Compact 4-column grid |
| `layout.services.layout` | `"featured"` | One primary service + supporting grid |
| `layout.services.cardStyle` | `"simple"` | Default icon card |
| `layout.services.cardStyle` | `"feature"` | Large centred icon card |
| `layout.services.cardStyle` | `"horizontal"` | Icon left, text right |

### Gallery
**Switcher:** `components/sections/Gallery.tsx` (client — lightbox only)

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.gallery.variant` | `"grid"` | Uniform 3-column grid |
| `layout.gallery.variant` | `"masonry"` | Varied-height CSS columns |
| `layout.gallery.variant` | `"featured"` | One large image + thumbnails |
| `layout.gallery.lightbox` | `true` | Click-to-expand viewing |
| `layout.gallery.lightbox` | `false` | Static gallery only |

### CTA
**Switcher:** `components/sections/CTASection.tsx`

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.cta.variant` | `"dark"` | Primary background, end-of-page conversion |
| `layout.cta.variant` | `"light"` | Card on muted background, softer feel |
| `layout.cta.variant` | `"split"` | Content + contact info panel |

### About Preview

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.about.variant` | `"image-right"` | Text left, stats visual right (default) |
| `layout.about.variant` | `"image-left"` | Reversed layout for visual rhythm |
| `layout.about.variant` | `"stats"` | Stat cards grid beside story |

### Why Choose Us

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.whyChooseUs.variant` | `"cards"` | 4-column icon cards |
| `layout.whyChooseUs.variant` | `"icon-list"` | Split heading + vertical icon list |

### Reviews

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.reviews.variant` | `"grid"` | Equal testimonial cards |
| `layout.reviews.variant` | `"featured"` | Large featured quote + smaller supporting reviews |

### Process

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.process.variant` | `"numbered"` | Horizontal numbered steps |
| `layout.process.variant` | `"timeline"` | Vertical timeline with connecting line |

### FAQ

| Config key | Config value | When to use |
|------------|--------------|-------------|
| `layout.faq.variant` | `"accordion"` | Standard FAQ accordion |
| `layout.faq.variant` | `"cta"` | FAQ + sticky contact CTA sidebar |

---

## Section Components (Original)
**File:** `components/sections/TrustBar.tsx`
**Type:** Server Component
**Purpose:** Horizontal bar of trust badges/icons below the hero.
**Features:** Icon + label pairs from config (Fully Insured, Gas Safe, 5-Star, Free Quotes).
**Used on:** Homepage (directly below Hero)

### Services
**File:** `components/sections/Services.tsx`
**Type:** Server Component
**Purpose:** Grid of service cards with icons, titles, and descriptions.
**Props:** `limit?: number` — show only N services. `showViewAll?: boolean` — show "View All" button.
**Used on:** Homepage (limited), Services page (all)

### AboutPreview
**File:** `components/sections/AboutPreview.tsx`
**Type:** Server Component
**Purpose:** Two-column about section with company story and experience highlight.
**Features:** Guarantee checklist, "Learn More" link to About page, years experience visual.
**Used on:** Homepage

### WhyChooseUs
**File:** `components/sections/WhyChooseUs.tsx`
**Type:** Server Component
**Purpose:** Grid of reasons to choose the business with icons.
**Features:** 4-column icon grid from config data.
**Used on:** Homepage

### Gallery
**File:** `components/sections/Gallery.tsx`
**Type:** Server Component
**Purpose:** Project photo gallery grid.
**Features:** 3-column grid, hover overlay, category labels. Shows empty state if no images.
**Used on:** Homepage

### Reviews
**File:** `components/sections/Reviews.tsx`
**Type:** Server Component
**Purpose:** Customer testimonial cards with star ratings.
**Features:** 2-column grid, blockquote styling, star ratings, customer name and location.
**Used on:** Homepage

### FAQ
**File:** `components/sections/FAQ.tsx`
**Type:** Server Component
**Purpose:** Accordion-style frequently asked questions.
**Features:** shadcn Accordion, single-expand mode, FAQ schema markup on homepage.
**Used on:** Homepage

### Process
**File:** `components/sections/Process.tsx`
**Type:** Server Component
**Purpose:** Step-by-step process explanation (how it works).
**Features:** Numbered steps in 4-column grid with titles and descriptions.
**Used on:** Homepage

### CTASection
**File:** `components/sections/CTASection.tsx`
**Type:** Server Component
**Purpose:** Full-width call-to-action section with phone and quote buttons.
**Props:** `title?`, `description?`, `variant?: "primary" | "accent"`
**Used on:** Bottom of every page

---

## Form Components

### ContactForm
**File:** `components/forms/ContactForm.tsx`
**Type:** Client Component
**Purpose:** Contact/enquiry form with validation and submission handling.
**Features:** Name, phone, email, service dropdown, message fields. Success/error states. Posts to `/api/contact`.
**Used on:** Contact page

---

## Common Components

### PhoneButton
**File:** `components/common/PhoneButton.tsx`
**Type:** Server Component
**Purpose:** Click-to-call button with phone icon.
**Props:** `variant?`, `size?`, `label?`, `showIcon?`
**Used on:** Header, Hero, CTASection, Navigation (mobile)

### StickyMobileCTA
**File:** `components/common/StickyMobileCTA.tsx`
**Type:** Client Component
**Purpose:** Fixed bottom bar on mobile with Call and Get Quote buttons.
**Features:** Only visible on mobile (<768px). Two-column grid.
**Used on:** Every page (via root layout)

### Section / Container / SectionHeader
**File:** `components/common/Section.tsx`
**Type:** Server Component
**Purpose:** Layout wrappers for consistent section spacing and structure.
**Props:** Section: `variant?: "default" | "muted" | "primary" | "accent"`. Container: `size?: "default" | "narrow" | "wide"`.
**Used on:** Every section component

### FadeIn
**File:** `components/common/FadeIn.tsx`
**Type:** Client Component
**Purpose:** Scroll-triggered fade-in animation wrapper.
**Props:** `delay?`, `direction?: "up" | "down" | "left" | "right" | "none"`
**Used on:** Grid items, two-column layouts

### DynamicIcon
**File:** `components/common/DynamicIcon.tsx`
**Type:** Server Component
**Purpose:** Renders Lucide icons by string name from config.
**Used on:** Services, TrustBar, WhyChooseUs

### Shared Utilities
**File:** `components/common/Shared.tsx`
**Contains:** JsonLd, StarRating, EmptyState, LoadingState, ErrorState
**Used on:** Various pages and components

---

## UI Components (shadcn/ui)

Located in `components/ui/`. Do not modify directly — customisation via CSS variables.

| Component | Usage |
|-----------|-------|
| Button | CTAs, form submit, navigation |
| Card | Service cards, form wrapper |
| Input | Form fields |
| Textarea | Message field |
| Label | Form labels |
| Accordion | FAQ section |
| Badge | Tags, labels |
| Sheet | Mobile navigation drawer |
| Separator | Footer divider |

---

## Component Composition Guide

### Homepage
```
Hero → TrustBar → Services(limit=6) → AboutPreview → WhyChooseUs → Reviews → Gallery → Process → FAQ → CTASection
```

### About Page
```
PageHero → Story Section → Values Grid → Guarantees List → CTASection
```

### Services Page
```
PageHero → Services(all) → CTASection
```

### Contact Page
```
PageHero → ContactInfo + ContactForm
```

### Future Service Page
```
PageHero → Service Detail → Related Services → FAQ(service-specific) → CTASection
```

### Future Location Page
```
PageHero → Location Content → Services Available → Reviews → CTASection
```
