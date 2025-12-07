
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Users, Smartphone } from 'lucide-react';
import AppStoreButton from '../common/AppStoreButton';
import GooglePlayButton from '../common/GooglePlayButton';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-gradient-to-br from-[var(--background-alt)] to-[var(--background)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--yellow-accent)]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-4 sm:mb-6">
            Ready to Join the <span className="gradient-text">Movement?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Whether you're a business looking to partner with us or a food lover ready to experience Nourie, we've got you covered.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Business Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="glass-morphism p-8 sm:p-12 rounded-3xl text-center group hover:bg-[var(--background)]/60 transition-all duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--primary-accent)] to-[#356859] rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-4 sm:mb-6">
              Partner With Us
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed font-light mb-6 sm:mb-8">
              Are you a restaurant, supplier, or business interested in collaborating? Let's work together to bring quality food to more people across Nigeria.
            </p>
            
            <Link to={createPageUrl("CorporatePartnership")}>
              <motion.button 
                className="inline-flex items-center space-x-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Talk Business</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Consumer App Download CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="glass-morphism p-8 sm:p-12 rounded-3xl text-center group hover:bg-[var(--background)]/60 transition-all duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--secondary-accent)] to-[var(--yellow-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-[#121212]" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] mb-4 sm:mb-6">
              Download Our App
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed font-light mb-6 sm:mb-8">
              Ready to experience delicious, affordable meals? Join thousands of satisfied customers who trust Nourie for their daily food needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreButton variant="default" className="w-full sm:w-auto" />
            <GooglePlayButton variant="default" className="w-full sm:w-auto" />
          </div>
        </motion.div>
        </div>

        {/* Bottom Statistics or Trust Indicators */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary-accent)] mb-2">Up to 20%</div>
            <div className="text-[var(--text-muted)] text-xs sm:text-sm">Savings on Pre-Orders</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--secondary-accent)] mb-2">25min</div>
            <div className="text-[var(--text-muted)] text-xs sm:text-sm">Average Delivery</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--yellow-accent)] mb-2">30% cut</div>
            <div className="text-[var(--text-muted)] text-xs sm:text-sm">In Food Waste</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary-accent)] mb-2">24/7</div>
            <div className="text-[var(--text-muted)] text-xs sm:text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
