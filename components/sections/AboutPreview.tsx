import { layoutVariants } from "@/lib/layout";
import {
  AboutImageRight,
  AboutImageLeft,
  AboutStats,
} from "./about/AboutVariants";

export function AboutPreview() {
  const variant = layoutVariants.about;

  switch (variant) {
    case "image-left":
      return <AboutImageLeft />;
    case "stats":
      return <AboutStats />;
    case "image-right":
    default:
      return <AboutImageRight />;
  }
}
