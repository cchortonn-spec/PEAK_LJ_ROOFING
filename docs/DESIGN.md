# DESIGN.md — Design System

This document defines the visual language for all websites built with this framework.

## Theme System (v2)

Themes are applied via `data-theme` on `<html>`, driven by `theme.variant` in [lib/config.ts](../lib/config.ts).

| Theme | Personality | Best for |
|-------|-------------|----------|
| `premium` | Refined navy/gold, generous spacing, soft shadows, larger radius | High-end trades, bathroom/kitchen fitters |
| `modern-trade` | Bold blue/orange, crisp shadows, balanced spacing | General plumbers, electricians, builders |
| `emergency` | High-contrast red/dark, tight spacing, square radius | Emergency services, 24/7 callouts |

### Theme Tokens (CSS variables)

Each theme overrides in [app/globals.css](../app/globals.css):

- Colours: `--primary`, `--accent`, `--secondary`, `--muted`
- Radius: `--radius`, `--btn-radius`
- Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- Spacing: `--section-padding-y`, `--section-padding-y-sm`
- Cards: `--card-border`, `--card-shadow`, `--card-hover-shadow`
- Typography: `--heading-weight`, `--eyebrow-tracking`

### Utility Classes

- `.card-themed` — consistent card border, shadow, hover elevation
- `.eyebrow` — uppercase accent label with theme tracking

## Layout Variants (v2)

Section layouts are controlled via `layout` in config. Read variants via [lib/layout.ts](../lib/layout.ts).

### Variant Reference

All values are set in [lib/config.ts](../lib/config.ts):

| Section | Config key | Available values |
|---------|-----------|------------------|
| Theme | `theme.variant` | `premium`, `modern-trade`, `emergency` |
| Hero | `layout.hero.variant` | `centered`, `split`, `background`, `premium` |
| Services layout | `layout.services.layout` | `grid-3`, `grid-4`, `featured` |
| Service card style | `layout.services.cardStyle` | `simple`, `feature`, `horizontal` |
| Gallery layout | `layout.gallery.variant` | `grid`, `masonry`, `featured` |
| Gallery lightbox | `layout.gallery.lightbox` | `true`, `false` |
| CTA | `layout.cta.variant` | `dark`, `light`, `split` |
| About | `layout.about.variant` | `image-right`, `image-left`, `stats` |
| Why Choose Us | `layout.whyChooseUs.variant` | `cards`, `icon-list` |
| Reviews | `layout.reviews.variant` | `grid`, `featured` |
| Process | `layout.process.variant` | `numbered`, `timeline` |
| FAQ | `layout.faq.variant` | `accordion`, `cta` |

### Example config block

```ts
theme: { variant: "modern-trade" },
layout: {
  hero: { variant: "split" },
  services: { layout: "featured", cardStyle: "feature" },
  gallery: { variant: "featured", lightbox: true },
  cta: { variant: "split" },
  about: { variant: "stats" },
  whyChooseUs: { variant: "icon-list" },
  reviews: { variant: "featured" },
  process: { variant: "timeline" },
  faq: { variant: "cta" },
},
```

### Visual preview

Visit `/design-preview` during development to compare every variant side-by-side. This page is internal-only (`noindex, nofollow`) and uses the same demo content from `lib/config.ts`. See [COMPONENTS.md](./COMPONENTS.md) for the full variant table with config keys.

## Overall Visual Style

Premium UK agency aesthetic. Clean, professional, trustworthy. Think high-end trade business, not budget template. Every element should feel intentional and polished.

## Typography

- **Font:** Inter (Google Fonts) — clean, modern, highly readable
- **Headings:** Bold, tight tracking (`tracking-tight`)
- **Body:** Regular weight, relaxed line height (`leading-relaxed`)
- **Eyebrow text:** Uppercase, semibold, wide tracking (`tracking-widest`), accent colour

### Scale
| Element | Size | Weight |
|---------|------|--------|
| H1 | 2.25–3.75rem (36–60px) | Bold |
| H2 | 1.875–2.25rem (30–36px) | Bold |
| H3 | 1.125–1.25rem (18–20px) | Semibold |
| Body | 1rem (16px) | Regular |
| Body Large | 1.125rem (18px) | Regular |
| Small | 0.875rem (14px) | Regular/Medium |
| Eyebrow | 0.875rem (14px) | Semibold |

## Spacing

