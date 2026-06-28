# Trade Website Template

A production-ready website framework for UK local service businesses. Duplicate this repository for every new client project.

## Quick Start — New Client Project

1. **Duplicate** this repository (GitHub → Use this template)
2. **Rename** the folder to the client name
3. **Complete [`docs/CLIENT_BUILD.md`](docs/CLIENT_BUILD.md)** — fill in every section (10–15 minutes)
4. **Add assets** to `public/branding/`, `public/gallery/`, `public/hero/`, `public/mockups/`
5. **Tell Claude** to build the website — it reads `CLIENT_BUILD.md` first, plans, waits for your approval, then implements
6. **Review variants** at `/design-preview` if choosing layouts and themes

See [`docs/CLAUDE.md`](docs/CLAUDE.md) for the full AI operating manual.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the demo site.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Lucide Icons**
- **Framer Motion**
- **Resend** (email, prepared not configured)
- **Vercel** (deployment)

## Project Structure

```
app/                  Pages, layout, API routes, SEO files
components/
  ui/                 shadcn/ui primitives
  layout/             Header, Navigation, Footer
  sections/           Hero, Services, Reviews, FAQ, etc.
  forms/              ContactForm
  common/             Shared utilities, animations, CTAs
lib/
  config.ts           ⭐ Central client configuration (the CMS)
  site-url.ts         URL helpers and indexability checks
  routes.ts           Route constants for all pages
  metadata.ts         SEO metadata helpers
  schema.ts           JSON-LD schema generators
  resend.ts           Email utility
docs/                 Project documentation
public/
  branding/           Logo, favicon, OG image
  gallery/              Client project photos
  hero/                 Homepage hero background image
  mockups/              Homepage mockup reference
```

## Key File: `lib/config.ts`

This is the CMS for the entire website. **No business-specific content should live in components or pages** — everything reads from here:

| Config section | What it controls |
|---|---|
| `theme` | Global theme preset (premium, modern-trade, emergency) |
| `layout` | Section variants (hero, services, gallery, CTA, etc.) |
| `business` | Name, phone, email, address, areas, USP, guarantees, geo, schema type |
| `brand` | Colours, logo, favicon |
| `seo` | Global keywords and OG image |
| `pages` | Per-page SEO, hero text, and page-specific content |
| `sections` | Homepage section headings and labels |
| `contact` | Opening hours, form labels, sticky mobile CTA |
| `ctas` | Default call-to-action block content |
| `services`, `reviews`, `faqs`, etc. | All reusable content arrays |

The config is fully typed via `types/index.ts` and validated with `satisfies SiteConfig`.

## Duplicate for a New Client

1. **Duplicate** this repository
2. **Rename** the folder to the client name
3. **Complete [`docs/CLIENT_BUILD.md`](docs/CLIENT_BUILD.md)** — primary intake document
4. **Add assets** to `public/branding/`, `public/gallery/`, `public/hero/`, `public/mockups/`
5. **Tell Claude** to build — it reads `CLIENT_BUILD.md`, creates a plan, waits for approval, then updates `lib/config.ts` and the site
6. **Set** `NEXT_PUBLIC_SITE_URL` in `.env.local` and Vercel

Use [`docs/BRAND.md`](docs/BRAND.md) as the technical reference for config key names.

## Future Pages (prepared, not built)

Route folders with README instructions are ready for:

- `/services/[slug]` — individual service pages
- `/areas/[location]` — location landing pages
- `/emergency/[slug]` — emergency landing pages
- `/blog/[slug]` — blog articles
- `/guides/[slug]` — evergreen guides

Use route helpers from `lib/routes.ts` when building these.

## Demo Site

The template ships with placeholder business "Premier Plumbing Solutions" to demonstrate the framework. All demo content is in `lib/config.ts`.

### Pages
- **Home** — Full homepage with all sections
- **About** — Company story, values, guarantees
- **Services** — All services with descriptions
- **Contact** — Contact form + business details

## Documentation

| File | Purpose |
|------|---------|
| [docs/CLIENT_BUILD.md](docs/CLIENT_BUILD.md) | **Primary client intake** — fill before every build |
| [docs/CLAUDE.md](docs/CLAUDE.md) | AI operating manual |
| [docs/BRAND.md](docs/BRAND.md) | Technical config field mapping |
| [docs/DESIGN.md](docs/DESIGN.md) | Design system and variant reference |
| [docs/COMPONENTS.md](docs/COMPONENTS.md) | Component documentation |
| [docs/SEO.md](docs/SEO.md) | SEO rulebook |
| [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) | Coding standards |
| [docs/TODO.md](docs/TODO.md) | Improvement backlog |
| [docs/SEO_PLAN.md](docs/SEO_PLAN.md) | Per-client SEO planning |

## Environment Variables

Copy `.env.example` to `.env.local`:

```
RESEND_API_KEY=          # Get from resend.com
RESEND_FROM_EMAIL=       # Verified sender email
CONTACT_EMAIL=           # Where enquiries are sent
NEXT_PUBLIC_SITE_URL=    # Production URL
```

## Deployment

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy

## Features

- Mobile-first responsive design
- Sticky mobile click-to-call bar
- SEO: sitemap, robots.txt, JSON-LD schema, OpenGraph
- Contact form with email integration (Resend)
- Conversion optimised: CTAs, trust badges, reviews
- Performance target: 95+ Lighthouse mobile
- Accessible: semantic HTML, ARIA labels, keyboard navigation
- Fully documented for AI-assisted development

## License

Private — for internal use only.
