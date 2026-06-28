import { layoutVariants } from "@/lib/layout";
import { FAQAccordion, FAQWithCTA } from "./faq/FAQVariants";

export function FAQ() {
  const variant = layoutVariants.faq;

  switch (variant) {
    case "cta":
      return <FAQWithCTA />;
    case "accordion":
    default:
      return <FAQAccordion />;
  }
}
