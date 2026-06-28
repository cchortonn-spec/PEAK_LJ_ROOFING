import { PhoneButton } from "@/components/common/PhoneButton";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Section, Container } from "@/components/common/Section";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import type { CTAConfig } from "@/types";

interface CTAContentProps extends CTAConfig {
  tone?: "dark" | "light";
}

function CTAContent({
  title,
  description,
  subheading,
  primaryLabel,
  secondaryLabel,
  trustText,
  phone,
  tone = "dark",
}: CTAContentProps) {
  const isDark = tone === "dark";

  return (
    <>
      {subheading && (
        <p
          className={cn(
            "eyebrow mb-3",
            isDark ? "text-accent" : "text-accent"
          )}
        >
          {subheading}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl tracking-tight sm:text-4xl",
          !isDark && "text-foreground"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mx-auto mt-4 max-w-2xl text-lg leading-relaxed",
          isDark ? "opacity-80" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
      {phone && (
        <p className={cn("mt-4 text-xl font-semibold", isDark ? "text-accent" : "text-accent")}>
          <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
        </p>
      )}
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <WhatsAppButton size="lg" label={primaryLabel} />
        <PhoneButton
          size="lg"
          label={secondaryLabel}
          variant="outline"
          className={
            isDark
              ? "border-primary-foreground/40 bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground/15 hover:text-primary-foreground"
              : undefined
          }
        />
      </div>
      {trustText && (
        <p
          className={cn(
            "mt-6 text-sm",
            isDark ? "text-primary-foreground/60" : "text-muted-foreground"
          )}
        >
          {trustText}
        </p>
      )}
    </>
  );
}

export function CtaDark(props: CTAContentProps) {
  return (
    <Section variant="primary">
      <Container size="narrow">
        <div className="text-center">
          <CTAContent {...props} tone="dark" />
        </div>
      </Container>
    </Section>
  );
}

export function CtaLight(props: CTAContentProps) {
  return (
    <Section variant="muted">
      <Container size="narrow">
        <div className="card-themed bg-background p-8 text-center sm:p-12">
          <CTAContent {...props} tone="light" />
        </div>
      </Container>
    </Section>
  );
}

export function CtaSplit(props: CTAContentProps) {
  const { business } = siteConfig;

  return (
    <Section variant="primary">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <CTAContent {...props} tone="dark" />
          </div>
          <div className="card-themed rounded-2xl border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur">
            <dl className="space-y-6">
              <div>
                <dt className="text-sm text-primary-foreground/60">Call us</dt>
                <dd className="mt-1 text-2xl font-semibold text-accent">
                  {props.primaryLabel}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-primary-foreground/60">Email</dt>
                <dd className="mt-1 text-lg">{business.email}</dd>
              </div>
              <div>
                <dt className="text-sm text-primary-foreground/60">Areas covered</dt>
                <dd className="mt-1 text-sm text-primary-foreground/80">
                  {business.areasCovered.slice(0, 4).join(", ")} & more
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
