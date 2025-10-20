import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import AppStoreButton from '../common/AppStoreButton';
import GooglePlayButton from '../common/GooglePlayButton';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HowItWorksCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Ready to Savor the <br />
            <span className="gradient-text">Nourie Experience?</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-[var(--text-muted)] mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Download the Nourie app today and redefine your dining experience in Abuja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
               <Link to={createPageUrl("waitinglist")}>
                    <AppStoreButton variant="solid" className="w-full sm:w-auto" />
                    </Link>
                    <Link to={createPageUrl("waitinglist")}>
                    <GooglePlayButton variant="solid" className="w-full sm:w-auto" />
                    </Link>
                  </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-8 text-[var(--text-muted)]"
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--yellow-accent)] text-[var(--yellow-accent)]" />
                ))}
              </div>
              <span className="text-lg font-medium">Loved by Thousands</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--primary-accent)] rounded-full"></div>
              <span className="text-lg">Fresh Daily</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--secondary-accent)] rounded-full"></div>
              <span className="text-lg">25min Avg Delivery</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}