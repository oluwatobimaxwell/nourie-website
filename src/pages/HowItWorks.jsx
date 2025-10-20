import React from "react";
import HowItWorksHero from "../components/howitworks/HowItWorksHero";
import ChooseYourFlow from "../components/howitworks/ChooseYourFlow";
import PreOrderDetails from "../components/howitworks/PreOrderDetails";
import SubscriptionDetails from "../components/howitworks/SubscriptionDetails";
import InstantDetails from "../components/howitworks/InstantDetails";
import WhyNourieWorks from "../components/howitworks/WhyNourieWorks";
import HowItWorksCTA from "../components/howitworks/HowItWorksCTA";

export default function HowItWorks() {
  return (
    <div className="bg-[var(--background)] overflow-hidden">
      <HowItWorksHero />
      <ChooseYourFlow />
      <PreOrderDetails />
      <SubscriptionDetails />
      <InstantDetails />
      <WhyNourieWorks />
      <HowItWorksCTA />
    </div>
  );
}