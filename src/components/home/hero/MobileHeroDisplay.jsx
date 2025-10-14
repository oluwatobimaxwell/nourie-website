import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AppScreenReel from '../AppScreenReel';

export default function MobileHeroDisplay({ scrollDown }) {
  return (
    <div className="h-[100dvh] w-full relative">
      <AppScreenReel isMobile={true} />
      
      {/* Scroll Down Indicator - Now perfectly centered */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.button
          onClick={scrollDown}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
        <p className="text-white/80 text-xs text-center mt-2 font-medium">Scroll Down</p>
      </motion.div>
    </div>
  );
}