
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
    { icon: Sparkles, text: "Beta Testing Access" }
  ];

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--yellow-accent)]/5 rounded-full blur-2xl"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A8D5BA' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[var(--secondary-accent)]/20 to-[var(--yellow-accent)]/20 border border-[var(--secondary-accent)]/30 rounded-full text-[var(--secondary-accent)] font-semibold text-sm sm:text-base">
              <Sparkles className="w-4 h-4" />
              <span>Coming Soon to Abuja</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 leading-tight px-4"
          >
            Be First in Line for the <br />
            <span className="gradient-text">Food Revolution</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-light mb-12 px-4"
          >
            Join our exclusive waiting list and unlock special early-bird benefits when Nourie launches. 
            Limited spots available!
          </motion.p>

          {/* Perks Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1, ease: "easeOut" }}
                className="glass-morphism p-4 sm:p-6 rounded-2xl hover:bg-[var(--background-alt)]/60 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <perk.icon className="w-6 h-6 text-[var(--primary-accent)]" />
                </div>
                <p className="text-[var(--text-main)] font-semibold text-sm sm:text-base">{perk.text}</p>
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
              className="inline-flex items-center space-x-3 px-10 py-5 rounded-full font-bold text-lg sm:text-xl bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl group"
            >
              <span>Join the Waiting List</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <p className="text-[var(--text-muted)] text-sm mt-6">
              🔥 <strong className="text-[var(--text-main)]">500+</strong> people already joined. Don't miss out!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
