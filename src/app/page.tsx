import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutTeaser from "@/components/sections/AboutTeaser";
import DriftWall from "@/components/sections/DriftWall";
import ServicesGrid from "@/components/sections/ServicesGrid";
import EngagementPath from "@/components/sections/EngagementPath";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import Testimonials from "@/components/sections/Testimonials";
import FounderQuote from "@/components/sections/FounderQuote";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "ARMOURIXX Security — Elite Protection Across Maharashtra",
  description:
    "Premium private security in Maharashtra — VIP protection, corporate security, event ops, surveillance, and 24/7 rapid response. Trained personnel + body-cams, GPS, and digital reporting.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <AboutTeaser />
        <DriftWall />
        <ServicesGrid />
        <EngagementPath />
        <IndustriesMarquee />
        <Testimonials />
        <FounderQuote />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
