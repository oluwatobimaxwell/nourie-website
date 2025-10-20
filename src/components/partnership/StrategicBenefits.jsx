import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Heart, DollarSign, Users } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Boost Productivity & Focus",
    description: "Healthy, balanced meals keep your team energized and focused throughout the day, significantly enhancing output.",
    color: "var(--primary-accent)"
  },
  {
    icon: Heart,
    title: "Elevate Employee Satisfaction",
    description: "Offer a highly valued perk with diverse, delicious meal options, customized to cater to all tastes and dietary needs.",
    color: "var(--secondary-accent)"
  },
  {
    icon: DollarSign,
    title: "Streamlined Operations & Savings",
    description: "Effortless meal management, from flexible plans to on-time delivery, frees up your internal resources and optimizes budgets.",
    color: "var(--yellow-accent)"
  },
  {
    icon: Users,
    title: "Cultivate a Positive Culture",
    description: "Foster team bonding and well-being with shared culinary experiences that strengthen your workplace community and employer brand.",
    color: "var(--primary-accent)"
  }
];

export default function StrategicBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="strategic-benefits" ref={ref} className="py-24 md:py-32 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Strategic Advantages.
            <br />
            <span className="gradient-text">Effortless Integration.</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Nourie's cloud kitchen model delivers unparalleled benefits for your organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="glass-morphism p-8 rounded-3xl hover:bg-[var(--background)]/60 transition-all duration-300 group"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${benefit.color}20` }}
              >
                <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--text-main)] mb-3">{benefit.title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}