# SEO.md — SEO Rulebook

Complete SEO standards for all websites built with this framework.

## Technical SEO Standards

- Valid HTML5 semantic markup
- HTTPS only (enforced by Vercel)
- Mobile-responsive (mobile-first design)
- Page speed: 95+ mobile Lighthouse score
- No broken links
- Clean URL structure: lowercase, hyphens, no trailing slashes
- XML sitemap auto-generated at `/sitemap.xml`
- robots.txt auto-generated at `/robots.txt`
- Canonical URLs on every page
- Preview/staging environments blocked from indexing

## Metadata Rules

Every page MUST export metadata using helpers from `lib/metadata.ts`:

```typescript
export const metadata: Metadata = createPageMetadata(
  "Page Title",
  "Page description here",
  "/page-path"
);
```

## Title Tag Rules

- Format: `[Page Title] | [Business Name]`
- Maximum 60 characters total
- Include primary keyword naturally
- Unique for every page
- Homepage: `[Service] in [Location] | [Business Name]`

### Examples
- Home: `Premier Plumbing Solutions | Expert Plumbers in Manchester`
- About: `About Us | Premier Plumbing Solutions`
- Services: `Our Services | Premier Plumbing Solutions`
- Contact: `Contact Us | Premier Plumbing Solutions`

## Meta Description Rules

- 150-160 characters
- Include primary keyword and location
- Include a call to action
- Unique for every page
- Written for humans, not search engines

### Example
`Trusted local plumbers serving Manchester and surrounding areas. Emergency callouts, boiler repairs, bathroom installations. Free quotes. Call 01234 567 890.`

## Heading Hierarchy

- One H1 per page (page title)
- H2 for section headings
- H3 for sub-sections
- Never skip levels (no H1 → H3)
- Include keywords naturally in headings

## Internal Linking Strategy

- Every page links to Contact page (via CTA)
- Services page links from homepage service cards
- About page linked from homepage AboutPreview
- Footer contains links to all main pages
- Future service pages link back to Services hub
- Future location pages link to relevant services
- Use descriptive anchor text (not "click here")

## Image Optimisation

- Use Next.js `<Image>` component
- WebP format preferred
- Descriptive file names: `bathroom-installation-manchester.webp`
- Alt text: describe the image content, include service/location where natural
- Specify `width`, `height`, and `sizes` props
- Lazy load below-fold images (`loading="lazy"`)
- Priority load hero/above-fold images

## Schema Strategy

JSON-LD schemas generated from `lib/schema.ts`:

| Schema | Page | Purpose |
|--------|------|---------|
| LocalBusiness (Plumber) | All pages (layout) | Business entity |
| Service | Home, Services | Individual services |
| FAQPage | Home | FAQ rich results |
| BreadcrumbList | All inner pages | Navigation breadcrumbs |
| Review | Home | Individual reviews |
| AggregateRating | All pages (via LocalBusiness) | Star rating display |

## Local SEO Strategy

- NAP (Name, Address, Phone) consistent across site
- NAP in footer, contact page, and schema markup
- Service areas listed in config and displayed on site
- Google Business Profile link in footer/social
- Location mentioned naturally in page content
- Local keywords in titles and descriptions

## Future Service Pages

URL pattern: `/services/[service-slug]`
- One page per main service
- Unique title: `[Service] in [Location] | [Business Name]`
- Unique meta description with service-specific keywords
- Service schema markup
- Breadcrumb: Home > Services > [Service Name]
- Internal links to related services and contact page
- CTA section at bottom

## Future Location Pages

URL pattern: `/areas/[location-slug]`
- One page per service area
- Unique title: `[Service] in [Location] | [Business Name]`
- Location-specific content (not duplicate)
- LocalBusiness schema with areaServed
- Breadcrumb: Home > Areas > [Location]
- Link to relevant service pages
- CTA section at bottom

## Blog Strategy

URL pattern: `/blog/[post-slug]`
- Target long-tail keywords
- 800-1500 words per post
- Include internal links to service pages
- Article schema markup
- Categories: tips, guides, news, case studies
- 1-2 posts per month after launch

## FAQ Strategy

- FAQ section on homepage (from config)
- FAQ schema markup for rich results
- Expand with service-specific FAQs on service pages
- Target "People Also Ask" queries
- Update quarterly with new questions

## Emergency Landing Pages

URL pattern: `/emergency-[service]-[location]`
- For high-intent emergency searches
- Minimal content, maximum conversion
- Click-to-call above the fold
- Short page, fast loading
- Example: `/emergency-plumber-manchester`

## Content Quality Standards

- Write for humans first, search engines second
- Minimum 300 words per page
- Include location naturally (not keyword stuffed)
- Use short paragraphs (2-3 sentences)
- Include CTAs within content
- Update content quarterly
- No duplicate content across pages

## Keyword Usage Rules

- Primary keyword in: title, H1, first paragraph, meta description
- Secondary keywords in: H2 headings, body content
- Location keywords in: title, meta description, body, schema
- Keyword density: natural, never forced
- Use variations and synonyms
- One primary keyword per page

## Canonical Rules

- Every page has a self-referencing canonical URL
- Generated automatically via `createMetadata()`
- Use absolute URLs
- HTTPS always

## Robots.txt

Auto-generated via `app/robots.ts`:
- Production: allow all, point to sitemap
- Preview/staging: disallow all
- Never manually edit — update the generator

## Sitemap Generation

Auto-generated via `app/sitemap.ts`:
- Reads routes from config
- Updates automatically when pages added
- Submitted to Google Search Console after launch

## Google Search Console Checklist

After launch:
- [ ] Verify domain ownership
- [ ] Submit sitemap
- [ ] Check index coverage
- [ ] Monitor Core Web Vitals
- [ ] Set up email alerts for issues
- [ ] Check mobile usability
- [ ] Review search performance monthly

## Core Web Vitals Goals

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| INP (Interaction to Next Paint) | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Mobile Lighthouse Performance | 95+ |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |

## Future SEO Roadmap

### Phase 1 — Launch (Week 1)
- Core pages live with full metadata and schema
- Sitemap submitted
- Google Search Console verified
- Google Business Profile linked

### Phase 2 — Service Pages (Month 1-2)
- Individual service pages for top 3-5 services
- Service-specific schema and FAQs
- Internal linking from homepage

### Phase 3 — Location Pages (Month 2-3)
- Location landing pages for top 5-8 areas
- Location-specific content
- Local schema markup

### Phase 4 — Content (Month 3+)
- Blog launch with 2 posts/month
- FAQ expansion
- Emergency landing pages
- Case study pages

### Phase 5 — Optimisation (Ongoing)
- Monthly Search Console review
- Quarterly content updates
- Competitor monitoring
- Core Web Vitals monitoring
