# CLIENT BUILD — Intake Document

> **This document is the single source of truth for the client website.**  
> If `CLIENT_BUILD.md` conflicts with any placeholder or demo content inside the framework, **`CLIENT_BUILD.md` always takes priority.**

---

## How to use this document

1. Duplicate the master framework folder for this client.
2. Rename the folder to match **Website Folder Name** below.
3. Spend 10–15 minutes filling in every section of this file.
4. Add all assets to the `public/` folder (logo, gallery, mock-up, etc.).
5. Give this completed file to Claude along with access to the project.
6. Claude will create an implementation plan first — **review and approve it before any code is written.**

Technical field mapping (config keys): see [`docs/BRAND.md`](./BRAND.md)  
Design variants and themes: see [`docs/DESIGN.md`](./DESIGN.md)  
Visual variant preview (local dev): visit `/design-preview`

---

# Project Overview

| Field | Your answer |
|-------|-------------|
| **Business Name** | LJ ROOFING |
| **Website Folder Name** | LJ ROOFING 
| **Domain Name** |ljroofing.co.uk|
| **Website Goal** | _e.g. Generate phone calls and quote requests from local homeowners_ |
| **Launch Deadline** 

---

# Business Information

| Field | Your answer |
|-------|-------------|
| **Business Name** |LJ ROOFING|
| **Trading Name** |LJ ROOFING|
| **Owner Name** |Lyle|
| **Phone Number** |07435349569|
| **Phone Number (tel link)** | _International format: +441234567890_ |
| **Email Address** |lylejones1309@mail.com|
| **WhatsApp Number** |07435349569|
| **WhatsApp Click-to-Chat URL** |https://wa.me/+447435349569

### Address

| Field | Your answer |
|-------|-------------|
| **Street Address** | |
| **Town / City** |South Yorkshire|
| **County** | |
| **Postcode** | |
| **Country** | United Kingdom |

| Field | Your answer |
|-------|-------------|
| **Google Maps URL** | |
| **Google Business Profile URL** | |

### Opening Hours

| Day | Hours |
|-----|-------|
| **Monday – Friday** | |
| **Saturday** | |
| **Sunday** | |
| **Emergency / Out-of-hours** |24/7 emergency callouts|

---

# Pre-Build Audit

_Complete this section so Claude understands the client's existing business and what the new website is replacing._

## Current Website

| Field | Your answer |
|-------|-------------|
| **Website URL** 
| **Overall thoughts** | |
| **What works well?** | |
| **What should be improved?** | |

---

## Google Business Profile

| Field | Your answer |
|-------|-------------|
| **Profile URL** | |
| **Average Rating** | _e.g. 4.9_ |
| **Number of Reviews** | _e.g. 87_ |
| **Any obvious improvements?** | |

---

## Existing Branding

| Asset | Notes / location |
|-------|------------------|
| **Current Logo** |In public folder|
| **Current Colours** |Blue and white|
| **Vehicle Livery** | |
| **Uniform** | |
| **Business Cards** |in public folder|
| **Leaflets** | |
| **Social Media Branding** | |
| **Consistency Notes** | _Is branding consistent across all touchpoints?_ |

---

## Existing Website Issues

Tick anything that applies to the current website (if one exists):

- [ ] Looks outdated
- [ ] Poor mobile experience
- [ ] Slow
- [ ] Hard to contact
- [ ] Weak calls to action
- [ ] Poor SEO
- [ ] Generic design
- [ ] Difficult navigation
- [ ] Too much text
- [ ] Poor imagery

**Other notes:**

---

# Branding

### Colours

| Field | Hex code | Example |
|-------|----------|---------|
| **Primary Colour** | | blue |
| **Secondary Colour** | | |
| **Accent Colour** | | |
| **Background Colour** | |

### Preferred Theme

Tick one. Maps to `theme.variant` in `lib/config.ts`.

