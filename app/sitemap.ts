import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { getAbsoluteUrl } from "@/lib/site-url";

const PAGE_PRIORITIES: Record<string, number> = {
  "/": 1,
  "/services": 0.9,
  "/about": 0.8,
  "/contact": 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = Object.values(siteConfig.pages).map((page) => ({
    url: getAbsoluteUrl(page.seo.path),
    lastModified: new Date(),
    changeFrequency:
      page.seo.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: PAGE_PRIORITIES[page.seo.path] ?? 0.7,
  }));

  return staticPages;
}
