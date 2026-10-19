export interface NightclubGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const nightclubBouncersContent = {
  id: "nightclub-bouncers",
  eyebrow: "Hospitality & Nightlife",
  title: "Nightclub",
  titleHighlight: "Bouncers",
  subtitle:
    "Uniformed door teams and floor security for premium nightlife venues — professional presence, controlled access, and calm crowd management when the music is loudest.",
  tagline: "Controlled entry. Calm floors. Zero chaos.",
  description:
    "ARMOURIXX nightclub bouncers are trained for high-energy hospitality environments — not generic guarding. Our teams arrive in branded uniforms, manage guest lists and ID checks at the door, monitor capacity and VIP zones, and de-escalate situations before they disrupt your venue or reputation.",
  opsCode: "OPS-NL-07",
  statusLabel: "NIGHTLIFE OPS READY",
  features: [
    "Uniformed door & entry screening teams",
    "ID verification, guest list & table access control",
    "VIP booth, green room & artist escort protocols",
    "Crowd flow, capacity & fire-exit compliance",
    "Conflict de-escalation & incident documentation",
    "Coordination with venue management & local authorities",
  ],
  gallery: [
    {
      src: "/images/optimized/Nightclub-Security-at-the-Velvet-Rope-1.jpg",
      alt: "Nightclub interior with professional lighting and controlled venue atmosphere",
      caption: "Venue presence",
    },
    {
      src: "/images/optimized/Nightclub-VIP-Security-Entrance-2.jpg",
      alt: "Nightlife crowd at a premium club with managed entry flow",
      caption: "Peak-hour crowd control",
    },
    {
      src: encodeURI("/images/Why Should Hire Security Services.jpg"),
      alt: "Uniformed security professional at venue entrance during night operations",
      caption: "Uniformed door team",
    },
    {
      src: "/images/optimized/VIP-Executive-Protection.jpg",
      alt: "Nightclub DJ booth and VIP zone with security oversight",
      caption: "VIP & artist zones",
    },
    {
      src: "/images/optimized/ChatGPT-Image-Sep-19-2026-04-11-25-PM-3.jpg",
      alt: "Large nightlife event with layered perimeter and floor security",
      caption: "Event-night deployment",
    },
    {
      src: "/images/optimized/Nightclub-VIP-Security-Entrance-2.jpg",
      alt: "Professional security team in uniform at hospitality venue",
      caption: "Branded uniform standard",
    },
  ] satisfies NightclubGalleryImage[],
  heroImage: {
    src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=1800&h=1100&fit=crop&q=85",
    alt: "Premium nightclub venue with professional security operations at night",
  },
} as const;
