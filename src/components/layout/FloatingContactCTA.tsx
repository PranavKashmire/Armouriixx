"use client";

import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingContactCTA() {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hello ARMOURIXX — I'd like to discuss security for my organization."
  )}`;

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3"
      aria-label="Quick contact"
    >
      <Link
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 pl-3 pr-4 py-3 rounded-sm bg-[#25D366] text-white shadow-lg shadow-black/40 hover:scale-[1.03] transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          WhatsApp
        </span>
      </Link>
      <a
        href={`tel:${siteConfig.contact.phoneTel}`}
        className="group flex items-center gap-2 pl-3 pr-4 py-3 rounded-sm glass-gold text-[var(--cream)] shadow-lg shadow-black/40 hover:scale-[1.03] transition-transform duration-300"
        aria-label="Call ARMOURIXX"
      >
        <Phone className="w-5 h-5 text-[var(--gold)] shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          Call 24/7
        </span>
      </a>
    </div>
  );
}