- [ ] **Premium** — `theme.variant: "premium"` — Refined, navy/gold, generous spacing
- [YES] **Modern Trade** — `theme.variant: "modern-trade"` — Bold blue/white, balanced spacing
- [ ] **Emergency Services** — `theme.variant: "emergency"` — High-contrast, urgent feel

### Layout Preferences

Preview all options at `/design-preview` during development.

| Section | Preferred variant | Config key | Options |
|---------|-------------------|------------|---------|
| **Hero** | | `layout.hero.variant` | `centered`, `split`, `background`, `premium` |
| **Gallery** | | `layout.gallery.variant` | `grid`, `masonry`, `featured` |
| **Gallery lightbox** | | `layout.gallery.lightbox` | `true` / `false` |
| **Service layout** | | `layout.services.layout` | `grid-3`, `grid-4`, `featured` |
| **CTA** | | `layout.cta.variant` | `dark`, `light`, `split` |
| **About** | | `layout.about.variant` | `image-right`, `image-left`, `stats` |
| **Why Choose Us** | | `layout.whyChooseUs.variant` | `cards`, `icon-list` |
| **Reviews** | | `layout.reviews.variant` | `grid`, `featured` |
| **Process** | | `layout.process.variant` | `numbered`, `timeline` |
| **FAQ** | | `layout.faq.variant` | `accordion`, `cta` |

| Field | Your answer |
|-------|-------------|
| **Preferred Card Style** | `simple` / `feature` / `horizontal` → `layout.services.cardStyle` |
| **Preferred Button Style** | _e.g. Rounded, bold, outline secondary_ |
| **Preferred Border Radius** | _e.g. Soft and rounded / Sharp and square_ |

**Any branding notes:**

---

# Business Description

Write 2–3 paragraphs describing the business (this will become homepage and about page copy):

```




```

| Field | Your answer |
|-------|-------------|
| **History** | _How did the business start?_ |
| **Experience** | _Years trading, qualifications, team size_ |
| **USP (Unique Selling Point)** | _One sentence — what makes this business different?_ |
| **Mission** | _What does the business stand for?_ |
| **Tone of Voice** | _e.g. Professional, friendly, premium, no-nonsense, local and trustworthy_ |

---

# Services

List every service the business offers.

| Service Name | Short Description | Priority |
|--------------|-------------------|----------|
| | | High / Medium / Low |
| | | High / Medium / Low |
| | | High / Medium / Low |
| | | High / Medium / Low |
| | | High / Medium / Low |
| | | High / Medium / Low |
| | | High / Medium / Low |
| | | High / Medium / Low |

_Add more rows if needed._

---

# Service Areas

| Field | Your answer |
|-------|-------------|
| **Primary Town** |Sheffield,south yorkshire,barnsley,doncaster,chesterfield|
| **Secondary Towns** |wakefield,leeds,nottingham,wath,swinton,mexborough,denaby,conisbrough,penistone, worksop,chapeltown,chesterfield,wombwell,rotherham,huddesfield|
| **Counties** |United Kingdom|
| **Radius Covered** |Within 30 miles of Barnsley|
| **Emergency Coverage Areas** | all above loactions|

---

# Conversion Strategy

Not every business wants phone calls. Some want WhatsApp, forms, or email. Define how this website should convert visitors into customers.

### Contact Methods on Website

Tick all contact methods to include on the site:

- [ x] **Call** — Click-to-call phone button
- [ x] **WhatsApp** — WhatsApp click-to-chat link
- [ x] **Contact Form** — On-site enquiry form
- [ x] **Email** — Email address displayed

### Primary Goal

Tick one — this is the main conversion action across the site (hero, sticky bar, CTAs):

- [ ] Phone Call
- [x] WhatsApp
- [ ] Contact Form
- [ ] Email

### Secondary Goal

Tick one — fallback or supporting conversion action:

- [x] Phone
- [ ] WhatsApp
- [ ] Form
- [ ] Email

### Urgency

Tick all that apply — shapes headline copy, CTAs, and tone:

- [ ] Emergency Business
- [ ] Same Day Service
- [ ] Book Consultation
- [x ] Request Quote
- [ x] Free Survey

