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
    <section ref={ref} className="py-16 sm:py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--primary-accent)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--secondary-accent)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20 rounded-full text-[var(--primary-accent)] font-medium text-sm mb-4">
              For Businesses
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight">
              Feed Your Team, <br />
              <span className="gradient-text">Fuel Your Success</span>
            </h2>
            
            <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light mb-6">
              Partner with Nourie to provide your employees with fresh, delicious meals every day. Perfect for startups to enterprises.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-xl"
                >
                  <benefit.icon className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span className="text-[var(--text-main)] font-medium text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Link
                to={createPageUrl("CorporatePartnership")}
                className="inline-flex items-center space-x-3 px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Explore Partnership</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden glass-morphism">
              <img
                src="https://img.freepik.com/free-photo/people-office-work-day_23-2150690152.jpg"
                alt="African corporate team dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute bottom-6 left-6 right-6 glass-morphism p-4 rounded-2xl"
              >
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">500+</div>
                    <div className="text-white/80 text-xs">Employees Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">20+</div>
                    <div className="text-white/80 text-xs">Partners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">30%</div>
                    <div className="text-white/80 text-xs">Savings</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -inset-4 rounded-3xl blur-xl opacity-20 -z-10 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}