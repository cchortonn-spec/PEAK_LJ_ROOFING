import { Container } from "@/components/common/Section";
import { siteConfig } from "@/lib/config";
import {
  HeroBackdrop,
  HeroCTAs,
  HeroTrustPoints,
} from "./hero-shared";
import { HeroHeadline } from "./HeroHeadline";
import { HeroRotatingEyebrow } from "./HeroRotatingEyebrow";

export function HeroBackground() {
  const { hero } = siteConfig.pages.home;

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <HeroBackdrop overlay="medium" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--accent) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--accent) 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-24 sm:py-32 lg:py-40">
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
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
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