**Notes on conversion strategy** _(optional — e.g. "WhatsApp for quotes, phone for emergencies"):_

```




```

---

# Social Media

| Platform | URL |
|----------|-----|
| **Facebook** |https://www.facebook.com/profile.php?id=61552970713666&locale=en_GB|
| **Instagram** | |
| **TikTok** | |
| **LinkedIn** | |
| **YouTube** | |
| **Checkatrade** | |
| **MyBuilder** | |
| **TrustATrader** | |
| **Rated People** | |
| **Other** | |

---

# Reviews

Paste the best customer reviews below. Include name, location, rating (if known), and review text.

**Highlight the strongest testimonials** — mark which 1–2 should be featured prominently on the homepage.

### Review 1 ⭐

**Name:**  
**Location:**  
**Rating:**  
**Text:**

### Review 2 ⭐

**Name:**  
**Location:**  
**Rating:**  
**Text:**

### Review 3 ⭐

**Name:**  
**Location:**  
**Rating:**  
**Text:**

### Review 4 ⭐

**Name:**  
**Location:**  
**Rating:**  
**Text:**

### Review 5 ⭐

**Name:**  
**Location:**  
**Rating:**  
**Text:**

**Strongest testimonials to feature:**

---

# Trust Signals

Tick everything that applies:

- [10+] **Years Trading** — _How many?_
- [ x] **Fully Insured**
- [ ] **Accreditations** — _e.g. Gas Safe, NICEIC, Checkatrade_
- [ ] **Certifications** — _List:_
- [x ] **Guarantees** — no specific guarnetee to desplay
- [ ] **Awards**
- [ ] **Finance Available**
- [x ] **Emergency Callouts**
- [ x] **Free Quotes**
- [ x] **Other** — include some logos from known roofing Accreditation maybe in the footer

---

# Competitors

List 3–5 local competitors. Note what they do well and what this client should do better.

| Competitor Name | Website URL | What they do well | What we should beat them on |
|-----------------|-------------|-------------------|----------------------------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

---

# SEO

| Field | Your answer |
|-------|-------------|
| **Primary Keyword** |roofer,roofers neer me,roofing company|
| **Secondary Keywords** |roofing contractor,new roof, roof repair, chimney repair, lead work, flat roof, roof cleaning, gutter cleaning, fascia and soffits, roofers barnsley, roofers sheffield, roofers doncaster, roofers chesterfield, roofers rotherham|
| **Target Locations** |sheffield,south yorkshire,barnsley,doncaster,chesterfield,wakefield,leeds,nottingham,wath,swinton,mexborough,denaby,conisbrough,penistone, worksop,chapeltown,chesterfield,wombwell,rotherham,huddesfield|
| **Important Search Terms** |Roof Repairs neer me,new roof sheffield, sheffield roofing company, roofer chesterfield, roofer barnsley, flat roof sheffield, chimney repair sheffield|
| **Services to prioritise for SEO** |New Roof and Roof Repair,Flat Roofs, Chimney Repairs,Lead Work,Roof Cleaning,Gutter Cleaning,Fascia and Soffits |

---

# Website Assets

List where each asset is stored (file path in `public/` or external link).

| Asset | Location / status |
|-------|-------------------|
| **Logo** |in branding folder as LJ ROOFING LOGO.png |
| **Favicon** |not yet installed|
| **OG / Social Share Image** |not yet installed|
| **Gallery Images** |in pubic images folder |
| **Before / After Images**  | |
| **Certificates / Accreditations** | |
| **Homepage Mock-up** | _e.g. public/mockups/homepage.png_ |
| **Videos** | _YouTube links or file paths_ |

**Anything still missing:**

---

# Design Notes

Tick the words that describe the desired look and feel:

- [x] Modern
- [x] Premium
- [ ] Luxury
- [ ] Friendly
- [ ] Bold
- [ ] Minimal
- [ ] Traditional
- [ ] High-end
- [x] Clean
- [ ] Corporate
- [ ] Masculine
- [ ] Industrial

