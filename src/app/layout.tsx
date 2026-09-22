import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import FloatingContactCTA from "@/components/layout/FloatingContactCTA";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ARMOURIXX Security — Beyond Protection. We Command Security.",
    template: "%s | ARMOURIXX Security",
  },
  description:
    "ARMOURIXX Security delivers intelligence-led private security across Maharashtra — VIP protection, corporate programs, event ops, surveillance, and 24/7 rapid response with body-cams, GPS, and digital reporting.",
  keywords:
    "private security Maharashtra, VIP protection Pune, corporate security Mumbai, event security, executive protection, ARMOURIXX, bodyguard India",
  openGraph: {
    title: "ARMOURIXX Security — Beyond Protection. We Command Security.",
    description:
      "Elite private security across Maharashtra — trained personnel, body-cams, GPS patrol monitoring, and command-center accountability.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: encodeURI("/images/armourixx_logo_transparent_exact (1).png"),
        alt: "ARMOURIXX Security",
      },
    ],
  },
  icons: {
    icon: encodeURI("/images/armourixx_logo_transparent_exact (1).png"),
    apple: encodeURI("/images/armourixx_logo_transparent_exact (1).png"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased grain-overlay`}
    >
      <body className="min-h-full flex flex-col bg-[var(--ink)] text-[var(--cream)] overflow-x-hidden">
        {children}
        <FloatingContactCTA />
      </body>
    </html>
  );
}
