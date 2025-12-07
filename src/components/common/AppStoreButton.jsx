import React from 'react';
import { motion } from 'framer-motion';

export default function AppStoreButton({ variant = 'default', className = '' }) {
  const variants = {
    default: {
      container: "group p-4 rounded-2xl flex items-center space-x-4 hover:bg-[var(--background-alt)]/60 transition-all duration-300 cursor-pointer glass-morphism",
      text: {
        small: "text-sm text-[var(--text-muted)]",
        large: "text-lg font-semibold text-[var(--text-main)]"
      }
    },
    solid: {
      container: "group px-10 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212]",
      text: {
        small: "text-sm text-[#121212]/80",
        large: "text-lg font-semibold text-[#121212]"
      }
    },
    outline: {
      container: "group px-10 py-4 rounded-full font-medium text-lg flex items-center justify-center space-x-3 glass-morphism text-[var(--text-main)] border border-[var(--glass-border)] hover:bg-[var(--background)]/60 transition-all duration-300",
      text: {
        small: "text-sm text-[var(--text-muted)]",
        large: "text-lg font-medium text-[var(--text-main)]"
      }
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.a 
      href="https://apps.apple.com/ng/app/eat-nourie/id6753700646"
      target="_blank"
      rel="noopener noreferrer"
      className={`${currentVariant.container} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
      </svg>
      {variant === 'default' ? (
        <div className="text-left">
          <p className={currentVariant.text.small}>Download on the</p>
          <p className={currentVariant.text.large}>App Store</p>
        </div>
      ) : (
        <span className={currentVariant.text.large}>Download for iOS</span>
      )}
    </motion.a>
  );
}