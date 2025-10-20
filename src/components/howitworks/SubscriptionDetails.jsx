import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardList, Repeat, SlidersHorizontal, Heart } from 'lucide-react';

const Step = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="flex items-start space-x-6"
  >
    <div className="flex-shrink-0">
      <div className="w-14 h-14 bg-gradient-to-br from-[var(--yellow-accent)] to-[var(--yellow-accent)]/60 rounded-2xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-[#121212]" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">{title}</h3>
      <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function SubscriptionDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: ClipboardList,
      title: "Set Your Plan",
      description: "Choose your favorite meals, set your delivery frequency, and create a personalized plan that fits your lifestyle."
    },
    {
      icon: Repeat,
      title: "Automated Deliveries",
      description: "Sit back and relax. Your delicious, pre-selected meals will be automatically delivered on your schedule."
    },
    {
      icon: SlidersHorizontal,
      title: "Flexible Management",
      description: "Life happens. Easily pause, skip a delivery, or modify your meal plan anytime directly from the app."
    },
    {
      icon: Heart,
      title: "Enjoy Peace of Mind",
      description: "Never worry about what's for lunch again. Your meals are handled, so you can focus on what matters."
    }
  ];

  return (
    <section id="subscription-details" ref={ref} className="py-24 md:py-32 bg-[var(--background-alt)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[var(--yellow-accent)]/10 border border-[var(--yellow-accent)]/20 rounded-full text-[var(--yellow-accent)] font-medium text-sm mb-6">
            Subscription Service
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
            The Smart Choice
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light">
            Automate your meals, simplify your life. The ultimate set-and-forget solution for delicious food.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}