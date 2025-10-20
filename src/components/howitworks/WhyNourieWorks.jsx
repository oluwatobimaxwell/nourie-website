import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, DollarSign, Leaf, Shield } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="glass-morphism p-8 rounded-2xl hover:bg-[var(--background)]/60 transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-7 h-7 text-[var(--primary-accent)]" />
    </div>
    <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">{title}</h3>
    <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
  </motion.div>
);

export default function WhyNourieWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Sparkles,
      title: "Guaranteed Freshness",
      description: "Meals cooked daily with local ingredients in our state-of-the-art cloud kitchens."
    },
    {
      icon: DollarSign,
      title: "Exceptional Value",
      description: "Premium quality, accessible prices, optimized through our efficient model."
    },
    {
      icon: Shield,
      title: "Flexible & Reliable",
      description: "Your food, your schedule. Adaptable to your busy life, delivered on time."
    },
    {
      icon: Leaf,
      title: "Sustainable Choice",
      description: "Less food waste, smarter logistics, a positive impact on our community."
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Why Nourie <span className="gradient-text">Works for You</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            The holistic benefits of choosing Nourie for your daily meals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}