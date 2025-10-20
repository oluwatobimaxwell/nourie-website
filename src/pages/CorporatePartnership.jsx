import React from "react";
import PartnershipHero from "../components/partnership/PartnershipHero";
import StrategicBenefits from "../components/partnership/StrategicBenefits";
import TailoredSolutions from "../components/partnership/TailoredSolutions";
import OurProcess from "../components/partnership/OurProcess";
import PartnershipCTA from "../components/partnership/PartnershipCTA";

export default function CorporatePartnership() {
  return (
    <div className="overflow-x-hidden bg-[var(--background)]">
      <PartnershipHero />
      <StrategicBenefits />
      <TailoredSolutions />
      <OurProcess />
      <PartnershipCTA />
    </div>
  );
}