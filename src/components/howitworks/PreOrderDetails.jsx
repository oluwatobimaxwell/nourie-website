import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ChefHat, Truck, DollarSign } from 'lucide-react';

const Step = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="flex items-start space-x-6"
  >
    <div className="flex-shrink-0">
      <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--primary-accent)]/60 rounded-2xl flex items-center justify-center">
        <Icon className="w-7 h-7 text-white" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">{title}</h3>
      <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function PreOrderDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Calendar,
      title: "Plan Your Week",
      description: "Browse our menu and schedule your meals for any day, at any time. Perfect for busy lives."
    },
    {
      icon: ChefHat,
      title: "Crafted Fresh For You",
      description: "Our chefs prepare your order with the finest ingredients, timed perfectly for your delivery slot."
    },
    {
      icon: Truck,
      title: "Delivered On Your Time",
      description: "Your meal arrives hot and ready to enjoy, exactly when you planned. No waiting, no hassle."
    },
    {
      icon: DollarSign,
      title: "Enjoy the Savings",
      description: "Pre-ordering helps us optimize our kitchen, and we pass those savings directly to you."
    }
  ];

  return (
    <section id="pre-order-details" ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20 rounded-full text-[var(--primary-accent)] font-medium text-sm mb-6">
            Pre-Order Service
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
            The Planner's Choice
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light">
            For those who love to plan ahead. Enjoy convenience, consistency, and smart savings.
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