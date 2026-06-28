import {
  AlertTriangle,
  Flame,
  Bath,
  Thermometer,
  Droplets,
  Wrench,
  Shield,
  BadgeCheck,
  Star,
  PoundSterling,
  Award,
  Clock,
  Receipt,
  ShieldCheck,
  Home,
  Layers,
  Hammer,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Flame,
  Bath,
  Thermometer,
  Droplets,
  Wrench,
  Shield,
  BadgeCheck,
  Star,
  PoundSterling,
  Award,
  Clock,
  Receipt,
  ShieldCheck,
  Home,
  Layers,
  Hammer,
  ClipboardCheck,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
