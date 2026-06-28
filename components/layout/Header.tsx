"use client";

import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { PhoneButton } from "@/components/common/PhoneButton";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SiteLogo } from "@/components/common/SiteLogo";
import { useScrolled } from "@/hooks/useScrolled";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-background"
      )}
    >
      <div className="container-width mx-auto flex h-[4.75rem] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:gap-8 lg:px-8">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center py-1"
          aria-label={`${siteConfig.business.name} - Home`}
        >
          <SiteLogo variant="header" />
        </Link>

        <Navigation />

        <div className="relative z-10 hidden shrink-0 items-center gap-2 md:flex">
          <WhatsAppButton size="sm" label="WhatsApp" />
          <PhoneButton size="sm" variant="outline" />
        </div>
      </div>
    </header>
  );
}
