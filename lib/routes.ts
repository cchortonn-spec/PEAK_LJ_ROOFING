/**
 * Central route definitions.
 * Use these constants instead of hardcoding paths in components.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  service: (slug: string) => `/services/${slug}`,
  area: (slug: string) => `/areas/${slug}`,
  emergency: (slug: string) => `/emergency/${slug}`,
  blog: (slug: string) => `/blog/${slug}`,
  guide: (slug: string) => `/guides/${slug}`,
} as const;

export const FUTURE_ROUTE_FOLDERS = [
  "app/services/[slug]",
  "app/areas/[location]",
  "app/emergency/[slug]",
  "app/blog/[slug]",
  "app/guides/[slug]",
] as const;
