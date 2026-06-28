# Location Pages (Future)

Location landing pages for local SEO will live here.

**URL pattern:** `/areas/[location]`

**Example:** `/areas/manchester`

## When building

1. Add location data to `lib/config.ts` (extend config with `areas` array)
2. Create `page.tsx` with location-specific content
3. Add metadata targeting `[service] in [location]` keywords
4. Add `LocalBusiness` schema with `areaServed`
5. Register in `app/sitemap.ts`
6. Link from footer, contact page, and relevant service pages

See `docs/SEO.md` and `docs/SEO_PLAN.md` for strategy.
