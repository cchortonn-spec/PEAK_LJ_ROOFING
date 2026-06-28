import { siteConfig } from "@/lib/config";

export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.business.website;
  return url.replace(/\/$/, "");
}

export function getAbsoluteUrl(path: string): string {
  const normalisedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalisedPath}`;
}

export function isIndexableEnvironment(): boolean {
  if (process.env.NODE_ENV !== "production") return false;
  if (process.env.VERCEL_ENV === "preview") return false;
  if (process.env.VERCEL_ENV === "development") return false;
  return true;
}
