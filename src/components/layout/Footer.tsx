import Link from "next/link";
import { Shield, Mail, Phone, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "VIP & Executive Protection", href: "/services#vip-protection" },
  { label: "Manned Guarding", href: "/services#manned-guarding" },
  { label: "Event Security", href: "/services#event-security" },
  { label: "Surveillance & Control Room", href: "/services#surveillance-control-room" },
  { label: "Rapid Response", href: "/services#rapid-response" },
  { label: "Corporate Security", href: "/services#corporate-security-programs" },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, letter: "L" },
  { label: "Instagram", href: siteConfig.social.instagram, letter: "I" },
  { label: "Twitter", href: siteConfig.social.twitter, letter: "T" },
];

function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="footer-details group border-b border-[var(--glass-border)]">
      <summary
        className="flex items-center justify-between py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
      >
        <h4 className="font-[var(--font-display)] text-base tracking-widest text-[var(--cream)]">
          {title}
        </h4>
        <ChevronDown
          className="w-4 h-4 text-[var(--gold)] shrink-0 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  );
}

export default function Footer() {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <footer className="bg-[var(--ink-2)] border-t border-[var(--glass-border)] relative overflow-hidden pb-24 sm:pb-0">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[200px] bg-[var(--gold)]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        {/* Mobile layout — accordions + compact contact */}
        <div className="sm:hidden mb-8">
          <Link href="/" className="flex items-center gap-3 mb-4 group">
            <div className="relative shrink-0">
              <Shield
                className="w-9 h-9 text-[var(--gold)]"
                fill="currentColor"
                strokeWidth={0.5}
                stroke="var(--gold-dark)"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-[var(--ink)] tracking-tight">
                AXS
              </span>
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <span className="font-[var(--font-display)] text-lg tracking-widest truncate">
                ARMOURI<span className="text-gradient-gold">XX</span>
              </span>
              <span className="text-[7px] tracking-[0.3em] text-[var(--gold)] font-semibold uppercase mt-1">
                Security
              </span>
            </div>
          </Link>
          <p className="text-[var(--cream-muted)] text-sm leading-relaxed mb-3 font-[var(--font-body)]">
            {siteConfig.tagline}
          </p>
          <div className="flex gap-3 mb-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass rounded-sm flex items-center justify-center text-[var(--cream-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-all duration-200 text-xs font-bold"
                title={s.label}
              >
                {s.letter}
              </a>
            ))}
          </div>

          <div className="mb-6 p-4 rounded-sm border border-[var(--glass-border)] bg-[var(--ink-3)]/30">
            <h4 className="font-[var(--font-display)] text-base tracking-widest text-[var(--cream)] mb-4">
              Contact Command
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="flex items-center gap-3 min-h-[44px] text-sm text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 min-h-[44px] text-sm text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--gold)] shrink-0" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--cream-muted)]">
                <MapPin className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  <span className="text-[var(--cream-muted)]/70 text-xs">
                    {siteConfig.contact.addressLine2}
                  </span>
                </span>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 glass-gold rounded-sm text-xs text-[var(--cream)] font-semibold tracking-wider hover:text-[var(--gold)] transition-colors w-full"
              >
                WhatsApp Command Desk
              </a>
              <div className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 glass rounded-sm w-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-xs text-[var(--cream)] font-semibold tracking-wider text-center">
                  {siteConfig.contact.hours}
                </span>
              </div>
            </div>
          </div>

          <FooterAccordion title="Quick Links">
            <ul className="space-y-1">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center min-h-[44px] text-sm text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>
          <FooterAccordion title="Core Services">
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center min-h-[44px] text-sm text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    <span className="break-words">{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FooterAccordion>
        </div>

        {/* Desktop / tablet — original 4-column grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative shrink-0">
                <Shield
                  className="w-10 h-10 text-[var(--gold)]"
                  fill="currentColor"
                  strokeWidth={0.5}
                  stroke="var(--gold-dark)"
                />
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[var(--ink)] tracking-tight">
                  AXS
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-xl sm:text-2xl tracking-widest">
                  ARMOURI<span className="text-gradient-gold">XX</span>
                </span>
                <span className="text-[8px] tracking-[0.35em] text-[var(--gold)] font-semibold uppercase mt-1">
                  Security
                </span>
              </div>
            </Link>
            <p className="text-[var(--cream-muted)] text-sm leading-relaxed mb-4 max-w-sm font-[var(--font-body)]">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[var(--cream-muted)] leading-relaxed font-[var(--font-body)] max-w-sm">
              {siteConfig.brandStory.origin.slice(0, 120)}…
            </p>
            <p className="text-xs text-[var(--gold)]/60 mt-4 tracking-wider">
              Established {siteConfig.founded} · {siteConfig.coverage}
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-sm flex items-center justify-center text-[var(--cream-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)]/40 transition-all duration-200 text-xs font-bold"
                  title={s.label}
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-display)] text-lg tracking-widest text-[var(--cream)] mb-5 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-sm text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors group py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-display)] text-lg tracking-widest text-[var(--cream)] mb-5 sm:mb-6">
              Core Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors group py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                    <span className="break-words">{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-[var(--font-display)] text-lg tracking-widest text-[var(--cream)] mb-5 sm:mb-6">
              Contact Command
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[var(--cream-muted)]">
                <Phone className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--cream-muted)]">
                <Mail className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[var(--gold)] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--cream-muted)]">
                <MapPin className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
                <span>
                  {siteConfig.contact.address}
                  <br />
                  <span className="text-[var(--cream-muted)]/70 text-xs">
                    {siteConfig.contact.addressLine2}
                  </span>
                </span>
              </li>
            </ul>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-sm text-xs text-[var(--cream)] font-semibold tracking-wider hover:text-[var(--gold)] transition-colors"
            >
              WhatsApp Command Desk
            </a>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 glass rounded-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-[var(--cream)] font-semibold tracking-wider">
                {siteConfig.contact.hours}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--glass-border)] pt-6 sm:pt-8 flex flex-col gap-4 sm:gap-6 md:flex-row items-center justify-between">
          <p className="text-xs text-[var(--cream-muted)] text-center md:text-left leading-relaxed">
            © {siteConfig.founded} {siteConfig.legalName}. All rights reserved.
            <br className="sm:hidden" />
            {" "}Founded by{" "}
            <span className="text-[var(--gold)]">{siteConfig.founder.name}</span>.
          </p>
          <p className="text-xs text-[var(--cream-muted)] text-center order-first md:order-none">
            {siteConfig.motto}
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="text-xs text-[var(--cream-muted)] py-1">
              Privacy Policy — Coming Soon
            </span>
            <span className="text-xs text-[var(--cream-muted)] py-1">
              Terms of Service — Coming Soon
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
