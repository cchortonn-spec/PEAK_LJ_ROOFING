import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function getWhatsAppUrl(message?: string) {
  const { whatsappUrl, whatsappMessage } = siteConfig.business;
  const text = encodeURIComponent(message ?? whatsappMessage);
  return `${whatsappUrl}?text=${text}`;
}

interface WhatsAppButtonProps {
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
  label?: string;
  variant?: "green" | "outline";
}

export function WhatsAppButton({
  size = "default",
  className,
  showIcon = true,
  label = "WhatsApp Us",
  variant = "green",
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${siteConfig.business.name}`}
      className={cn(
        buttonVariants({ size }),
        "rounded-[var(--btn-radius)]",
        variant === "green"
          ? "bg-[#25D366] text-white hover:bg-[#20bd5a]"
          : "border-[#25D366] bg-transparent text-[#25D366] hover:bg-[#25D366]/10",
        className
      )}
    >
      {showIcon && <MessageCircle className="size-4" aria-hidden="true" />}
      {label}
    </a>
  );
}
