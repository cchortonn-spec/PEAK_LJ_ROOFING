import { ServicesLayoutWrapper } from "./services/ServicesLayouts";
import { siteConfig } from "@/lib/config";

interface ServicesProps {
  limit?: number;
  showViewAll?: boolean;
}

export function Services({ limit, showViewAll = true }: ServicesProps) {
  return (
    <ServicesLayoutWrapper
      services={siteConfig.services}
      limit={limit}
      showViewAll={showViewAll}
    />
  );
}
