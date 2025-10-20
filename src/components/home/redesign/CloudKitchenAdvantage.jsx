import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChefHat, Leaf, DollarSign, Zap } from 'lucide-react';

const advantages = [
  {
    icon: ChefHat,
    title: "Culinary Excellence",
    description: "Expert chefs craft diverse, authentic Nigerian dishes with the freshest local ingredients, daily."
  },
  {
    icon: Zap,
    title: "Unrivaled Efficiency",
    description: "Streamlined processes mean consistent quality, less waste, and faster preparation in our modern kitchens."
  },
  {
    icon: DollarSign,
    title: "Premium Value",
    description: "Enjoy restaurant-quality dining at accessible prices, freed from the overheads of traditional establishments."
  },
  {
    icon: Leaf,
    title: "Sustainable Future",
    description: "A direct-to-you model that reduces food miles and waste, contributing to a greener Abuja."
  }
];

export default function CloudKitchenAdvantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, var(--primary-accent) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            The Cloud Kitchen <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Redefining dining through innovation, quality, and sustainability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--primary-accent)]/10 to-[var(--secondary-accent)]/10 flex items-center justify-center"
              >
                <advantage.icon className="w-10 h-10 text-[var(--primary-accent)]" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">
                {advantage.title}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed font-light">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}