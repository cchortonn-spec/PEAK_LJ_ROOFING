# DEVELOPMENT.md — Coding Standards

Development guidelines for all websites built with this framework.

## Folder Structure

```
app/                    # Next.js App Router pages and API routes
  layout.tsx            # Root layout
  page.tsx              # Homepage
  globals.css           # Design tokens and global styles
  about/                # About page
  services/             # Services page
  contact/              # Contact page
  api/contact/          # Contact form API route
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # Auto-generated robots.txt

components/
  ui/                   # shadcn/ui primitives (auto-generated, don't edit)
  layout/               # Header, Navigation, Footer
  sections/             # Page section components
  forms/                # Form components
  common/               # Shared utilities and wrappers

lib/
  config.ts             # Central client configuration
  metadata.ts           # SEO metadata helpers
  schema.ts             # JSON-LD schema generators
  resend.ts             # Email utility
  utils.ts              # cn() and shared utilities

hooks/                  # Custom React hooks
types/                  # TypeScript interfaces
public/
  branding/             # Logo, favicon, OG image
  gallery/              # Client project photos
  mockups/              # Homepage mockup reference
docs/                   # Project documentation
```

## Naming Conventions

### Files
- Components: PascalCase (`Hero.tsx`, `ContactForm.tsx`)
- Utilities: camelCase (`metadata.ts`, `schema.ts`)
- Pages: lowercase (`page.tsx` in route folders)
- Types: PascalCase interfaces (`SiteConfig`, `Service`)

### Variables
- camelCase for variables and functions
- PascalCase for components and types
- SCREAMING_SNAKE_CASE for constants
- Descriptive names: `phoneDisplay` not `phone2`

### CSS
- Custom properties: `--colour-primary`, `--section-padding-y`
- Utility classes: `.section-padding`, `.container-width`
- Tailwind classes preferred over custom CSS

## Component Organisation

- One component per file
- Co-locate related sub-components only if small and never reused
- Export named functions (not default exports for components)
- Props interface defined above component
- Server Components by default — add `"use client"` only when needed

### When to Use Client Components
- Event handlers (onClick, onChange, onSubmit)
- React hooks (useState, useEffect, useRef)
- Browser APIs (window, document)
- Framer Motion animations
- Interactive UI (mobile menu, form state)

### When to Use Server Components
- Static content rendering
- Data fetching from config
- SEO metadata
- Layout components without interactivity

## TypeScript Standards

- Strict mode enabled
- All props typed with interfaces
- No `any` — use `unknown` and narrow if needed
- Import types with `import type { ... }`
- Shared types in `types/index.ts`
- Config typed via `SiteConfig` interface

## Reusable Code Philosophy

- DRY: if used twice, extract it
- Config-driven: data in `lib/config.ts`, not in components
- Composition over inheritance: small components composed together
- Props for customisation, config for data
- Utility functions in `lib/`, hooks in `hooks/`

## Performance Optimisation

- Server Components for all static content
- Dynamic imports for heavy client components if needed
- Next.js Image for all images
- Minimal client-side JavaScript
- No unnecessary re-renders
- Framer Motion: `viewport={{ once: true }}` always
- Font display: swap

## Image Optimisation

- Store in `public/` directory
- Use WebP format
- Descriptive filenames
- Next.js `<Image>` component with width/height
- `sizes` prop for responsive images
- `priority` for above-fold images
- `loading="lazy"` for below-fold (default)

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose | Required |
|----------|---------|----------|
| `RESEND_API_KEY` | Resend email API key | For contact form |
| `RESEND_FROM_EMAIL` | Sender email address | For contact form |
| `CONTACT_EMAIL` | Recipient email address | For contact form |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | For metadata |

Never commit `.env.local` to git.

## Resend Integration

Email sending is prepared but not configured by default.

1. Create account at https://resend.com
2. Add API key to `.env.local`
3. Verify sender domain
4. Update `RESEND_FROM_EMAIL` and `CONTACT_EMAIL`
5. Contact form will automatically start sending emails

The API route at `app/api/contact/route.ts` handles validation and sending.
If Resend is not configured, the form shows an error gracefully.

## Analytics Preparation

Analytics are not included by default. To add:

1. Google Analytics 4: add gtag script to `app/layout.tsx`
2. Or use Vercel Analytics: `npm i @vercel/analytics`
3. Keep analytics loading async/deferred for performance

## Deployment Workflow

### Initial Setup
1. Push repository to GitHub
2. Import project in Vercel dashboard
3. Set environment variables in Vercel
4. Deploy from `main` branch

### Ongoing
1. Push to `main` → automatic production deploy
2. Pull requests → preview deployments
3. Preview URLs blocked from search engines

### Pre-Launch Checklist
- [ ] Update `lib/config.ts` with real client data
- [ ] Replace logo and favicon in `public/branding/`
- [ ] Add real gallery photos to `public/gallery/`
- [ ] Update brand colours in `app/globals.css`
- [ ] Set environment variables in Vercel
- [ ] Test contact form
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Business Profile link

## Git Workflow

- `main` branch = production
- Feature branches for new pages/features
- Commit messages: clear and descriptive
- Don't commit `.env.local`, `node_modules`, or `.next`
- Each client project gets its own repository (duplicated from this template)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

Development server runs at http://localhost:3000