- Base grid: 4px
- Section padding: 3rem mobile / 5rem desktop
- Container max width: 80rem (1280px)
- Container padding: 1rem mobile / 1.5rem tablet / 2rem desktop
- Component gaps: 1rem (small), 1.5rem (medium), 2rem (large)

## Section Spacing

Every section uses the `.section-padding` utility class:
- Mobile: 3rem top and bottom
- Desktop: 5rem top and bottom
- Section headers have 3rem bottom margin

## Container Widths

| Variant | Max Width | Usage |
|---------|-----------|-------|
| default | 80rem | Most sections |
| narrow | 56rem | FAQ, CTA, text-heavy content |
| wide | 90rem | Gallery grids |

## Buttons

Three variants via shadcn/ui Button:
- **Primary (accent):** Orange/accent background — main CTAs (Call Now, Get Quote)
- **Outline:** Border only — secondary actions
- **Ghost:** No background — navigation, subtle actions

Sizes: sm (header), default, lg (hero CTAs)
All buttons with icons place icon before text.

## Cards

- White background with subtle border
- Rounded corners (lg radius)
- Hover: subtle shadow increase
- Padding: consistent via CardHeader/CardContent
- Service cards: icon in accent/10 background circle at top

## Colours

Defined in `app/globals.css` as CSS custom properties:

| Token | Default | Usage |
|-------|---------|-------|
| `--colour-primary` | #1e3a5f | Headers, footer, primary sections |
| `--colour-accent` | #f97316 | CTAs, highlights, icons |
| `--colour-surface` | #ffffff | Page background |
| `--colour-text` | #1a1a2e | Body text |
| `--colour-text-muted` | #64748b | Secondary text |

To rebrand: update these values AND the shadcn theme variables in `:root`.

## Shadows

Three levels:
- `--shadow-sm`: Subtle card elevation
- `--shadow-md`: Hover states, dropdowns
- `--shadow-lg`: Modals, popovers

## Border Radius

- `--radius-sm`: Small elements (badges)
- `--radius-md`: Buttons, inputs
- `--radius-lg`: Cards (default)
- `--radius-xl`: Large cards, images
- `--radius-2xl`: Hero elements, feature blocks

## Animations

- **FadeIn:** opacity 0→1 + translateY 24px→0, 0.5s ease-out
- **Trigger:** viewport intersection, margin -50px, once only
- **Stagger:** 0.1s delay per item in grids
- **Header:** background blur + shadow on scroll
- No other animations permitted without explicit approval

## Icons

- Library: Lucide Icons
- Size: 16px (inline), 20px (nav), 24px (feature), 28px (hero features)
- Colour: accent for feature icons, foreground/muted for UI icons
- Always `aria-hidden="true"` when decorative
- Dynamic icons mapped via `components/common/DynamicIcon.tsx`

## Photography

- Real project photos only — no stock images in production
- Aspect ratios: 4:3 for gallery, 16:9 for hero backgrounds
- Always WebP format with JPEG fallback
- Descriptive alt text required
- Lazy load all below-fold images
- Placeholder blocks shown until client photos uploaded

## Trust Sections

- TrustBar: horizontal icon + label badges below hero
- Reviews: card grid with star ratings, quote, name, location
- Guarantees: checkmark list with accent icons
- Why Choose Us: icon grid with title + description

## CTA Sections

- Full-width section with primary or accent background
- Centred heading + description + two buttons (Call + Quote)
- Appears at bottom of every page
- Can be customised with title/description props

## Navigation

- Sticky header with blur backdrop on scroll
- Desktop: horizontal links + phone button
- Mobile: hamburger → slide-out sheet with links + phone button
- Active page: no special styling (keep simple)

## Footer

- Primary (dark) background
- 4-column grid: business info, quick links, services, contact
- Social media icons
- Copyright + areas covered
- Separator between content and copyright

## Gallery

- 3-column grid on desktop, 2 on tablet, 1 on mobile
- 4:3 aspect ratio images
- Hover overlay with image description
- Category labels

## Testimonials

- 2-column grid on desktop
- Blockquote styling with star rating
- Customer name + location in footer
- Muted background section

## Forms

- Card wrapper with title + description
- 2-column layout for name/phone on desktop
- Required fields marked with asterisk
- Service dropdown populated from config
- Success state with checkmark
- Error state with alert message
- Full-width submit button in accent colour
