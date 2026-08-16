"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurFadeIn from "@/components/ui/BlurFadeIn";
import GlassCard from "@/components/ui/GlassCard";
import ShimmerButton from "@/components/ui/ShimmerButton";
import CTABanner from "@/components/sections/CTABanner";
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import DriftWallHeroBg from "@/components/ui/DriftWallHeroBg";
import { siteConfig } from "@/data/siteConfig";

const services = [
  "Manned Guarding",
  "VIP & Executive Protection",
  "Event Security",
  "Surveillance & Control Room",
  "Corporate Security Program",
  "Rapid Response",
  "Other",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hello ARMOURIXX — I'd like to discuss security requirements for my organization."
  )}`;

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.message.trim() || form.message.length < 10)
      newErrors.message = "Please provide more detail (min 10 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[var(--ink-3)] border border-[var(--glass-border)] rounded-sm px-4 py-3.5 text-[var(--cream)] text-base sm:text-sm font-[var(--font-body)] placeholder-[var(--cream-muted)]/50 focus:outline-none focus:border-[var(--gold)]/60 focus:bg-[var(--ink-2)] transition-all duration-300 min-h-[48px]";

  const labelClass =
    "block text-xs text-[var(--cream-muted)] tracking-wider uppercase font-semibold mb-2";

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24">
        <section className="pb-[clamp(3rem,8vw,8rem)] pt-4 sm:pt-6 md:pt-8 bg-[var(--ink)] relative overflow-hidden">
          <DriftWallHeroBg />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <BlurFadeIn>
              <p className="text-[var(--gold)] text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-semibold mb-4 sm:mb-6">
                Command Desk · 24/7
              </p>
              <h1 className="font-[var(--font-display)] text-[clamp(2.25rem,8vw,7rem)] leading-none mb-4 sm:mb-6">
                Let&apos;s Secure{" "}
                <span className="text-gradient-gold">What Matters.</span>
              </h1>
              <p className="text-[var(--cream-muted)] text-base sm:text-lg leading-relaxed max-w-2xl font-[var(--font-body)]">
                Every engagement starts with understanding your risk — site, routes, people,
                and assets. Tell us what you need to protect and we&apos;ll design an operational
                blueprint before deployment.
              </p>
            </BlurFadeIn>
          </div>
        </section>

        <section className="section-pad bg-[var(--ink-2)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
              <div className="lg:col-span-2">
                <BlurFadeIn direction="left">
                  <GlassCard goldBorder className="p-5 sm:p-8 md:p-10">
                    {submitted ? (
                      <div className="text-center py-16">
                        <CheckCircle className="w-20 h-20 text-[var(--gold)] mx-auto mb-6" />
                        <h3 className="font-[var(--font-display)] text-4xl text-[var(--cream)] mb-4">
                          Request Received
                        </h3>
                        <p className="text-[var(--cream-muted)] text-base font-[var(--font-body)] max-w-md mx-auto">
                          Our command team will review your requirements and respond within one
                          business day. For urgent matters, call or WhatsApp us directly.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                          <a
                            href={`tel:${siteConfig.contact.phoneTel}`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-gold rounded-sm text-sm font-bold uppercase tracking-wider text-[var(--cream)]"
                          >
                            <Phone className="w-4 h-4 text-[var(--gold)]" />
                            {siteConfig.contact.phone}
                          </a>
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider bg-[#25D366] text-white"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} noValidate>
                        <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl text-[var(--cream)] mb-2">
                          Request Protection
                        </h2>
                        <p className="text-[var(--cream-muted)] text-sm mb-6 sm:mb-8 font-[var(--font-body)]">
                          Phase 01 of our engagement — share your site, service need, and timeline.
                          We&apos;ll follow up with a threat assessment and operational proposal.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className={labelClass} htmlFor="name">Full Name *</label>
                            <input
                              id="name"
                              type="text"
                              className={inputClass}
                              placeholder="Your full name"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && (
                              <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="phone">Phone *</label>
                            <input
                              id="phone"
                              type="tel"
                              className={inputClass}
                              placeholder="+91 XXXXX XXXXX"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              aria-describedby={errors.phone ? "phone-error" : undefined}
                            />
                            {errors.phone && (
                              <p id="phone-error" className="text-red-400 text-xs mt-1">{errors.phone}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className={labelClass} htmlFor="email">Email</label>
                            <input
                              id="email"
                              type="email"
                              className={inputClass}
                              placeholder="work@company.com"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="company">Company / Organization</label>
                            <input
                              id="company"
                              type="text"
                              className={inputClass}
                              placeholder="Optional"
                              value={form.company}
                              onChange={(e) => setForm({ ...form, company: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className={labelClass} htmlFor="service">Service Needed *</label>
                          <select
                            id="service"
                            className={inputClass}
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            aria-describedby={errors.service ? "service-error" : undefined}
                          >
                            <option value="">Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                          {errors.service && (
                            <p id="service-error" className="text-red-400 text-xs mt-1">{errors.service}</p>
                          )}
                        </div>

                        <div className="mb-8">
                          <label className={labelClass} htmlFor="message">Operational Brief *</label>
                          <textarea
                            id="message"
                            rows={5}
                            className={`${inputClass} resize-none`}
                            placeholder="Site location, number of personnel needed, event dates, access points, specific threats or compliance requirements..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            aria-describedby={errors.message ? "message-error" : undefined}
                          />
                          {errors.message && (
                            <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>
                          )}
                        </div>

                        <ShimmerButton type="submit" size="lg" className="w-full sm:w-auto justify-center">
                          {loading ? "Submitting..." : "Send Security Request"}
                        </ShimmerButton>
                      </form>
                    )}
                  </GlassCard>
                </BlurFadeIn>
              </div>

              <div className="flex flex-col gap-5">
                <BlurFadeIn direction="right">
                  <GlassCard className="p-7">
                    <h3 className="font-[var(--font-display)] text-2xl text-[var(--cream)] mb-6">
                      Direct to Command
                    </h3>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 glass-gold rounded-sm flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-[var(--gold)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--cream-muted)] tracking-wider uppercase font-semibold mb-1">Phone</p>
                          <a
                            href={`tel:${siteConfig.contact.phoneTel}`}
                            className="text-[var(--cream)] text-sm hover:text-[var(--gold)] transition-colors"
                          >
                            {siteConfig.contact.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 glass-gold rounded-sm flex items-center justify-center shrink-0">
                          <MessageCircle className="w-4 h-4 text-[var(--gold)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--cream-muted)] tracking-wider uppercase font-semibold mb-1">WhatsApp</p>
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--cream)] text-sm hover:text-[var(--gold)] transition-colors"
                          >
                            Message Command Desk
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 glass-gold rounded-sm flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-[var(--gold)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--cream-muted)] tracking-wider uppercase font-semibold mb-1">Email</p>
                          <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-[var(--cream)] text-sm hover:text-[var(--gold)] transition-colors break-all"
                          >
                            {siteConfig.contact.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 glass-gold rounded-sm flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-[var(--gold)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[var(--cream-muted)] tracking-wider uppercase font-semibold mb-1">Operations</p>
                          <p className="text-[var(--cream-muted)] text-sm">{siteConfig.contact.address}</p>
                          <p className="text-[var(--cream-muted)]/70 text-xs mt-0.5">
                            {siteConfig.contact.addressLine2}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </BlurFadeIn>

                <BlurFadeIn direction="right" delay={100}>
                  <GlassCard goldBorder className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-[var(--gold)]" />
                      <h4 className="font-[var(--font-display)] text-xl text-[var(--cream)]">
                        {siteConfig.contact.hours}
                      </h4>
                    </div>
                    <p className="text-[var(--cream-muted)] text-sm leading-relaxed font-[var(--font-body)]">
                      Emergencies don&apos;t wait for business hours. Our operations team monitors
                      deployments around the clock — call or WhatsApp for immediate coordination.
                    </p>
                  </GlassCard>
                </BlurFadeIn>

                <BlurFadeIn direction="right" delay={200}>
                  <GlassCard className="p-7">
                    <h4 className="font-[var(--font-display)] text-xl text-[var(--cream)] mb-4">
                      How We Engage
                    </h4>
                    <ol className="space-y-4">
                      {siteConfig.engagementSteps.map((step) => (
                        <li key={step.step} className="flex gap-3">
                          <span className="font-[var(--font-display)] text-[var(--gold)]/40 text-sm shrink-0">
                            {step.step}
                          </span>
                          <div>
                            <p className="text-[var(--cream)] text-sm font-semibold">{step.title}</p>
                            <p className="text-[var(--cream-muted)] text-xs mt-0.5 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </GlassCard>
                </BlurFadeIn>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          headline="Prefer a"
          headlineHighlight="Direct Conversation?"
          subcopy="Our command desk is standing by. One call starts the assessment — no forms required for urgent requirements."
          primaryLabel="Call Command Desk"
          primaryHref={`tel:${siteConfig.contact.phoneTel}`}
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </main>
      <Footer />
    </>
  );
}
