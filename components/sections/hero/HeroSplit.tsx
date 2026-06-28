import { Container } from "@/components/common/Section";
import { FadeIn } from "@/components/common/FadeIn";
import { siteConfig } from "@/lib/config";
import {
  HeroBackdrop,
  HeroCTAs,
  HeroImagePanel,
  HeroTrustPoints,
} from "./hero-shared";
import { HeroHeadline } from "./HeroHeadline";
import { HeroRotatingEyebrow } from "./HeroRotatingEyebrow";

export function HeroSplit() {
  const { hero } = siteConfig.pages.home;

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <HeroBackdrop />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" aria-hidden="true" />
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <HeroRotatingEyebrow
              prefix={hero.eyebrow.prefix}
              rotatingLocations={hero.eyebrow.rotatingLocations}
              rotationIntervalSeconds={hero.eyebrow.rotationIntervalSeconds}
              className="text-left"
            />
            <HeroHeadline
              prefix={hero.headline.prefix}
              rotatingLocations={hero.headline.rotatingLocations}
              rotationIntervalSeconds={hero.headline.rotationIntervalSeconds}
              className="text-left"
            />
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              {hero.subtext}
            </p>
            <HeroCTAs
              primaryLabel={hero.primaryCtaLabel}
              secondaryLabel={hero.secondaryCtaLabel}
              className="mt-8 justify-start"
            />
            <HeroTrustPoints
              limit={hero.trustPointsLimit}
              className="mt-8"
            />
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <HeroImagePanel />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
