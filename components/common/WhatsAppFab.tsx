"use client";

import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { getWhatsAppUrl } from "@/components/common/WhatsAppButton";
import { siteConfig } from "@/lib/config";

export function WhatsAppFab() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${siteConfig.business.name}`}
      className="whatsapp-fab fixed bottom-20 right-5 z-[60] flex size-14 items-center justify-center rounded-full md:bottom-6 md:right-6"
      style={{ backgroundColor: "#25D366", color: "#ffffff" }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
