import { layoutVariants } from "@/lib/layout";
import {
  WhyChooseUsCards,
  WhyChooseUsIconList,
} from "./why/WhyChooseUsVariants";

export function WhyChooseUs() {
  const variant = layoutVariants.whyChooseUs;

  switch (variant) {
    case "icon-list":
      return <WhyChooseUsIconList />;
    case "cards":
    default:
      return <WhyChooseUsCards />;
  }
}
