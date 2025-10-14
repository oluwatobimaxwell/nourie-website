
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Download, Play, Apple } from 'lucide-react';

export default function AppCta() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} id="home-app-cta" className="relative py-32 bg-[#356859] overflow-hidden">
      {/* Background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#F9A03F]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
            Join the
            <br />
            <span className="font-medium text-[#F9A03F]">Movement</span>
          </h2>
          
          <motion.p 
            className="text-2xl text-white/80 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Download the Nourie app and become part of a community dedicated 
            to making good food accessible for all.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button className="group relative overflow-hidden bg-white text-[#356859] px-12 py-4 rounded-full font-medium text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center space-x-3">
                <Apple className="w-6 h-6" />
                <span>Download for iOS</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F9A03F] to-[#C97B25] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="group relative overflow-hidden bg-[#F9A03F] text-white px-12 py-4 rounded-full font-medium text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center space-x-3">
                <Play className="w-6 h-6" />
                <span>Download for Android</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C97B25] to-[#356859] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </motion.div>

          <motion.div 
            className="mt-16 flex items-center justify-center space-x-8 text-white/60"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#F9A03F] rounded-full"></div>
              <span className="text-lg">Free Download</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white/40 rounded-full"></div>
              <span className="text-lg">Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#F9A03F] rounded-full"></div>
              <span className="text-lg">Fresh Daily</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
