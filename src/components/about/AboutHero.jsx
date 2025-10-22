import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Heart } from 'lucide-react';

export default function AboutHero() {
  return (
    <section id="our-story" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4190997/pexels-photo-4190997.jpeg"
          alt="Nigerian food market vibrant scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[var(--yellow-accent)]/20 border border-[var(--yellow-accent)]/30 rounded-full text-[var(--yellow-accent)] font-medium text-sm mb-6">
              Our Story
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight text-center"
          >
            Born from a <span className="gradient-text">Crisis.</span>
            <br />
            Built for a Better Nigeria.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="space-y-6 text-xl lg:text-2xl text-gray-200 leading-relaxed font-light mb-12"
          >
            <p>
              In Nigeria today, especially in cities like Abuja, something as basic as food has become a quiet crisis. Prices have soared, portions have shrunk, and the dignity of simply enjoying a good meal is slipping away from everyday people.
            </p>
            
            <p>
              We've felt it too—the shock of paying thousands for a plate that leaves you hungry, the sadness of skipping lunch just to stretch your budget, the daily struggle of choosing between nourishment and necessity.
            </p>
            
            <p className="text-2xl lg:text-3xl font-medium text-[var(--yellow-accent)]">
              This is why we built Nourie.
            </p>

            <p>
              Nourie isn't just a kitchen—it's a movement to make food accessible again. By combining the timeless wisdom of communal planning with modern cloud kitchen technology, we're restoring the dignity of a good meal for everyone in Abuja.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">The Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Food prices skyrocketing, portions shrinking, dignity fading</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--primary-accent)] to-[#356859] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Response</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Cloud kitchens + smart planning = accessible quality meals</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--secondary-accent)] to-[var(--yellow-accent)] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-[#121212]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">The Movement</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Empowering communities with nourishment and dignity</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}