**Describe the overall look and feel:**

```




```

**Any specific design requests:**

```




```

---

# Homepage Structure

Tick the sections required on the homepage:

- [x] Hero
- [x] Trust Bar
- [x] Services
- [x] About
- [x] Why Choose Us
- [x] Gallery - small amount of photos
- [x] Reviews - make these up as we dont have any yet keep them short
- [x] Process
- [x] FAQ
- [x] CTA
- [x] Contact

### Preferred Order

Number the sections in the order they should appear (1 = first):

| Order | Section |
|-------|---------|
| 1. |hero |
| 2. | |
| 3. | |
| 4. | |
| 5. | |
| 6. | |
| 7. | |
| 8. | |
| 9. | |
| 10. | |
| 11. | |

**Sections to remove:**

**Sections to add:**

---

# Content Notes

**Anything that MUST appear on the website:**

```




```

**Anything to AVOID:**

```




```

**Legal wording / disclaimers required:**

```




```

**Special offers or promotions:**

```




```

**Finance options to mention:**

```




```

---

# Future SEO Plan

_Pages and content to build after launch. Claude should note these for future work — do not build unless asked._

### Future Service Pages

- 
- 
- 

### Future Location Pages

- 
- 
- 

### Future Blog Ideas

- 
- 
- 

### Future Guides

- 
- 
- 

### Future FAQs

- 
- 
- 

### Future Emergency Pages

- 
- 
- 

---

# Claude Instructions

When customising this website, follow these rules:

1. **Read this file completely** before making any changes.
2. **Read [`docs/BRAND.md`](./BRAND.md)** for config field mapping.
3. **Read [`lib/config.ts`](../lib/config.ts)** to understand the current structure.
4. **Review every image** inside the `public/` folder.
5. **Review the homepage mock-up** (if provided in Website Assets).
6. **Plan all required changes** before writing any code.
7. **Update the existing website** rather than rebuilding it.
8. **Preserve the framework architecture** — extend, do not restructure.
9. **Move all business-specific information into `lib/config.ts`** — config is the CMS.
10. **Match the branding, colours, typography and layout** to this business using values from this file.
11. **Replace all placeholder and demo content** with this client's real information.
12. **Ensure every page feels bespoke** to this client — not like a generic template.
13. **Run `npm run lint` and `npm run build`** before finishing.
14. **Provide a summary** of everything changed when complete.

---

# Claude Planning Checklist

**Before making ANY changes to the website, Claude must complete every item below.**

## Read and review

- [ ] Read this file (`docs/CLIENT_BUILD.md`) completely
- [ ] Read [`docs/BRAND.md`](./BRAND.md)
- [ ] Read [`docs/DESIGN.md`](./DESIGN.md)
- [ ] Read [`docs/CLAUDE.md`](./CLAUDE.md)
- [ ] Review [`lib/config.ts`](../lib/config.ts)
- [ ] Review all images in the `public/` folder
- [ ] Review the homepage mock-up (if provided)
- [ ] Review the client's current website (from Pre-Build Audit above)
- [ ] Review competitors (from Competitors section above)
- [ ] Review available variants at `/design-preview`

## Create a detailed implementation plan

The plan must include:

- [ ] Design changes
- [ ] Branding updates (colours, logo, favicon)
- [ ] Theme selection (`theme.variant`)
- [ ] Hero variant selection
- [ ] Section variant selections (services, gallery, CTA, about, reviews, process, FAQ, etc.)
- [ ] Homepage structure and section order
- [ ] SEO changes (titles, descriptions, keywords, locations)
- [ ] Conversion strategy applied (primary/secondary goals, urgency, contact methods from CLIENT_BUILD.md)
- [ ] Assets required or still missing

## Approval gate

> **Do NOT begin coding until the implementation plan has been reviewed and approved.**

Only after explicit approval should implementation begin. Then follow the Claude Instructions above, run lint and build, and provide a summary of all changes made.
