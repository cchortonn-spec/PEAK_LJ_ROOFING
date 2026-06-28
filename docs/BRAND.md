# BRAND.md — Config Field Reference

> **For client intake, use [`docs/CLIENT_BUILD.md`](./CLIENT_BUILD.md) first.**  
> This file maps each config field in `lib/config.ts` for technical reference during implementation.

Each field below maps directly to a key in `lib/config.ts`.

---

## business.name

<!-- e.g. Smith & Sons Plumbing -->

## business.industry

<!-- e.g. Plumbing & Heating, Electrical, Roofing, Building -->

## business.phone / business.phoneDisplay

<!-- e.g. +441234567890 / 01234 567 890 -->

## business.email

<!-- e.g. info@smithplumbing.co.uk -->

## business.website

<!-- e.g. https://smithplumbing.co.uk -->

## business.address

<!-- street, city, county, postcode, country -->

## business.geo

<!-- latitude and longitude for schema markup -->

## business.schemaType

<!-- Schema.org type: Plumber, Electrician, RoofingContractor, LocalBusiness, etc. -->

## business.areasCovered

<!-- List all towns/areas served -->

## business.yearsTrading

<!-- e.g. 15 -->

## business.usp

<!-- One sentence unique selling proposition -->

## business.guarantees

<!-- List all guarantees/warranties -->

## business.priceRange

<!-- e.g. £, ££, £££ -->

---

## brand.primaryColour / brand.accentColour

<!-- Hex codes -->

## brand.logoPath / brand.faviconPath

<!-- Paths once uploaded to public/branding/ -->

---

## seo.title / seo.description / seo.keywords

<!-- Global SEO defaults -->

## seo.ogImage

<!-- Path to OG image in public/branding/ -->

---

## pages.home / pages.about / pages.services / pages.contact

<!-- Per-page SEO titles, descriptions, hero text, and page-specific copy -->
<!-- See lib/config.ts for the full structure -->

---

## sections.*

<!-- Homepage section headings: services, aboutPreview, whyChooseUs, reviews, gallery, process, faq -->

---

## contact.openingHours

<!-- weekday hours and emergency availability -->

## contact.form / contact.stickyBar

<!-- Form labels and mobile CTA button text -->

---

## services

<!-- Array of services: id, title, description, icon, slug -->

## reviews

<!-- Array: id, name, location, rating (1-5), text, date -->

## faqs

<!-- Array: id, question, answer -->

## process / trustBadges / whyChooseUs / gallery

<!-- See lib/config.ts for structure -->

---

## social.facebook / social.instagram / social.google

<!-- Social profile URLs -->

---

## Homepage Mock-up

<!-- Attach to public/mockups/ and note filename -->

## Business Photos

<!-- Upload to public/gallery/, set isPlaceholder: false, add width/height/alt -->

## Competitors

<!-- For SEO planning — note in docs/SEO_PLAN.md -->

## Extra Notes

<!-- Any additional requirements -->
