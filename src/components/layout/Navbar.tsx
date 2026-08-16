"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const megaMenuServices = [
  { icon: "👔", label: "VIP & Executive Protection", href: "/services#vip-protection" },
  { icon: "🏢", label: "Manned Guarding", href: "/services#manned-guarding" },
  { icon: "🎪", label: "Event Security", href: "/services#event-security" },
  { icon: "📹", label: "Surveillance & Control Room", href: "/services#surveillance-control-room" },
  { icon: "🚨", label: "Rapid Response", href: "/services#rapid-response" },
  { icon: "🌐", label: "Corporate Security Programs", href: "/services#corporate-security-programs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  const moveIndicator = (index: number | null) => {
    const navEl = navRef.current;
    const indEl = indicatorRef.current;
    if (!navEl || !indEl) return;
    if (index === null) {
      indEl.style.opacity = "0";
      return;
    }
    const link = linkRefs.current[index];
    if (!link) return;
    const navRect = navEl.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    indEl.style.left = `${linkRect.left - navRect.left}px`;
    indEl.style.width = `${linkRect.width}px`;
    indEl.style.opacity = "1";
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-area-top",
          scrolled
            ? "glass border-b border-[var(--glass-border)] py-2.5 sm:py-3"
            : "bg-transparent py-3 sm:py-5"
        )}
      >
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold-light)] to-[var(--gold-dark)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="relative shrink-0">
              <Shield
                className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--gold)] transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                strokeWidth={0.5}
                stroke="var(--gold-dark)"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-[var(--ink)] tracking-tight">
                AXS
              </span>
            </div>
            <div className="flex flex-col leading-none min-w-0">
              <span className="font-[var(--font-display)] text-base sm:text-xl tracking-widest text-[var(--cream)] truncate">
                ARMOURI
                <span className="text-gradient-gold">XX</span>
              </span>
              <span className="text-[7px] sm:text-[8px] tracking-[0.3em] sm:tracking-[0.35em] text-[var(--gold)] font-semibold uppercase mt-0.5">
                Security
              </span>
            </div>
          </Link>

          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1 relative"
            onMouseLeave={() => {
              setActiveIndex(null);
              moveIndicator(null);
              setMegaOpen(false);
            }}
          >
            <div
              ref={indicatorRef}
              className="absolute bottom-0 h-[2px] bg-[var(--gold)] rounded-full opacity-0 transition-all duration-300 pointer-events-none"
            />

            {navLinks.map((link, i) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => {
                  setActiveIndex(i);
                  moveIndicator(i);
                  if (link.hasMega) setMegaOpen(true);
                  else setMegaOpen(false);
                }}
              >
                <Link
                  href={link.href}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  className={cn(
                    "flex items-center gap-1 px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold tracking-widest uppercase transition-colors duration-200",
                    pathname === link.href
                      ? "text-[var(--gold)]"
                      : "text-[var(--cream-muted)] hover:text-[var(--cream)]"
                  )}
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform duration-300",
                        megaOpen && activeIndex === i && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {link.hasMega && megaOpen && activeIndex === i && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[min(600px,calc(100vw-2rem))] glass rounded-xl border border-[var(--glass-border)] p-4 xl:p-6 shadow-2xl shadow-black/60">
                    <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                      Our Services
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {megaMenuServices.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--gold)]/10 transition-colors duration-200 group"
                        >
                          <span className="text-lg shrink-0">{svc.icon}</span>
                          <span className="text-sm text-[var(--cream-muted)] group-hover:text-[var(--cream)] transition-colors">
                            {svc.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                      <Link
                        href="/services"
                        className="text-[var(--gold)] text-sm font-semibold hover:underline"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 border border-[var(--gold)] text-[var(--gold)] text-xs xl:text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-300"
            >
              Get Protected
            </Link>
            <button
              type="button"
              className="lg:hidden text-[var(--cream)] p-2 -mr-1 no-min-tap"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(10,10,11,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <Shield className="w-64 sm:w-96 h-64 sm:h-96 opacity-[0.03] text-[var(--gold)]" fill="currentColor" />
        </div>

        <div className="relative z-10 h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col items-center gap-1 sm:gap-2 flex-1 justify-center">
            {navLinks.map((link, i) => (
              <div key={link.href} className="w-full max-w-sm">
                {link.hasMega ? (
                  <>
                    <button
                      type="button"
                      className={cn(
                        "w-full flex items-center justify-center gap-2 font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl tracking-widest transition-all duration-300 py-2",
                        pathname === link.href || mobileServicesOpen
                          ? "text-[var(--gold)]"
                          : "text-[var(--cream-muted)]"
                      )}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-300",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 mb-4 grid grid-cols-1 gap-1 max-h-[40vh] overflow-y-auto rounded-lg border border-[var(--glass-border)] p-3 glass">
                        {megaMenuServices.map((svc) => (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-[var(--cream-muted)] hover:text-[var(--cream)] hover:bg-[var(--gold)]/10 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span>{svc.icon}</span>
                            <span className="text-left">{svc.label}</span>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="text-center text-[var(--gold)] text-xs font-semibold pt-2 border-t border-[var(--glass-border)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-center font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl tracking-widest transition-all duration-300 py-2",
                      "hover:text-[var(--gold)]",
                      pathname === link.href
                        ? "text-[var(--gold)]"
                        : "text-[var(--cream-muted)]",
                      mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${i * 60}ms` }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div
            className={cn(
              "mt-6 flex justify-center transition-all duration-500",
              mobileOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <Link
              href="/contact"
              className="w-full max-w-sm text-center px-8 py-3.5 border border-[var(--gold)] text-[var(--gold)] font-bold tracking-widest uppercase text-sm hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-300 rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get Protected
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
