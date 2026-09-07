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
      src: "https://images.unsplash.com/photo-1571266028243-e473993b2ccb?w=1600&h=1000&fit=crop&q=85",
      alt: "Nightclub interior with professional lighting and controlled venue atmosphere",
      caption: "Venue presence",
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&h=1000&fit=crop&q=85",
      alt: "Nightlife crowd at a premium club with managed entry flow",
      caption: "Peak-hour crowd control",
    },
    {
      src: "https://images.unsplash.com/photo-1589829545856-d10d45c6e953?w=1600&h=1000&fit=crop&q=85",
      alt: "Uniformed security professional at venue entrance during night operations",
      caption: "Uniformed door team",
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&h=1000&fit=crop&q=85",
      alt: "Nightclub DJ booth and VIP zone with security oversight",
      caption: "VIP & artist zones",
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=1000&fit=crop&q=85",
      alt: "Large nightlife event with layered perimeter and floor security",
      caption: "Event-night deployment",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=1000&fit=crop&q=85",
      alt: "Professional security team in uniform at hospitality venue",
      caption: "Branded uniform standard",
    },
  ] satisfies NightclubGalleryImage[],
  heroImage: {
    src: "https://images.unsplash.com/photo-1566417713940-7f41e4adf419?w=1800&h=1100&fit=crop&q=85",
    alt: "Premium nightclub venue with professional security operations at night",
  },
} as const;
