# CLAUDE.md — Operating Manual

This is the master instruction file for AI assistants working on this project. Read this file first before making any changes.

## What This Framework Is

This is a **reusable website template** for UK local service businesses (plumbers, electricians, builders, roofers, etc.). It is NOT a client website — it is the master template that gets duplicated for every new client project.

When building a new client site:

1. **Duplicate** this repository and rename the folder for the client
2. **Complete [`docs/CLIENT_BUILD.md`](./CLIENT_BUILD.md)** — the single source of truth for the project (10–15 minutes)
3. **Add assets** to `public/` (logo, gallery, mockups, etc.)
4. **Give Claude** the completed project — Claude reads `CLIENT_BUILD.md` first, creates an **implementation plan**, and waits for your approval before writing code
5. After approval, Claude updates `lib/config.ts`, branding, variants, and content — **never rebuilds the framework**

Supporting references:
- [`docs/BRAND.md`](./BRAND.md) — technical field mapping (`config` keys)
- [`docs/DESIGN.md`](./DESIGN.md) — themes and layout variants
- `/design-preview` — visual variant comparison (local dev)

### Client build workflow

```
Fill CLIENT_BUILD.md → Claude reviews & plans → You approve → Claude implements → lint + build
```

**`CLIENT_BUILD.md` always takes priority** over placeholder demo content in the framework.

## How Every Website Should Be Built

### The Golden Rule
**All client-specific data lives in `lib/config.ts`.** Components and pages read from config — they never contain hardcoded business names, phone numbers, locations, or marketing copy.

### Config Structure
| Key | Purpose |
|-----|---------|
| `theme.variant` | Global theme preset (premium, modern-trade, emergency) |
| `layout.*` | Per-section layout variants |
| `business` | Core business info, geo coordinates, schema type |
| `brand` | Colours, logo, favicon |
| `pages` | Per-page SEO, hero content, and page-specific copy |
| `sections` | Homepage section headings and labels |
| `contact` | Opening hours, form copy, sticky CTA labels |
| `ctas` | Default CTA block content |
| `services`, `reviews`, `faqs`, etc. | Content arrays |

Use `lib/routes.ts` for path constants. Use `createConfigPageMetadata('about')` for page metadata. Use `lib/layout.ts` (`layoutVariants`) for variant switchers.

### Choosing Theme + Variants for a Client

1. Pick `theme.variant` based on business personality (see DESIGN.md)
2. Pick `layout.hero.variant` — hero sets first impression
3. Match section variants to content volume (featured layouts need strong content)
4. Keep visual rhythm — alternate layouts (split hero + stats about + featured reviews)

Example combinations:
- **Premium plumber:** `premium` + centered hero + featured services + masonry gallery
- **Emergency electrician:** `emergency` + background hero + grid-4 services + dark CTA
- **Modern builder:** `modern-trade` + split hero + featured services + timeline process

### Page Structure
Every page follows this pattern:
1. Page hero section (primary background, H1, description)
2. Content sections using reusable components
3. CTA section at the bottom

### Homepage Section Order
Hero → TrustBar → Services → AboutPreview → WhyChooseUs → Reviews → Gallery → Process → FAQ → CTASection

## Design Philosophy

- **Premium UK agency quality** — clean, professional, trustworthy
- **Mobile-first** — design for mobile, enhance for desktop
- **Conversion-focused** — every section should drive enquiries
- **Performance-first** — never sacrifice speed for visual effects
- **Accessible** — WCAG 2.1 AA minimum
- **Minimal animation** — subtle fade-in on scroll only (Framer Motion)

## Coding Standards

- TypeScript everywhere — no `any` types
- Server Components by default, Client Components only when needed (interactivity, hooks, animations)
- All components in `components/` organised by type (layout, sections, forms, common, ui)
- Use shadcn/ui primitives — don't reinvent buttons, cards, inputs
- Use the `cn()` utility for conditional classes
- Semantic HTML — proper heading hierarchy, landmarks, ARIA labels
- All images must have descriptive `alt` text

## Mobile-First Philosophy

