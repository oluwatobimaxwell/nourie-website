import React from 'react';
import { motion } from 'framer-motion';

export default function DesktopScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center text-[var(--text-muted)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <span className="text-xs tracking-[0.3em] mb-4 font-light">SCROLL TO EXPLORE</span>
      <motion.div 
        className="w-px h-16 bg-[var(--primary-accent)]/20"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}