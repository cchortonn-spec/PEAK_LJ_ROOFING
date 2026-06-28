import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { getAbsoluteUrl, getSiteUrl, isIndexableEnvironment } from "@/lib/site-url";

interface CreateMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function createMetadata({
  title,
  description,
  path = "/",
  ogImage,
}: CreateMetadataOptions): Metadata {
  const url = getAbsoluteUrl(path);
  const image = ogImage ?? siteConfig.seo.ogImage;
  const indexable = isIndexableEnvironment();
  const shareImage = image
    ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ]
    : undefined;

  return {
    title,
    description,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.business.name }],
    creator: siteConfig.business.name,
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      title,
      description,
      siteName: siteConfig.business.name,
      ...(shareImage ? { images: shareImage } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(shareImage ? { images: shareImage.map((item) => item.url) } : {}),
    },
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
  };
}

export function createPageMetadata(
  pageTitle: string,
  pageDescription: string,
  path: string
): Metadata {
  const fullTitle = `${pageTitle} | ${siteConfig.business.name}`;
  return createMetadata({
    title: fullTitle,
    description: pageDescription,
    path,
  });
}

export function createConfigPageMetadata(
  pageKey: keyof typeof siteConfig.pages
): Metadata {
  const page = siteConfig.pages[pageKey];
  return createPageMetadata(page.seo.title, page.seo.description, page.seo.path);
}
