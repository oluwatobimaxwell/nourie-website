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
    <section ref={ref} className="py-20 md:py-24 bg-[var(--background-alt)] relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[var(--secondary-accent)]/10 to-[var(--yellow-accent)]/10 border border-[var(--secondary-accent)]/20 rounded-full text-[var(--secondary-accent)] font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon to Abuja</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight tracking-tight"
          >
            Be first in line
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-light mb-10"
          >
            Join our waiting list and unlock special early-bird benefits when Nourie launches.
          </motion.p>

          {/* Perks Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto"
          >
            {perks.map((perk, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-[var(--background)] rounded-full border border-[var(--glass-border)]"
              >
                <perk.icon className="w-4 h-4 text-[var(--primary-accent)]" />
                <span className="text-sm font-medium text-[var(--text-main)]">{perk.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              to={createPageUrl("WaitingList")}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Join Waiting List</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-[var(--text-muted)] text-sm mt-4">
              <strong className="text-[var(--text-main)]">500+</strong> people already joined
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}