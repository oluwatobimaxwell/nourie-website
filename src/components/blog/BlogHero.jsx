import React from 'react';
import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--background-alt)] to-[var(--background)] py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            The Nourie <span className="gradient-text">Journal</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto font-light leading-relaxed">
            Dive into the stories behind our meals, our mission, and the vibrant culinary landscape of Abuja.
          </p>
        </motion.div>
      </div>
    </section>
  );
}