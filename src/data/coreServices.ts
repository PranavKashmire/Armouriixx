export interface ServiceImage {
  src: string;
  alt: string;
}

export interface CoreService {
  id: string;
  number: string;
  opsCode: string;
  coordinates: string;
  title: string;
  desc: string;
  fullDesc: string;
  tagline: string;
  storyHook: string;
  storyChapter: string;
  statusLabel: string;
  features: string[];
  images: ServiceImage[];
  gridClass: string;
  minHeight: string;
  featured?: boolean;
}

export const coreServices: CoreService[] = [
  {
    id: "vip-protection",
    number: "01",
    opsCode: "OPS-EX-01",
    coordinates: "19.0760° N",
    title: "VIP & Executive Protection",
    desc: "Close protection details for C-suite executives, politicians, celebrities, diplomats, and VVIPs.",
    fullDesc:
      "Our VIP & Executive Protection division deploys highly trained close protection officers for principals who require discretion, intelligence-led security, and flawless operational coordination. Every detail is advance-planned — from route reconnaissance and venue sweeps to secure convoy movements and on-site threat monitoring. We integrate seamlessly with corporate offices, diplomatic protocols, and private households while maintaining an unobtrusive presence that never compromises the principal's comfort or public image.",
    tagline: "Invisible until indispensable.",
    storyHook:
      "Every corridor mapped. Every threat assessed before your principal takes a single step.",
    storyChapter: "Chapter I — The Principal's Shadow",
    statusLabel: "CLOSE PROTECTION ACTIVE",
    features: [
      "Advance threat assessment & route planning",
      "Licensed close protection officers",
      "Secure transportation coordination",
      "International delegation & embassy liaison",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&h=1000&fit=crop&q=85",
        alt: "Executive protection officer in professional attire",
      },
      {
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=1000&fit=crop&q=85",
        alt: "Executive convoy on urban route",
      },
      {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&h=1000&fit=crop&q=85",
        alt: "Close protection officer escorting executive",
      },
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=1000&fit=crop&q=85",
        alt: "Executive security briefing in corporate setting",
      },
    ],
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[420px] lg:min-h-[520px]",
    featured: true,
  },
  {
    id: "manned-guarding",
    number: "02",
    opsCode: "OPS-MG-02",
    coordinates: "18.5204° N",
    title: "Manned Guarding",
    desc: "Trained security guards stationed at your premises 24/7 with body-worn cameras and GPS check-ins.",
    fullDesc:
      "Manned Guarding forms the backbone of physical security for corporate campuses, residential towers, industrial facilities, and retail environments. Our guards are selected, trained, and deployed with clear post orders, access-control protocols, and real-time accountability through body-worn cameras and GPS-verified patrol check-ins. Supervisors conduct regular audits to ensure standards remain consistent across every shift — day, night, and weekend coverage.",
    tagline: "The perimeter never sleeps.",
    storyHook:
      "Body-worn cameras, GPS patrols, and supervisors who audit every shift — not just the first one.",
    storyChapter: "Chapter II — The Perimeter",
    statusLabel: "GUARD FORCE DEPLOYED",
    features: [
      "24/7 on-site coverage & shift rotation",
      "Body-worn cameras on every guard",
      "Access control & visitor management",
      "Patrol routes with GPS verification",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=1000&fit=crop&q=85",
        alt: "Uniformed security personnel at premium facility entrance",
      },
      {
        src: "https://images.unsplash.com/photo-1589829545856-d10d45c6e953?w=1600&h=1000&fit=crop&q=85",
        alt: "Security guard monitoring building entrance",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=1000&fit=crop&q=85",
        alt: "Security personnel in modern corporate lobby",
      },
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=1000&fit=crop&q=85",
        alt: "Guard stationed at commercial building perimeter",
      },
    ],
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "event-security",
    number: "03",
    opsCode: "OPS-EV-03",
    coordinates: "19.2183° N",
    title: "Event Security",
    desc: "From private functions to large-scale concerts — complete crowd management and perimeter control.",
    fullDesc:
      "Event Security operations are planned with the same rigor as corporate protection programs. We conduct pre-event risk assessments, design layered perimeter controls, deploy crowd-management teams, and establish VIP zones with dedicated escort protocols. Whether it's a corporate gala, concert, wedding, or international exhibition, our command structure ensures rapid communication, documented incident response, and seamless coordination with venue management and local authorities.",
    tagline: "Crowds controlled. VIPs protected.",
    storyHook:
      "From site survey to final guest departure — one command structure, zero blind spots.",
    storyChapter: "Chapter III — The Crowd",
    statusLabel: "EVENT OPS STANDING",
    features: [
      "Pre-event risk assessment & site surveys",
      "Crowd management & flow control",
      "VIP zone isolation & escort protocols",
      "Emergency evacuation & medical liaison",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=1000&fit=crop&q=85",
        alt: "Security team managing a large luxury event",
      },
      {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=1000&fit=crop&q=85",
        alt: "Large-scale concert event with crowd management",
      },
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=1000&fit=crop&q=85",
        alt: "Corporate event security coordination",
      },
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=1000&fit=crop&q=85",
        alt: "Event perimeter control and access screening",
      },
    ],
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "surveillance-control-room",
    number: "04",
    opsCode: "OPS-SC-04",
    coordinates: "19.9975° N",
    title: "Surveillance & Control Room",
    desc: "AI-assisted CCTV monitoring with dedicated control room teams and incident documentation.",
    fullDesc:
      "Our Surveillance & Control Room service combines human expertise with AI-assisted monitoring to deliver 24/7 visibility across your assets. Dedicated operators track live feeds, respond to automated threat alerts, document incidents in real time, and escalate to rapid-response teams when required. Every event is logged with timestamps, camera references, and exportable reports for compliance, insurance, and post-incident review.",
    tagline: "Eyes that never blink.",
    storyHook:
      "AI flags anomalies. Operators verify. Evidence is logged before the threat escalates.",
    storyChapter: "Chapter IV — The Watchtower",
    statusLabel: "SURVEILLANCE LIVE",
    features: [
      "AI-assisted anomaly & threat detection",
      "24/7 manned control room operations",
      "Digital incident logs & evidence export",
      "Integration with on-site response teams",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop&q=85",
        alt: "Control room operators monitoring surveillance screens",
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=1000&fit=crop&q=85",
        alt: "Modern security monitoring workstation",
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=1000&fit=crop&q=85",
        alt: "CCTV camera network on building exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=1000&fit=crop&q=85",
        alt: "Digital surveillance data visualization",
      },
    ],
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "rapid-response",
    number: "05",
    opsCode: "OPS-RR-05",
    coordinates: "19.0896° N",
    title: "Rapid Response",
    desc: "GPS-enabled response teams on-site faster than traditional firms — with full incident documentation.",
    fullDesc:
      "Rapid Response teams are GPS-tracked, pre-positioned, and trained for immediate deployment when alarms trigger, threats escalate, or emergencies unfold. Our sub-15-minute response SLA across key Maharashtra corridors is backed by live dispatch coordination, body-worn camera evidence capture, and structured post-incident reporting. Clients receive a complete operational package — not just arrival on scene, but documented accountability from alert to resolution.",
    tagline: "Minutes matter. We count them.",
    storyHook:
      "GPS-tracked units, sub-15-minute SLAs, and evidence captured from alert to resolution.",
    storyChapter: "Chapter V — The Response",
    statusLabel: "RAPID DEPLOY READY",
    features: [
      "GPS-tracked response vehicles & teams",
      "Sub-15 minute response SLA (key zones)",
      "Live dispatch & escalation protocols",
      "Post-incident evidence & report packages",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1521737714892-dcf1894da8d2?w=1600&h=1000&fit=crop&q=85",
        alt: "Professional response team preparing for deployment",
      },
      {
        src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=1000&fit=crop&q=85",
        alt: "Emergency response coordination center",
      },
      {
        src: "https://images.unsplash.com/photo-1573497019940-9c28c1d0e0e1?w=1600&h=1000&fit=crop&q=85",
        alt: "Security team in tactical briefing",
      },
      {
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=1000&fit=crop&q=85",
        alt: "Response unit mobilization and documentation",
      },
    ],
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
  {
    id: "corporate-security-programs",
    number: "06",
    opsCode: "OPS-CS-06",
    coordinates: "19.0330° N",
    title: "Corporate Security Programs",
    desc: "End-to-end enterprise programs — risk assessment, policy design, deployment, and reporting.",
    fullDesc:
      "Corporate Security Programs are our flagship offering for enterprises that need a single accountable partner across their entire security posture. We begin with comprehensive risk assessments and gap analyses, then design tailored policies, guard deployment plans, technology integrations, and executive reporting dashboards. Program managers maintain monthly KPI reviews, audit compliance, and adapt protocols as your business scales across locations.",
    tagline: "One partner. Total accountability.",
    storyHook:
      "Risk assessment to monthly KPI dashboards — your entire security posture, managed end-to-end.",
    storyChapter: "Chapter VI — The Enterprise",
    statusLabel: "PROGRAM OVERSIGHT",
    features: [
      "Enterprise security risk assessments",
      "Policy, protocol & SOP design",
      "Multi-site guard deployment management",
      "Monthly KPI dashboards & compliance audits",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=1000&fit=crop&q=85",
        alt: "Security personnel protecting a modern corporate headquarters",
      },
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&h=1000&fit=crop&q=85",
        alt: "Corporate office tower with security presence",
      },
      {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=1000&fit=crop&q=85",
        alt: "Executive security strategy meeting",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=1000&fit=crop&q=85",
        alt: "Corporate security operations planning session",
      },
    ],
    gridClass: "lg:col-span-12",
    minHeight: "min-h-[400px] lg:min-h-[460px]",
  },
];

/** Primary thumbnail for compact cards */
export function getServiceThumbnail(service: CoreService): ServiceImage {
  return service.images[0];
}
