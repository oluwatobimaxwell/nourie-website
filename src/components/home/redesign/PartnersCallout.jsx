import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function PartnersCallout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-[var(--background-alt)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-morphism p-12 md:p-16 rounded-3xl text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] flex items-center justify-center">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
            Partner with Nourie: <br />
            <span className="gradient-text">Fueling Productivity, Elevating Experience</span>
          </h2>

          <p className="text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Empower your team with fresh, healthy, and convenient meals. Discover how Nourie's efficient corporate solutions can streamline your operations.
          </p>

          <Link
            to={createPageUrl("CorporatePartnership")}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white font-semibold text-lg hover:scale-105 transition-all shadow-xl group"
          >
            <span>Explore Corporate Partnerships</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}