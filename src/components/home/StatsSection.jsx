
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PiggyBank, Leaf, ChefHat, Clock } from 'lucide-react';

const stats = [
  {
    icon: PiggyBank,
    value: "Up to 20%",
    label: "Savings on Pre-Orders",
    color: "var(--primary-accent)"
  },
  {
    icon: Clock,
    value: "25",
    suffix: " min",
    label: "Target Delivery Time",
    color: "var(--secondary-accent)"
  },
  {
    icon: Leaf,
    value: "30% cut",
    label: "In Food Waste",
    color: "var(--yellow-accent)"
  },
  {
    icon: ChefHat,
    value: "20+",
    label: "Chef-Curated Meals",
    color: "var(--primary-accent)"
  }
];

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className="glass-morphism p-6 sm:p-8 rounded-3xl text-center hover:bg-[var(--background-alt)]/60 transition-all duration-300 group"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div 
        className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${stat.color.replace('var(','').replace(')','')}20` }}
      >
        <stat.icon 
          className="w-8 h-8 transition-all duration-300" 
          style={{ color: stat.color }}
        />
      </div>
      
      <motion.div 
        className="text-3xl sm:text-4xl font-bold text-[var(--text-main)] mb-2"
        whileHover={{ scale: 1.1 }}
      >
        {stat.value}{stat.suffix}
      </motion.div>
      
      <p className="text-[var(--text-muted)] text-base sm:text-lg font-medium">{stat.label}</p>
    </motion.div>
  );
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[var(--background-alt)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A8D5BA' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          maskImage: 'linear-gradient(to bottom, white, transparent)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4 sm:mb-6 px-4">
            A <span className="gradient-text">Smarter</span> Way to Eat
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light px-4">
            Our model is built on efficiency, quality, and savings for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
