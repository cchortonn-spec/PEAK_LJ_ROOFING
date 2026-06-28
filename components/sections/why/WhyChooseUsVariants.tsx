import { DynamicIcon } from "@/components/common/DynamicIcon";
import { FadeIn } from "@/components/common/FadeIn";
import { Section, SectionHeader, Container } from "@/components/common/Section";
import { siteConfig } from "@/lib/config";

export function WhyChooseUsCards() {
  const section = siteConfig.sections.whyChooseUs;

  return (
    <Section id="why-choose-us">
      <Container>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whyChooseUs.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="card-themed h-full p-6 text-center hover:-translate-y-0.5">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-accent/10">
                  <DynamicIcon name={item.icon} className="size-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function WhyChooseUsIconList() {
  const section = siteConfig.sections.whyChooseUs;

  return (
    <Section id="why-choose-us" variant="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            centered={false}
            className="mb-0"
          />
          <ul className="space-y-6">
            {siteConfig.whyChooseUs.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.08}>
                <li className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <DynamicIcon name={item.icon} className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
