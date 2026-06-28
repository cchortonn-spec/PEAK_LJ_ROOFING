import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import { PhoneButton } from "@/components/common/PhoneButton";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import type { HeroImage } from "@/types";

export function HeroBackdrop({ overlay = "dark" }: { overlay?: "dark" | "medium" }) {
  const { hero } = siteConfig.pages.home;
  const image = hero.image;

  if (!image) return null;

  const overlayClass =
    overlay === "dark" ? "bg-primary/75" : "bg-primary/55";

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {image.isPlaceholder ? (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--primary)_0%,color-mix(in_oklch,var(--primary),var(--accent)_25%)_50%,var(--primary)_100%)]" />
      ) : (
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className={cn("absolute inset-0", overlayClass)} />
    </div>
  );
}

export function HeroImagePanel({ className }: { className?: string }) {
  const { business, sections, pages } = siteConfig;
  const { aboutPreview } = sections;
  const image = pages.home.hero.image;

  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary/10",
        className
      )}
    >
      {image && !image.isPlaceholder ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="size-full object-cover"
          priority
        />
      ) : image?.isPlaceholder ? (
        <HeroImagePlaceholder image={image} />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <p className="text-5xl font-bold text-accent">{business.yearsTrading}+</p>
          <p className="mt-2 text-lg font-medium text-foreground/80">
            {aboutPreview.statsLabel}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {business.industry} · {business.areasCovered.length} areas covered
          </p>
        </div>
      )}
    </div>
  );
}

function HeroImagePlaceholder({ image }: { image: HeroImage }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(135deg,var(--primary)_0%,color-mix(in_oklch,var(--primary),var(--accent)_30%)_100%)] p-8 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
        Hero Image
      </p>
      <p className="mt-2 max-w-xs text-xs text-primary-foreground/50">
        Add your photo to {image.src}
      </p>
    </div>
  );
}

export function HeroEyebrow({
  children,
  className,
  light = true,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "eyebrow mb-4",
        light ? "text-accent" : "text-accent",
        className
      )}
    >
      {children}
    </p>
  );
}

export function HeroCTAs({
  primaryLabel,
  secondaryLabel,
  light = true,
  className,
}: {
  primaryLabel: string;
  secondaryLabel: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 sm:flex-row",
        className
      )}
    >
      <WhatsAppButton size="lg" label={primaryLabel} />
      <PhoneButton
        size="lg"
        label={secondaryLabel}
        variant="outline"
        className={
          light
            ? "border-primary-foreground/40 bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground/15 hover:text-primary-foreground"
            : undefined
        }
      />
    </div>
  );
}

export function HeroTrustPoints({
  limit,
  className,
  light = true,
}: {
  limit: number;
  className?: string;
  light?: boolean;
}) {
  const { guarantees } = siteConfig.business;

  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-2",
        className
      )}
    >
      {guarantees.slice(0, limit).map((guarantee) => (
        <li
          key={guarantee}
          className={cn(
            "flex items-center gap-2 text-sm",
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          <CheckCircle className="size-4 shrink-0 text-accent" aria-hidden="true" />
          {guarantee}
        </li>
      ))}
    </ul>
  );
}

export function HeroReviewBadge({
  rating,
  count,
  label,
  className,
}: {
  rating: number;
  count: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur-sm",
        className
      )}
    >
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="text-primary-foreground/90">
        {label} · {count}+ reviews
      </span>
    </div>
  );
}

export function HeroStats({
  stats,
  className,
  light = true,
}: {
  stats: { value: string; label: string }[];
  className?: string;
  light?: boolean;
}) {
  return (
    <dl className={cn("grid grid-cols-3 gap-4", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <dt
            className={cn(
              "text-2xl font-bold sm:text-3xl",
              light ? "text-accent" : "text-accent"
            )}
          >
            {stat.value}
          </dt>
          <dd
            className={cn(
              "mt-1 text-xs sm:text-sm",
              light ? "text-primary-foreground/70" : "text-muted-foreground"
            )}
          >
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
