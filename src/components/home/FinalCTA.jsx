
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import AppStoreButton from '../common/AppStoreButton';
import GooglePlayButton from '../common/GooglePlayButton';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-[var(--background-alt)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--yellow-accent)]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-morphism p-8 sm:p-12 lg:p-16 rounded-3xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--text-main)] mb-6 sm:mb-8 tracking-tight leading-tight">
            Join the
            <br />
            <span className="gradient-text">food revolution</span>
          </h2>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-[var(--text-muted)] max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Download the Nourie app today and become part of a community dedicated 
            to making excellent food accessible for everyone in Nigeria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AppStoreButton variant="solid" className="w-full sm:w-auto" />
            <GooglePlayButton variant="solid" className="w-full sm:w-auto" />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 text-[var(--text-muted)]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--yellow-accent)] text-[var(--yellow-accent)]" />
                ))}
              </div>
              <span className="text-base sm:text-lg font-medium">Premium Meals</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--primary-accent)] rounded-full"></div>
              <span className="text-base sm:text-lg">Chef Curated</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--secondary-accent)] rounded-full"></div>
              <span className="text-base sm:text-lg">Available 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
