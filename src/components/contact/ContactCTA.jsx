import React from 'react';
import { motion } from 'framer-motion';
import AppStoreButton from '../common/AppStoreButton';
import GooglePlayButton from '../common/GooglePlayButton';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Don't Just Get in Touch—
            <br />
            <span className="text-white">Join the Movement.</span>
          </h2>
          <p className="text-xl text-[#121212]/90 mb-8 max-w-2xl mx-auto font-light">
            Download our app and discover how good food can be accessible again.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AppStoreButton variant="solid" className="w-full sm:w-auto" />
            <GooglePlayButton variant="solid" className="w-full sm:w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}