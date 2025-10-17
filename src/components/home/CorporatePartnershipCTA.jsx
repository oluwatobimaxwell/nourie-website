import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Building2, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function CorporatePartnershipCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    { icon: Building2, text: "Flexible meal plans" },
    { icon: Users, text: "Boost productivity" },
    { icon: TrendingUp, text: "Streamlined billing" }
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20 rounded-full text-[var(--primary-accent)] font-medium text-sm mb-6">
              For Businesses
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight tracking-tight">
              Feed your team, <br />
              fuel your success
            </h2>
            
            <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light mb-8">
              Partner with Nourie to provide your employees with fresh, delicious meals every day.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  className="flex items-center space-x-2 px-4 py-2 bg-[var(--background-alt)] rounded-full border border-[var(--glass-border)]"
                >
                  <benefit.icon className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span className="text-[var(--text-main)] font-medium text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                to={createPageUrl("CorporatePartnership")}
                className="inline-flex items-center space-x-2 text-base font-semibold text-[var(--primary-accent)] group"
              >
                <span>Explore Partnership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://img.freepik.com/free-photo/people-office-work-day_23-2150690152.jpg"
                alt="African corporate team dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}