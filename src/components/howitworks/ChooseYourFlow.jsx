import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ClipboardList, Zap, ArrowRight } from 'lucide-react';

const FlowCard = ({ icon: Icon, title, description, ctaText, targetId, color, index }) => {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl p-8 glass-morphism hover:bg-[var(--background)]/80 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: color }}></div>
      
      <div className="relative z-10">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color }} />
        </div>

        <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3">{title}</h3>
        <p className="text-[var(--text-muted)] leading-relaxed mb-6">{description}</p>

        <div className="flex items-center space-x-2 text-[var(--text-main)] font-semibold group-hover:translate-x-2 transition-transform duration-300">
          <span>{ctaText}</span>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default function ChooseYourFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const flows = [
    {
      icon: Calendar,
      title: "Plan Ahead & Save",
      description: "Schedule your meals and enjoy significant savings. Perfect for consistency and value.",
      ctaText: "Discover Pre-Order",
      targetId: "pre-order-details",
      color: "var(--primary-accent)"
    },
    {
      icon: ClipboardList,
      title: "Automate Your Meals",
      description: "Set it and forget it. Regular, personalized deliveries for ultimate convenience.",
      ctaText: "Explore Subscriptions",
      targetId: "subscription-details",
      color: "var(--yellow-accent)"
    },
    {
      icon: Zap,
      title: "Hunger, Solved Instantly",
      description: "Fresh, hot meals delivered to your door in minutes. For those spontaneous cravings.",
      ctaText: "Get Instant Meals",
      targetId: "instant-details",
      color: "var(--secondary-accent)"
    }
  ];

  return (
    <section id="choose-your-flow" ref={ref} className="py-24 md:py-32 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Choose Your <span className="gradient-text">Flow</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Three distinct ways to enjoy Nourie, each designed for your lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {flows.map((flow, index) => (
            <FlowCard key={index} {...flow} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}