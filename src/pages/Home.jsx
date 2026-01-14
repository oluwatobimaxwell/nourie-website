import HeroSection from "../components/home/redesign/HeroSection";
import CloudKitchenAdvantage from "../components/home/redesign/CloudKitchenAdvantage";
import CulinaryJourney from "../components/home/redesign/CulinaryJourney";
import OurMission from "../components/home/redesign/OurMission";
import BlogSection from "../components/home/BlogSection";
import FinalCTA from "../components/home/redesign/FinalCTA";
import NourieFlex from "@/components/home/redesign/NourieFlex";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[var(--background)]">
      <HeroSection />
      <CloudKitchenAdvantage />
      <NourieFlex />
      <CulinaryJourney />
      <OurMission />
      <BlogSection />
      <FinalCTA />
    </div>
  );
}