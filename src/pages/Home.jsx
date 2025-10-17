import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CorporatePartnershipCTA from "../components/home/CorporatePartnershipCTA";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[var(--background)]">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CorporatePartnershipCTA />
      <FinalCTA />
    </div>
  );
}