import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/common/PageHero";
import { Section, Container } from "@/components/common/Section";
import { JsonLd } from "@/components/common/Shared";
import { createConfigPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = createConfigPageMetadata("contact");

export default function ContactPage() {
  const { business, contact: contactConfig, pages } = siteConfig;
  const { contact: page } = pages;
  const { openingHours } = contactConfig;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: ROUTES.home },
          { name: "Contact", url: ROUTES.contact },
        ])}
      />

      <PageHero hero={page.hero} />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold">{page.infoTitle}</h2>
              <p className="mt-2 text-muted-foreground">{page.infoDescription}</p>

              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href={`tel:${business.phone}`}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Phone className="size-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium transition-colors group-hover:text-accent">
                        Phone
                      </p>
                      <p className="text-muted-foreground">{business.phoneDisplay}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${business.email}`}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Mail className="size-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium transition-colors group-hover:text-accent">
                        Email
                      </p>
                      <p className="text-muted-foreground">{business.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <MapPin className="size-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <address className="not-italic text-muted-foreground">
                        {business.address.street}
                        <br />
                        {business.address.city}, {business.address.postcode}
                      </address>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Clock className="size-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-muted-foreground">
                        {openingHours.weekday}
                        <br />
                        {openingHours.emergency}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="font-semibold">{page.areasTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {business.areasCovered.join(" · ")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
