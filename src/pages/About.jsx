import React from "react";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import OurName from "../components/about/OurName";
import Team from "../components/about/Team";
import CallToAction from "../components/about/CallToAction";

export default function About() {
  return (
    <div className="overflow-x-hidden bg-[var(--background)]">
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <OurName />
      <Team />
      <CallToAction />
    </div>
  );
}