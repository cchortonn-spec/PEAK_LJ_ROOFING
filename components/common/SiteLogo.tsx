import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  /** Header: compact. Footer: slightly larger on dark background */
  variant?: "header" | "footer" | "mobile-menu";
}

export function SiteLogo({ className, variant = "header" }: SiteLogoProps) {
  const { logoPath } = siteConfig.brand;
  const { name } = siteConfig.business;

  const sizeClasses = {
    header:
      "h-14 w-auto max-w-[min(58vw,220px)] sm:h-16 sm:max-w-[280px] md:h-[4.5rem] md:max-w-[320px]",
    footer: "h-14 w-auto max-w-[240px] sm:h-16 sm:max-w-[280px]",
    "mobile-menu": "h-12 w-auto max-w-[220px]",
  };

  const sizeHints = {
    header: "(max-width: 640px) 220px, 320px",
    footer: "(max-width: 640px) 240px, 280px",
    "mobile-menu": "220px",
  };

  return (
    <Image
      src={logoPath}
      alt={`${name} — Roofing Specialists`}
      width={904}
      height={540}
      sizes={sizeHints[variant]}
      className={cn("object-contain object-left", sizeClasses[variant], className)}
      priority={variant === "header"}
    />
  );
}
