import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/common/PageHero";
import { JsonLd } from "@/components/common/Shared";
import { createConfigPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = createConfigPageMetadata("services");

export default function ServicesPage() {
  const { services: page } = siteConfig.pages;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: ROUTES.home },
            { name: "Services", url: ROUTES.services },
          ]),
          ...serviceSchema(),
        ]}
      />

      <PageHero hero={page.hero} />
      <Services showViewAll={false} />
      <CTASection
        title={page.cta.title}
        description={page.cta.description}
        primaryLabel={page.cta.primaryLabel}
        secondaryLabel={page.cta.secondaryLabel}
      />
    </>
  );
}
