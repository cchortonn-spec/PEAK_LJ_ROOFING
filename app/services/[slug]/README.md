# Service Pages (Future)

Individual service landing pages will live here.

**URL pattern:** `/services/[slug]`

**Example:** `/services/emergency-plumbing`

## When building

1. Add service data to `lib/config.ts` (already in `services` array — use `slug` field)
2. Create `page.tsx` using the service page template from `docs/COMPONENTS.md`
3. Add metadata via `createPageMetadata()` using service-specific title/description
4. Add `Service` and `BreadcrumbList` schema via `lib/schema.ts`
5. Register the route in `app/sitemap.ts`
6. Link from the services hub page and homepage

See `docs/SEO.md` for full SEO requirements.
