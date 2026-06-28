"use client";

import Link from "next/link";
import { ClipboardList, Menu } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/config";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const mobileMenuCtaClass = cn(
    buttonVariants({ size: "lg" }),
    "inline-flex w-full justify-center px-5"
  );

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
        <SheetContent
          side="right"
          overlayClassName="bg-black/65 backdrop-blur-md"
          className="mobile-menu-glass mobile-menu-panel w-[min(88vw,320px)] gap-0 border-0 bg-transparent p-0 text-white shadow-none sm:max-w-[320px]"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>{siteConfig.business.name}</SheetTitle>
          </SheetHeader>

          <nav
            className="flex h-full flex-col px-10 pt-20 pb-10"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="mobile-menu-link font-bold text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 inline-flex flex-col gap-3">
              <Link
                href={ROUTES.contact}
                onClick={() => setOpen(false)}
                className={cn(
                  mobileMenuCtaClass,
                  "bg-accent text-accent-foreground hover:bg-accent/90"
                )}
              >
                <ClipboardList className="size-4" aria-hidden="true" />
                Get a free quote
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label={`WhatsApp ${siteConfig.business.name}`}
                className={cn(mobileMenuCtaClass, "mobile-menu-whatsapp")}
              >
                <WhatsAppIcon className="size-4" />
                Message us on WhatsApp
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
