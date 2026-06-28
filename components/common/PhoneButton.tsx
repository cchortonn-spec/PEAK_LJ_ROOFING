import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "default" | "outline" | "accent";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
  label?: string;
}

export function PhoneButton({
  variant = "accent",
  size = "default",
  className,
  showIcon = true,
  label,
}: PhoneButtonProps) {
  const displayLabel = label ?? siteConfig.business.phoneDisplay;
  const buttonVariant = variant === "accent" ? "default" : variant;

  return (
    <a
      href={`tel:${siteConfig.business.phone}`}
      aria-label={`Call ${siteConfig.business.name}`}
      className={cn(
        buttonVariants({ variant: buttonVariant, size }),
        variant === "accent" && "bg-accent text-accent-foreground hover:bg-accent/90",
        className
      )}
    >
      {showIcon && <Phone className="size-4" aria-hidden="true" />}
      {displayLabel}
    </a>
  );
}
