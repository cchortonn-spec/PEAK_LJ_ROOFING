"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";

export function StickyMobileCTA() {
  const { stickyBar } = siteConfig.contact;
  const { phone, phoneDisplay } = siteConfig.business;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm md:hidden"
      role="complementary"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href={`tel:${phone}`}
          className="flex min-h-11 items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label={`Call ${phoneDisplay}`}
        >
          <Phone className="size-4" aria-hidden="true" />
          {stickyBar.callLabel}
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
          aria-label={`WhatsApp ${siteConfig.business.name}`}
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          {stickyBar.whatsappLabel}
        </a>
      </div>
    </div>
  );
}
