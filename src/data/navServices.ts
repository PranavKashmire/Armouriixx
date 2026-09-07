import {
  Building2,
  BriefcaseBusiness,
  Cctv,
  Crown,
  Music2,
  Siren,
  Ticket,
  type LucideIcon,
} from "lucide-react";

export interface NavServiceItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const megaMenuServices: NavServiceItem[] = [
  {
    icon: Crown,
    label: "VIP & Executive Protection",
    href: "/services#vip-protection",
  },
  {
    icon: Building2,
    label: "Manned Guarding",
    href: "/services#manned-guarding",
  },
  {
    icon: Ticket,
    label: "Event Security",
    href: "/services#event-security",
  },
  {
    icon: Cctv,
    label: "Surveillance & Control Room",
    href: "/services#surveillance-control-room",
  },
  {
    icon: Siren,
    label: "Rapid Response",
    href: "/services#rapid-response",
  },
  {
    icon: BriefcaseBusiness,
    label: "Corporate Security Programs",
    href: "/services#corporate-security-programs",
  },
  {
    icon: Music2,
    label: "Nightclub Bouncers",
    href: "/services#nightclub-bouncers",
  },
];
