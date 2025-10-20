import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Zap, Truck, Clock } from 'lucide-react';

const Step = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="flex items-start space-x-6"
  >
    <div className="flex-shrink-0">
      <div className="w-14 h-14 bg-gradient-to-br from-[var(--secondary-accent)] to-[var(--secondary-accent)]/60 rounded-2xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-white" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">{title}</h3>
      <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function InstantDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Smartphone,
      title: "Order on a Whim",
      description: "Feeling hungry now? Open the app and choose from our menu of ready-to-cook dishes."
    },
    {
      icon: Zap,
      title: "Instant Kitchen Action",
      description: "Your order hits our kitchen immediately, and our team springs into action to cook it fresh."
    },
    {
      icon: Truck,
      title: "Speedy Delivery",
      description: "A hot, delicious meal arrives at your doorstep in minutes. The perfect solution for sudden cravings."
    },
    {
      icon: Clock,
      title: "Track in Real-Time",
      description: "Know exactly when your meal will arrive with live tracking and updates every step of the way."
    }
  ];

  return (
    <section id="instant-details" ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[var(--secondary-accent)]/10 border border-[var(--secondary-accent)]/20 rounded-full text-[var(--secondary-accent)] font-medium text-sm mb-6">
            Instant Delivery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
            For The Moment
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light">
            When hunger strikes. Get hot, delicious meals delivered in minutes.
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