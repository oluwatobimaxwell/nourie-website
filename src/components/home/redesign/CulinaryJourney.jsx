import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const journeySteps = [
  {
    step: "01",
    title: "Discover Your Craving",
    description: "Browse chef-curated menus, explore new flavors, or find your go-to comfort meal.",
    screenshot: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a45cd32d6986d16467cc0d/add7cfd4c_SimulatorScreenshot-iPhone16Plus-2025-10-14at131609-portrait.png"
  },
  {
    step: "02",
    title: "Order Your Way",
    description: "Effortlessly pre-order for the week or get instant delivery when hunger strikes. Customise to your taste.",
    screenshot: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a45cd32d6986d16467cc0d/fdf14ea4d_SimulatorScreenshot-iPhone16Plus-2025-10-19at104358-portrait.png"
  },
  {
    step: "03",
    title: "Savor Freshness",
    description: "Track your order in real-time and enjoy fresh, hot meals delivered right to your door.",
    screenshot: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a45cd32d6986d16467cc0d/c7ccb9b26_SimulatorScreenshot-iPhone16Plus-2025-10-14at131705-portrait.png"
  }
];

export default function CulinaryJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="culinary-journey" ref={ref} className="py-24 md:py-32 bg-[var(--background-alt)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Your Culinary <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Effortless from plate to palate
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps Content */}
          <div className="space-y-6">
            {journeySteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`cursor-pointer transition-all duration-500 rounded-2xl p-6 ${
                  activeStep === index 
                    ? 'bg-[var(--background)] shadow-xl border-2 border-[var(--primary-accent)]' 
                    : 'bg-transparent border-2 border-transparent hover:bg-[var(--background)]/50'
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl transition-all duration-500 ${
                        activeStep === index
                          ? 'bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] text-white'
                          : 'bg-[var(--background)] text-[var(--text-muted)]'
                      }`}
                      animate={activeStep === index ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {item.step}
                    </motion.div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                      activeStep === index ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-lg leading-relaxed font-light transition-colors duration-500 ${
                      activeStep === index ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8"
            >
              <Link
                to={createPageUrl("HowItWorks")}
                className="inline-flex items-center space-x-2 text-[var(--primary-accent)] font-semibold text-lg group"
              >
                <span>See How It Works in Detail</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* App Screenshot Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block h-[700px] flex items-center justify-center"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={journeySteps[activeStep].screenshot}
                  alt={journeySteps[activeStep].title}
                  className="w-full max-w-[400px] h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}