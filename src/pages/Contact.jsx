import React from "react";
import ContactHero from "../components/contact/ContactHero";
import QuickContactMethods from "../components/contact/QuickContactMethods";
import LocationSection from "../components/contact/LocationSection";
import FAQ from "../components/contact/FAQ";
import ContactCTA from "../components/contact/ContactCTA";

export default function Contact() {
  return (
    <div className="bg-[var(--background)] text-[var(--text-main)] overflow-hidden">
      <ContactHero />
      <QuickContactMethods />
      <LocationSection />
      <FAQ />
      <ContactCTA />
    </div>
  );
}