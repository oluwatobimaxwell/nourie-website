import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import AppScreenReel from '../AppScreenReel';

export default function DesktopPhoneMockup({ mousePosition }) {
  return (
    <div
      className="relative h-[700px] flex items-center justify-center order-first lg:order-last"
      style={{
        transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`,
      }}
    >
      {/* Main Phone */}
      <motion.div 
        className="relative w-[340px] h-[700px] z-20"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-full h-full">
          {/* Phone Frame */}
          <div className="w-full h-full bg-gray-800/80 backdrop-blur-sm rounded-[56px] p-3.5 shadow-2xl border-2 border-gray-700">
            <AppScreenReel />
          </div>
          
          {/* Side Buttons */}
          <div className="absolute -left-1 top-[110px] w-1 h-[28px] bg-gray-700 rounded-r-sm"></div>
          <div className="absolute -left-1 top-[155px] w-1 h-[60px] bg-gray-700 rounded-r-sm"></div>
          <div className="absolute -right-1 top-[155px] w-1 h-[80px] bg-gray-700 rounded-l-sm"></div>
          
          {/* Dynamic Island */}
          <div className="absolute top-3.5 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full"></div>
          
          {/* Phone glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-[56px] blur-xl -z-10 scale-105"></div>
        </div>
      </motion.div>

      {/* Floating Review Card */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-8 -left-8 z-30"
      >
        <div className="glass-morphism p-4 rounded-2xl max-w-xs shadow-xl border border-[var(--glass-border)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={1} // Static key for now
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--yellow-accent)] text-[var(--yellow-accent)]" />
                ))}
              </div>
              <p className="text-sm text-[var(--text-main)] font-medium mb-1">
                "Amazing food quality and super fast delivery!"
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                - Sarah A. • Verified Customer
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div> */}

      {/* Download Stats Badge */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-12 -right-8 z-30"
      >
        <div className="glass-morphism p-4 rounded-2xl shadow-xl border border-[var(--glass-border)]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">30+</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-main)]">Nigerian Cuisines</p>
              <p className="text-xs text-[var(--text-muted)]">Pre-Order Now!</p>
            </div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}