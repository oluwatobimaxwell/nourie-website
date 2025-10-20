import React from "react";
import HeroSection from "../components/home/redesign/HeroSection";
import CloudKitchenAdvantage from "../components/home/redesign/CloudKitchenAdvantage";
import CulinaryJourney from "../components/home/redesign/CulinaryJourney";
import OurMission from "../components/home/redesign/OurMission";
import PartnersCallout from "../components/home/redesign/PartnersCallout";
import FinalCTA from "../components/home/redesign/FinalCTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[var(--background)]">
      <HeroSection />
      <CloudKitchenAdvantage />
      <CulinaryJourney />
      <OurMission />
      <PartnersCallout />
      <FinalCTA />
    </div>
  );
}