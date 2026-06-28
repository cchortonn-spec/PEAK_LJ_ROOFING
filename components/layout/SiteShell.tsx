"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/common/StickyMobileCTA";
import { WhatsAppFab } from "@/components/common/WhatsAppFab";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDesignPreview = pathname?.startsWith("/design-preview");

  if (isDesignPreview) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppFab />
    </>
  );
}
