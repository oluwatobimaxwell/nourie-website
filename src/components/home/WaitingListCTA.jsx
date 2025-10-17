import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Sparkles, Gift, Bell, Zap, ArrowRight } from 'lucide-react';

export default function WaitingListCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const perks = [
    { icon: Gift, text: "30% Launch Discount" },
    { icon: Zap, text: "Priority Access" },
    { icon: Bell, text: "Exclusive Updates" },
    { icon: Sparkles, text: "Beta Testing" }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-[var(--secondary-accent)]/20 to-[var(--yellow-accent)]/20 border border-[var(--secondary-accent)]/30 rounded-full text-[var(--secondary-accent)] font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon to Abuja</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight px-4"
          >
            Be First in Line for the <span className="gradient-text">Food Revolution</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-light mb-8 px-4"
          >
            Join our exclusive waiting list and unlock special early-bird benefits when Nourie launches.
          </motion.p>

          {/* Perks Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1, ease: "easeOut" }}
                className="glass-morphism p-4 rounded-xl hover:bg-[var(--background-alt)]/60 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <perk.icon className="w-5 h-5 text-[var(--primary-accent)]" />
                </div>
                <p className="text-[var(--text-main)] font-semibold text-sm">{perk.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            <Link
              to={createPageUrl("WaitingList")}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span>Join Waiting List</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <p className="text-[var(--text-muted)] text-sm mt-4">
              🔥 <strong className="text-[var(--text-main)]">500+</strong> people already joined
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}