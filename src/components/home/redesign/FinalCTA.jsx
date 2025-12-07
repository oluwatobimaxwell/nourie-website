import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import AppStoreButton from '../../common/AppStoreButton';
import GooglePlayButton from '../../common/GooglePlayButton';

export default function FinalCTA() {
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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Your Next Exceptional Meal <br />
            <span className="gradient-text">Awaits</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[var(--text-muted)] mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Join thousands of Nigerians who have made Nourie their go-to for delicious, affordable meals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <AppStoreButton variant="solid" className="w-full sm:w-auto" />
            <GooglePlayButton variant="solid" className="w-full sm:w-auto" />
        </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-8 text-[var(--text-muted)]"
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--yellow-accent)] text-[var(--yellow-accent)]" />
                ))}
              </div>
              <span className="text-lg font-medium">Premium Quality</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--primary-accent)] rounded-full"></div>
              <span className="text-lg">Chef Curated</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--secondary-accent)] rounded-full"></div>
              <span className="text-lg">Fresh Daily</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}