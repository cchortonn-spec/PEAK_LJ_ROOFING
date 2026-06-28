import { layoutVariants } from "@/lib/layout";
import { HeroCentered } from "./hero/HeroCentered";
import { HeroSplit } from "./hero/HeroSplit";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroPremium } from "./hero/HeroPremium";

export function Hero() {
  const variant = layoutVariants.hero;

  switch (variant) {
    case "split":
      return <HeroSplit />;
    case "background":
      return <HeroBackground />;
    case "premium":
      return <HeroPremium />;
    case "centered":
    default:
      return <HeroCentered />;
  }
}
