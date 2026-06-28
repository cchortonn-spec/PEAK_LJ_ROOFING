# TODO.md — Improvement Backlog

Track future improvements here. Update whenever major enhancements are identified.

## Design System v2 — Deferred Variants

- [ ] Service card: image-led, alternating layout, mobile list layout
- [ ] Gallery: before/after comparison, mixed image sizes
- [ ] CTA: image background, minimal inline
- [ ] Reviews: carousel (client component)
- [ ] About: timeline layout
- [ ] FAQ: two-column accordion only
- [x] Design preview page at `/design-preview` for variant comparison

## High Priority

- [x] Add skip navigation link for accessibility
- [x] Add `prefers-reduced-motion` support for animations
- [ ] Create individual service page template (`/services/[slug]`)
- [ ] Create location landing page template (`/areas/[location]`)
- [ ] Add real placeholder images for gallery demo
- [ ] Add favicon.ico and og-image.jpg to public/branding/
- [x] Add 404 not-found page with navigation back to home
- [ ] Add loading.tsx for page transitions

## Medium Priority

- [ ] Add blog section template (`/blog/[slug]`)
- [ ] Add emergency landing page template
- [ ] Add Google Analytics / Vercel Analytics integration
- [ ] Add cookie consent banner (UK GDPR)
- [ ] Add WhatsApp contact button option
- [ ] Add Google Maps embed on contact page
- [ ] Add before/after image comparison for gallery
- [ ] Add service area map component
- [ ] Add structured review submission form
- [ ] Add print stylesheet for contact details

## Low Priority

- [ ] Add dark mode toggle (unlikely needed for trade sites)
- [ ] Add multi-language support
- [ ] Add booking/scheduling integration (Cal.com)
- [ ] Add live chat widget integration
- [ ] Add PDF quote download
- [ ] Add team member profiles section
- [ ] Add certifications/accreditations section
- [ ] Add pricing guide pages
- [ ] Add seasonal landing pages template
- [ ] Add comparison pages (vs competitors)

## Technical Debt

- [ ] Add unit tests for config validation
- [ ] Add E2E tests for contact form
- [ ] Add CI/CD pipeline (GitHub Actions)
- [ ] Add automated Lighthouse CI checks
- [ ] Add dependabot for security updates
- [ ] Add husky pre-commit hooks for linting

## Completed

- [x] Design System v2 — theme system (premium, modern-trade, emergency)
- [x] Design System v2 — hero variants (centered, split, background, premium)
- [x] Design System v2 — service layouts and card styles
- [x] Design System v2 — gallery variants + lightbox
- [x] Design System v2 — CTA variants (dark, light, split)
- [x] Design System v2 — section variants (about, why, reviews, process, FAQ)
- [x] Initial framework setup
- [x] Core pages (Home, About, Services, Contact)
- [x] Reusable component library
- [x] SEO infrastructure (sitemap, robots, schema)
- [x] Contact form with Resend integration
- [x] Mobile sticky CTA
- [x] Documentation suite
