/**
 * Central brand & business configuration.
 * Update contact details here — they flow to Footer, Contact, and floating CTAs.
 */
export const siteConfig = {
  name: "ARMOURIXX Security",
  legalName: "ARMOURIXX Security",
  tagline: "Beyond Protection. We Command Security.",
  motto: "Discipline · Precision · Protection",
  founder: {
    name: "Akshay Sanjay Bhote",
    title: "Founder & Managing Director",
  },
  coFounder: {
    name: "Piyush Pawar",
    title: "Co-Founder & Director",
  },
  founded: 2026,
  region: "Maharashtra, India",
  coverage: "India & UAE · PAN Maharashtra · Expanding PAN India",
  operatingRegions: ["India", "UAE (Dubai)"],

  contact: {
    phone: "+91 98200 12345",
    phoneTel: "+919820012345",
    whatsapp: "919820012345",
    email: "contact@armourixxsecurity.com",
    address: "Pune, Maharashtra, India",
    addressLine2: "Operations across Maharashtra",
    hours: "24/7 — including emergencies",
  },

  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },

  brandStory: {
    origin:
      "Founded in 2026, ARMOURIXX was built on a simple conviction: Maharashtra deserves security that operates like a command unit — trained, documented, and accountable — not a staffing agency posting guards at gates.",
    promise:
      "Every deployment is intelligence-led. Every patrol is tracked. Every incident is documented. That is how we protect people, assets, and reputations without compromise.",
    differentiator:
      "India's first security firm to make body-worn cameras part of standard operating procedure — combined with GPS checkpoint monitoring and digital reporting on every deployment.",
  },

  guardTechUSP: {
    eyebrow: "Core USP",
    title: "Highly Trained Guards.",
    titleHighlight: "Tech-Equipped. Always Monitored.",
    description:
      "ARMOURIXX doesn't post untrained personnel and hope for the best. We pioneered India's first body-cam standard operating procedure — every guard is rigorously trained, issued high-tech field equipment for constant surveillance, and monitored through GPS checkpoints placed across your site so command always knows where they are, what they're doing, and that standards are being met.",
    pillars: [
      {
        title: "Elite-Trained Personnel",
        desc: "Background-verified guards trained to ARMOURIXX protocols — not simply hired and posted at your gate.",
        tag: "HUMAN STANDARD",
      },
      {
        title: "Body-Cam & Field Tech",
        desc: "Body-worn cameras, comms, and digital tools on every shift — constant visual surveillance and evidence-grade accountability.",
        tag: "LIVE RECORDING",
      },
      {
        title: "GPS Checkpoint Network",
        desc: "Checkpoints mapped across your site. Every patrol scan is GPS-verified so guard movements are tracked in real time — never assumed.",
        tag: "SITE MONITORING",
      },
    ],
  },

  engagementSteps: [
    {
      step: "01",
      title: "Threat Assessment",
      desc: "We map your site, routes, access points, and risk profile before recommending any deployment.",
      tag: "INTEL PHASE",
    },
    {
      step: "02",
      title: "Operational Blueprint",
      desc: "A tailored plan — guard counts, tech stack, patrol routes, escalation matrix, and reporting cadence.",
      tag: "OPS DESIGN",
    },
    {
      step: "03",
      title: "Elite Deployment",
      desc: "Background-verified personnel deployed with body-cams, GPS check-ins, and command-center oversight.",
      tag: "FIELD OPS",
    },
    {
      step: "04",
      title: "Live Accountability",
      desc: "Real-time visibility, digital incident logs, and post-deployment reviews — so you always know what happened.",
      tag: "COMMAND VIEW",
    },
  ],

  stats: [
    {
      value: 50,
      suffix: "+",
      label: "Elite Guards",
      sub: "Trained & deployed statewide",
    },
    {
      value: 12,
      suffix: "",
      label: "Industry Verticals",
      sub: "Corporate to critical infrastructure",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Command Coverage",
      sub: "Always-on rapid response",
    },
    {
      value: 100,
      suffix: "%",
      label: "Ops Documented",
      sub: "Digital logs on every deployment",
    },
  ],

  industries: [
    { name: "Corporate & IT Parks", tag: "ACCESS CONTROL" },
    { name: "Hospitality & Resorts", tag: "GUEST SAFETY" },
    { name: "Healthcare", tag: "PATIENT SECURITY" },
    { name: "Banking & Finance", tag: "HIGH-VALUE ASSETS" },
    { name: "Real Estate", tag: "SITE PROTECTION" },
    { name: "Manufacturing", tag: "PLANT SECURITY" },
    { name: "Pharma & Life Sciences", tag: "COMPLIANCE-LED" },
    { name: "Events & Entertainment", tag: "CROWD OPS" },
    { name: "Retail & Malls", tag: "PERIMETER CONTROL" },
    { name: "Education", tag: "CAMPUS SAFETY" },
    { name: "Logistics & Warehousing", tag: "ASSET TRACKING" },
    { name: "Critical Infrastructure", tag: "24/7 MONITORING" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
