import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/common/Shared";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  const { homepageLimit } = siteConfig.sections.services;

  return (
    <>
      <JsonLd data={[...serviceSchema(), faqSchema()]} />
      <Hero />
      <TrustBar />
      <Services limit={homepageLimit} showViewAll />
      <AboutPreview />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <Process />
      <FAQ />
      <CTASection />
    </>
  );
}
