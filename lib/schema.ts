import { siteConfig } from "@/lib/config";
import { getAbsoluteUrl } from "@/lib/site-url";
import type { BreadcrumbItem } from "@/types";

function getAverageRating(): string {
  const { reviews } = siteConfig;
  if (reviews.length === 0) return "5";
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(1);
}

export function localBusinessSchema() {
  const { business, social } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": business.schemaType,
    name: business.name,
    description: business.usp,
    url: business.website,
    telephone: business.phone,
    email: business.email,
    image: getAbsoluteUrl(siteConfig.brand.logoPath),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.county,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.areasCovered.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: business.priceRange,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [social.facebook, social.instagram, social.google].filter(
      (url): url is string => Boolean(url)
    ),
    ...(siteConfig.reviews.length > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: getAverageRating(),
        reviewCount: siteConfig.reviews.length.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    }),
  };
}

export function serviceSchema() {
  return siteConfig.services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: getAbsoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": businessSchemaType(),
      name: siteConfig.business.name,
      telephone: siteConfig.business.phone,
    },
    areaServed: siteConfig.business.areasCovered.map((area) => ({
      "@type": "City",
      name: area,
    })),
  }));
}

function businessSchemaType() {
  return siteConfig.business.schemaType;
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.url),
    })),
  };
}

export function reviewSchema() {
  return siteConfig.reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": businessSchemaType(),
      name: siteConfig.business.name,
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.text,
    datePublished: review.date,
  }));
}
