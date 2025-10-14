
import React from 'react';
import { motion } from 'framer-motion';

export default function GooglePlayButton({ variant = 'default', className = '' }) {
  const variants = {
    default: {
      container: "group p-4 rounded-2xl flex items-center space-x-4 hover:bg-[var(--background-alt)]/60 transition-all duration-300 cursor-pointer glass-morphism",
      text: {
        small: "text-sm text-[var(--text-muted)]",
        large: "text-lg font-semibold text-[var(--text-main)]"
      }
    },
    solid: {
      container: "group px-10 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300 bg-[var(--primary-accent)] text-white",
      text: {
        small: "text-sm text-white/80",
        large: "text-lg font-semibold text-white"
      }
    },
    outline: {
      container: "group px-10 py-4 rounded-full font-medium text-lg flex items-center justify-center space-x-3 glass-morphism text-[var(--text-main)] border border-[var(--glass-border)] hover:bg-[var(--background-alt)]/80 transition-all duration-300",
      text: {
        small: "text-sm text-[var(--text-muted)]",
        large: "text-lg font-medium text-[var(--text-main)]"
      }
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.a 
      href="#"
      className={`${currentVariant.container} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.609 1.814L13.792 12.01L3.61 22.186C3.483 22.284 3.324 22.33 3.164 22.316C2.868 22.291 2.636 22.046 2.61 21.75V2.734C2.593 2.42 2.82 2.155 3.133 2.124C3.298 2.105 3.46 2.155 3.58 2.26L3.609 1.814Z" fill="#32BBFF"/>
        <path d="M20.415 10.262L18.153 8.982L13.793 12.008L18.153 15.035L20.415 13.755C21.055 13.395 21.055 12.441 20.415 12.081V12.081L20.415 10.262Z" fill="#FFC932"/>
        <path d="M18.153 15.035L13.793 12.009L3.61 22.186C3.903 22.423 4.316 22.373 4.549 22.125L18.153 9.619V15.035Z" fill="#00E57C"/>
        <path d="M18.153 8.982L4.549 1.875C4.316 1.627 3.903 1.577 3.61 1.814L13.793 12.008L18.153 8.982Z" fill="#FF3B5D"/>
      </svg>
      {variant === 'default' ? (
        <div className="text-left">
          <p className={currentVariant.text.small}>Get it on</p>
          <p className={currentVariant.text.large}>Google Play</p>
        </div>
      ) : (
        <span className={currentVariant.text.large}>Download for Android</span>
      )}
    </motion.a>
  );
}
