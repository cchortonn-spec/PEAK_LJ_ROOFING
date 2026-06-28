import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { PhoneButton } from "@/components/common/PhoneButton";
import { Section, SectionHeader, Container } from "@/components/common/Section";
import { ROUTES } from "@/lib/routes";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const section = siteConfig.sections.faq;

  return (
    <Section variant="muted" id="faq">
      <Container size="narrow">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <Accordion className="w-full">
          {siteConfig.faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}

export function FAQWithCTA() {
  const section = siteConfig.sections.faq;
  const { ctas, business } = siteConfig;

  return (
    <Section variant="muted" id="faq">
      <Container>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Accordion className="w-full">
              {siteConfig.faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="lg:col-span-2">
            <div className="card-themed sticky top-24 bg-background p-6 sm:p-8">
              <h3 className="text-xl font-semibold">{ctas.default.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Still have questions? Call {business.phoneDisplay} or send us a message.
              </p>
              <div className="mt-6 space-y-3">
                <PhoneButton className="w-full" label={business.phoneDisplay} />
                <Link
                  href={ROUTES.contact}
                  className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-[var(--btn-radius)]")}
                >
                  {ctas.default.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
