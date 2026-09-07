export interface DifferencePillar {
  id: string;
  number: string;
  code: string;
  title: string;
  desc: string;
  tagline: string;
  storyHook: string;
  chapter: string;
  proof: string;
  image: string;
  imageAlt: string;
  gridClass: string;
  minHeight: string;
  featured?: boolean;
}

export const armourixxDifference: DifferencePillar[] = [
  {
    id: "elite-personnel",
    number: "01",
    code: "ADV-EP-01",
    title: "Elite Personnel",
    desc: "Every operative is background-verified, protocol-trained, and continuously assessed — not simply hired and posted.",
    tagline: "Standards before deployment.",
    storyHook:
      "We don't fill posts with whoever is available. Every guard is vetted, trained, and re-certified against operational benchmarks.",
    chapter: "Pillar I — Human Excellence",
    proof: "Background-verified · Protocol-certified",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&h=900&fit=crop&q=85",
    imageAlt: "Professional security personnel in elite operational readiness",
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[480px]",
    featured: true,
  },
  {
    id: "technology-driven",
    number: "02",
    code: "ADV-TD-02",
    title: "Technology-Driven",
    desc: "Body-worn cameras, GPS checkpoint tracking, and AI-assisted surveillance deployed at scale across Maharashtra.",
    tagline: "Intelligence behind every patrol.",
    storyHook:
      "Among the few firms in Maharashtra running body-cams, GPS checkpoint verification, and live guard monitoring as standard — not premium add-ons.",
    chapter: "Pillar II — Digital Edge",
    proof: "Body-cam · GPS checkpoints · Live monitoring",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=85",
    imageAlt: "Advanced security monitoring and surveillance technology",
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "full-accountability",
    number: "03",
    code: "ADV-AC-03",
    title: "Full Accountability",
    desc: "Every incident is digitally documented with timestamps — evidence-grade records for compliance and review.",
    tagline: "Nothing undocumented. Ever.",
    storyHook:
      "When something happens, you don't get a verbal report. You get timestamped, exportable evidence packages.",
    chapter: "Pillar III — Transparent Ops",
    proof: "Digital logs · Evidence export",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop&q=85",
    imageAlt: "Digital incident documentation and accountability systems",
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "rapid-response-sla",
    number: "04",
    code: "ADV-RR-04",
    title: "Rapid Response SLA",
    desc: "GPS-enabled teams with sub-15-minute response commitments in key corridors — faster than traditional firms.",
    tagline: "Minutes are operational currency.",
    storyHook:
      "Pre-positioned units, live dispatch, and SLAs measured in minutes — not vague promises of 'quick arrival.'",
    chapter: "Pillar IV — Speed & Precision",
    proof: "Sub-15 min SLA · GPS-tracked units",
    image:
      "https://images.unsplash.com/photo-1521737714892-dcf1894da8d2?w=1200&h=800&fit=crop&q=85",
    imageAlt: "Rapid response security team mobilizing for deployment",
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "cross-industry",
    number: "05",
    code: "ADV-CI-05",
    title: "Cross-Industry Expertise",
    desc: "From healthcare campuses to critical infrastructure — protocols adapt to every environment without quality compromise.",
    tagline: "One standard. Twelve sectors.",
    storyHook:
      "Hospital protocols differ from data-center protocols. We adapt the playbook — never the standard of execution.",
    chapter: "Pillar V — Sector Mastery",
    proof: "12 industry verticals",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=85",
    imageAlt: "Security across corporate and industrial environments",
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "client-first",
    number: "06",
    code: "ADV-CF-06",
    title: "Client-First Approach",
    desc: "Every security plan is bespoke — we begin with your risk profile, not a recycled template.",
    tagline: "Your threat model. Our blueprint.",
    storyHook:
      "We don't sell packages. We assess, design, deploy, and report around how your organization actually operates.",
    chapter: "Pillar VI — Partnership",
    proof: "Bespoke risk assessments",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&q=85",
    imageAlt: "Client security strategy consultation meeting",
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
];
