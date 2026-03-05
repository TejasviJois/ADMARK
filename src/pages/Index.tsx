import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import StatsSection from "@/components/StatsSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import TrustWeOverDeliverSection from "@/components/TrustWeOverDeliverSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const t = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(t);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ComparisonSection />
      <ProcessSection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FAQSection />
      <CareersSection />
      <ContactSection />
      <TrustWeOverDeliverSection />
      <Footer />
    </div>
  );
};

export default Index;
