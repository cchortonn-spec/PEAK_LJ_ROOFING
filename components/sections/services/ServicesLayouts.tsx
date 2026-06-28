import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/common/FadeIn";
import { Section, SectionHeader, Container } from "@/components/common/Section";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";
import { layoutVariants } from "@/lib/layout";
import { cn } from "@/lib/utils";
import { ServiceCardFeature, renderServiceCard } from "./ServiceCards";
import type { Service } from "@/types";

interface ServicesLayoutProps {
  services: Service[];
  showViewAll?: boolean;
  cardStyle: "simple" | "feature" | "horizontal";
}

function ViewAllLink({ show }: { show?: boolean }) {
  if (!show) return null;
  return (
    <div className="mt-10 text-center">
      <Link
        href={ROUTES.services}
        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-[var(--btn-radius)]")}
      >
        {siteConfig.sections.services.viewAllLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function ServicesGrid3({
  services,
  cardStyle,
}: Omit<ServicesLayoutProps, "showViewAll">) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <FadeIn key={service.id} delay={index * 0.08}>
          {renderServiceCard(service, cardStyle)}
        </FadeIn>
      ))}
    </div>
  );
}

export function ServicesGrid4({
  services,
  cardStyle,
}: Omit<ServicesLayoutProps, "showViewAll">) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <FadeIn key={service.id} delay={index * 0.06}>
          {renderServiceCard(service, cardStyle)}
        </FadeIn>
      ))}
    </div>
  );
}

export function ServicesFeatured({
  services,
  cardStyle,
}: ServicesLayoutProps) {
  const [featured, ...rest] = services;

  if (!featured) return null;

  return (
    <div className="space-y-6">
      <FadeIn>
        <div className="card-themed overflow-hidden rounded-2xl border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
          <ServiceCardFeature service={featured} className="border-0 shadow-none" />
        </div>
      </FadeIn>
      {rest.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.08}>
              {renderServiceCard(service, cardStyle === "feature" ? "simple" : cardStyle)}
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}

export function ServicesLayoutWrapper({
  services,
  showViewAll,
  limit,
}: {
  services: Service[];
  showViewAll?: boolean;
  limit?: number;
}) {
  const { sections } = siteConfig;
  const list = limit ? services.slice(0, limit) : services;
  const { layout: layoutType, cardStyle } = {
    layout: layoutVariants.servicesLayout,
    cardStyle: layoutVariants.servicesCardStyle,
  };

  const layoutProps = {
    services: list,
    showViewAll,
    cardStyle,
  };

  return (
    <Section id="services">
      <Container>
        <SectionHeader
          eyebrow={sections.services.eyebrow}
          title={sections.services.title}
          description={sections.services.description}
        />
        {layoutType === "grid-4" && <ServicesGrid4 {...layoutProps} />}
        {layoutType === "featured" && <ServicesFeatured {...layoutProps} />}
        {(layoutType === "grid-3" || !layoutType) && (
          <ServicesGrid3 {...layoutProps} />
        )}
        <ViewAllLink show={showViewAll && !!limit} />
      </Container>
    </Section>
  );
}
