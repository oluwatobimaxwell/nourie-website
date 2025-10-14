import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import WaitingListCTA from "../components/home/WaitingListCTA";
import FeaturesSection from "../components/home/FeaturesSection";
import CorporatePartnershipCTA from "../components/home/CorporatePartnershipCTA";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[var(--background)]">
      <HeroSection />
      <StatsSection />
      <WaitingListCTA />
      <FeaturesSection />
      <CorporatePartnershipCTA />
      <FinalCTA />
    </div>
  );
}