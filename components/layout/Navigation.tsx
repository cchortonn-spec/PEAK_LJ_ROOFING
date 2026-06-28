"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PhoneButton } from "@/components/common/PhoneButton";
import { SiteLogo } from "@/components/common/SiteLogo";
import { siteConfig } from "@/lib/config";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden flex-1 items-center justify-center gap-8 md:flex" aria-label="Main navigation">
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="ml-auto shrink-0 md:hidden"
          render={
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          }
        />
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle className="sr-only">{siteConfig.business.name}</SheetTitle>
            <SiteLogo variant="mobile-menu" />
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 border-t pt-4">
              <PhoneButton className="w-full" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
