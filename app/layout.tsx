import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/common/Shared";
import { createMetadata } from "@/lib/metadata";
import { localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const { home } = siteConfig.pages;

export const metadata: Metadata = createMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: home.seo.path,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      data-theme={siteConfig.theme.variant}
      className={`${inter.variable} h-full`}
    >
      <head>
        <JsonLd data={localBusinessSchema()} />
        <link rel="icon" href={siteConfig.brand.faviconPath} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow-md"
        >
          Skip to main content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
