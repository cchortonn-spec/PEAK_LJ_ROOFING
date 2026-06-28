import { Container } from "@/components/common/Section";
import { siteConfig } from "@/lib/config";
import {
  HeroBackdrop,
  HeroCTAs,
  HeroTrustPoints,
} from "./hero-shared";
import { HeroHeadline } from "./HeroHeadline";
import { HeroRotatingEyebrow } from "./HeroRotatingEyebrow";

export function HeroCentered() {
  const { hero } = siteConfig.pages.home;

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <HeroBackdrop />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <HeroRotatingEyebrow
            prefix={hero.eyebrow.prefix}
            rotatingLocations={hero.eyebrow.rotatingLocations}
            rotationIntervalSeconds={hero.eyebrow.rotationIntervalSeconds}
          />
          <HeroHeadline
            prefix={hero.headline.prefix}
            rotatingLocations={hero.headline.rotatingLocations}
            rotationIntervalSeconds={hero.headline.rotationIntervalSeconds}
          />
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
            {hero.subtext}
          </p>
          <HeroCTAs
            primaryLabel={hero.primaryCtaLabel}
            secondaryLabel={hero.secondaryCtaLabel}
            className="mt-8 justify-center"
          />
          <HeroTrustPoints
            limit={hero.trustPointsLimit}
            className="mt-10 justify-center"
          />
        </div>
      </Container>
    </section>
  );
}
