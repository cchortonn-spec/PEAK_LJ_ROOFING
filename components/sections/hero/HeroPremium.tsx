import { Container } from "@/components/common/Section";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { siteConfig } from "@/lib/config";
import {
  HeroBackdrop,
  HeroCTAs,
  HeroStats,
} from "./hero-shared";
import { HeroHeadline } from "./HeroHeadline";
import { HeroRotatingEyebrow } from "./HeroRotatingEyebrow";

export function HeroPremium() {
  const { hero } = siteConfig.pages.home;
  const { trustBadges } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <HeroBackdrop />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/25 via-transparent to-transparent" aria-hidden="true" />
      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
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
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {hero.subtext}
          </p>
          <HeroCTAs
            primaryLabel={hero.primaryCtaLabel}
            secondaryLabel={hero.secondaryCtaLabel}
            className="mt-8 justify-center"
          />
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          {hero.stats && (
            <div className="card-themed -mb-8 rounded-2xl border-primary-foreground/10 bg-background/95 p-6 text-foreground shadow-lg backdrop-blur sm:p-8">
              <HeroStats stats={hero.stats} light={false} />
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-3 pt-12">
            {trustBadges.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur-sm"
              >
                <DynamicIcon name={badge.icon} className="size-4 text-accent" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
