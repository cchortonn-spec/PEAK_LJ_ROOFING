import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCardSimple({ service, className }: ServiceCardProps) {
  return (
    <Card className={cn("card-themed group h-full transition-all duration-300 hover:-translate-y-1", className)}>
      <CardHeader>
        <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-accent/10">
          <DynamicIcon name={service.icon} className="size-6 text-accent" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function ServiceCardFeature({ service, className }: ServiceCardProps) {
  return (
    <Card className={cn("card-themed group h-full transition-all duration-300 hover:-translate-y-1", className)}>
      <CardHeader className="items-center text-center">
        <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-accent/10">
          <DynamicIcon name={service.icon} className="size-8 text-accent" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function ServiceCardHorizontal({ service, className }: ServiceCardProps) {
  return (
    <Card className={cn("card-themed group h-full transition-all duration-300 hover:-translate-y-1", className)}>
      <CardContent className="flex gap-4 p-6">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
          <DynamicIcon name={service.icon} className="size-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function renderServiceCard(
  service: Service,
  cardStyle: "simple" | "feature" | "horizontal"
) {
  switch (cardStyle) {
    case "feature":
      return <ServiceCardFeature service={service} />;
    case "horizontal":
      return <ServiceCardHorizontal service={service} />;
    case "simple":
    default:
      return <ServiceCardSimple service={service} />;
  }
}
