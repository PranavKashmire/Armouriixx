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
  founded: 2026,
  region: "Maharashtra, India",
  coverage: "PAN Maharashtra · Expanding PAN India",

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
      "We combine elite personnel with body-cams, GPS patrol monitoring, and digital incident reporting as standard — not premium add-ons.",
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
