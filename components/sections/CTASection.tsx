import { siteConfig } from "@/lib/config";
import { layoutVariants } from "@/lib/layout";
import { CtaDark, CtaLight, CtaSplit } from "./cta/CtaVariants";
import type { CTAConfig } from "@/types";

interface CTASectionProps extends Partial<CTAConfig> {
  variant?: "primary" | "accent";
}

export function CTASection(props: CTASectionProps) {
  const defaults = siteConfig.ctas.default as CTAConfig;
  const content: CTAConfig = {
    title: props.title ?? defaults.title,
    description: props.description ?? defaults.description,
    primaryLabel: props.primaryLabel ?? defaults.primaryLabel,
    secondaryLabel: props.secondaryLabel ?? defaults.secondaryLabel,
    subheading: props.subheading ?? defaults.subheading,
    phone: props.phone ?? defaults.phone,
    trustText: props.trustText ?? defaults.trustText,
    image: props.image ?? defaults.image,
  };

  const variant = layoutVariants.cta;

  switch (variant) {
    case "light":
      return <CtaLight {...content} />;
    case "split":
      return <CtaSplit {...content} />;
    case "dark":
    default:
      return <CtaDark {...content} />;
  }
}
