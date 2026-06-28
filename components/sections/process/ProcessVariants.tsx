import { FadeIn } from "@/components/common/FadeIn";
import { Section, SectionHeader, Container } from "@/components/common/Section";
import { siteConfig } from "@/lib/config";

export function ProcessNumbered() {
  const section = siteConfig.sections.process;

  return (
    <Section id="process">
      <Container>
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.process.map((step, index) => (
            <FadeIn key={step.id} delay={index * 0.1}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ProcessTimeline() {
  const section = siteConfig.sections.process;
  const steps = siteConfig.process;

  return (
    <Section id="process" variant="muted">
      <Container size="narrow">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <ol className="space-y-0">
          {steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 0.1}>
              <li className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-5">
                <div className="flex flex-col items-center">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {step.step}
                  </span>
                  {index < steps.length - 1 && (
                    <span
                      className="my-2 w-0.5 min-h-8 flex-1 bg-accent/30"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div
                  className={
                    index < steps.length - 1 ? "pb-8 sm:pb-10" : "pb-0"
                  }
                >
                  <h3 className="text-base font-semibold leading-snug sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
