import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section id="our-story" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Nigerian food market vibrant scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 bg-[var(--yellow-accent)]/20 border border-[var(--yellow-accent)]/30 rounded-full text-[var(--yellow-accent)] font-medium text-sm mb-6">
              Our Story
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Born from a <span className="gradient-text">Crisis</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light mb-8 max-w-3xl"
          >
            In Nigeria today, the dignity of a good meal is slipping away. Nourie isn't just a kitchen — it's a movement to make food accessible again.
          </motion.p>
        </div>
      </div>
    </section>
  );
}