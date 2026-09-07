import {
  Building2,
  Crown,
  Factory,
  Gem,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Plane,
  Server,
  Sparkles,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export interface ServiceIndustry {
  icon: LucideIcon;
  label: string;
  id: string;
  clients: string;
}

export const serviceIndustries: ServiceIndustry[] = [
  {
    icon: Building2,
    label: "Corporate & Commercial",
    id: "corporate",
    clients:
      "Corporate offices, business parks, IT companies, financial institutions, banks & NBFCs, MNCs",
  },
  {
    icon: Crown,
    label: "VIP & Executive Protection",
    id: "vip",
    clients:
      "CEOs, HNWIs, celebrities, politicians, diplomats, international delegations, royal families/VVIPs",
  },
  {
    icon: Hotel,
    label: "Hospitality & Luxury",
    id: "hospitality",
    clients:
      "Five-star hotels, luxury resorts, premium clubs, casinos, private villas, serviced apartments",
  },
  {
    icon: Sparkles,
    label: "Events & Entertainment",
    id: "events",
    clients:
      "Corporate events, concerts/festivals, award shows, fashion shows, weddings, product launches, exhibitions, sports events",
  },
  {
    icon: Warehouse,
    label: "Real Estate",
    id: "real-estate",
    clients:
      "Residential communities, luxury apartments, commercial complexes, malls, business towers, gated communities",
  },
  {
    icon: Factory,
    label: "Industrial & Manufacturing",
    id: "industrial",
    clients:
      "Plants, warehouses, logistics parks, distribution centers, oil & gas, construction sites",
  },
  {
    icon: HeartPulse,
    label: "Healthcare",
    id: "healthcare",
    clients:
      "Hospitals, medical colleges, research centers, pharma companies, diagnostic centers",
  },
  {
    icon: GraduationCap,
    label: "Education",
    id: "education",
    clients:
      "Universities, international schools, colleges, campuses, student housing",
  },
  {
    icon: Landmark,
    label: "Government & Public Sector",
    id: "government",
    clients:
      "Government offices, public infrastructure, embassies/consulates, public events, municipal facilities",
  },
  {
    icon: Gem,
    label: "Retail & Luxury Brands",
    id: "retail",
    clients:
      "Luxury retail, malls, jewelry showrooms, boutiques, auto dealerships",
  },
  {
    icon: Plane,
    label: "Transportation & Logistics",
    id: "transport",
    clients:
      "Airports, seaports, logistics companies, fleet ops, cargo terminals, VIP transportation",
  },
  {
    icon: Server,
    label: "Technology & Critical Infrastructure",
    id: "tech",
    clients:
      "Data centers, telecom, power plants, renewable energy, smart cities, critical infra",
  },
];