- Design and build mobile layout first
- Test at 375px width minimum
- Sticky mobile CTA bar always visible on mobile
- Click-to-call prominent on every page
- Touch targets minimum 44x44px
- No horizontal scroll ever

## Performance Philosophy

- Target: 95+ Mobile Lighthouse, 100 Best Practices, 100 SEO
- Server Components for static content
- Lazy load below-fold images
- Minimal JavaScript — only what's needed for interactivity
- No unnecessary npm packages
- Use Next.js Image component for all images
- Framer Motion: viewport-triggered animations only, `once: true`

## Accessibility Standards

- Semantic HTML5 elements (`header`, `main`, `footer`, `nav`, `section`, `article`)
- One H1 per page
- Logical heading hierarchy (H1 → H2 → H3)
- All interactive elements keyboard accessible
- Focus visible states on all focusable elements
- ARIA labels on icon-only buttons
- Colour contrast ratio minimum 4.5:1
- Form labels associated with inputs
- Skip navigation link (future improvement)

## SEO Philosophy

- Every page has unique title and meta description
- Title format: `[Page Title] | [Business Name]`
- Meta descriptions: 150-160 characters, include location and CTA
- JSON-LD schema on every page (LocalBusiness, Service, FAQ, Breadcrumb)
- Internal linking between all pages
- Canonical URLs on every page
- Sitemap auto-generated from config
- robots.txt blocks preview/staging environments

## Conversion Optimisation Philosophy

- Phone number visible in header (desktop) and sticky bar (mobile)
- Every page ends with a CTA section
- Trust signals above the fold (TrustBar)
- Social proof via reviews section
- Free quote messaging throughout
- Contact form on dedicated page + accessible from every CTA
- Click-to-call uses `tel:` links

## Reusable Component Rules

- Components must be generic — no client-specific content
- All data comes from `lib/config.ts` via imports
- Components accept optional props for customisation (titles, limits, variants)
- Use the Section/Container/SectionHeader pattern for consistent spacing
- Use FadeIn wrapper for scroll animations
- Never duplicate component logic — extract to shared utilities

## Animation Rules

- Use Framer Motion `FadeIn` component only
- Animation: fade + slight upward movement
- Duration: 0.5s max
- Trigger: viewport intersection, once only
- Stagger: 0.1s delay between items in grids
- NO parallax, NO complex scroll animations, NO page transitions
- Respect `prefers-reduced-motion` (future improvement)

## Deployment Workflow

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Production deploys from `main` branch
5. Preview deploys from pull requests
6. Preview URLs are blocked from search engines via robots.ts

## Future SEO Strategy

Phase 1 (Launch): Core pages (Home, About, Services, Contact) with full schema
Phase 2 (Month 1-2): Individual service pages (`/services/[slug]`)
Phase 3 (Month 2-3): Location landing pages (`/areas/[location]`)
Phase 4 (Month 3+): Blog content, FAQ expansion, emergency landing pages
See `docs/SEO.md` and `docs/SEO_PLAN.md` for full details.

## How Future Pages Should Be Added

1. Create page file in `app/[route]/page.tsx`
2. Add metadata using `createPageMetadata()` from `lib/metadata.ts`
3. Add breadcrumb schema using `breadcrumbSchema()` from `lib/schema.ts`
4. Add route to `app/sitemap.ts`
5. Add navigation item to `lib/config.ts` if needed
6. Compose page from existing section components
7. End with CTASection

## Key Files Reference

| File | Purpose |
|------|---------|
| `lib/config.ts` | ALL client data — update for every new project |
| `lib/routes.ts` | Route path constants |
| `lib/site-url.ts` | URL helpers and indexability checks |
| `app/globals.css` | Design tokens and global styles |
| `lib/metadata.ts` | SEO metadata helpers |
| `lib/schema.ts` | JSON-LD schema generators |
| `lib/resend.ts` | Email sending utility |
| `types/index.ts` | TypeScript interfaces |
| `docs/CLIENT_BUILD.md` | **Primary client intake** — fill before every build |
| `docs/BRAND.md` | Technical config field mapping |
| `docs/DESIGN.md` | Design system reference |
| `docs/SEO.md` | SEO rulebook |
| `docs/COMPONENTS.md` | Component documentation |
