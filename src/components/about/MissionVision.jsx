import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="mission-vision" ref={ref} className="py-24 md:py-32 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6">
            Our Driving <span className="gradient-text">Force</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            The mission and vision that guide everything we do
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Mission */}
          <div className="glass-morphism p-8 sm:p-12 rounded-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--primary-accent)] to-[#356859] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] leading-tight">Our Mission</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-xl lg:text-2xl text-[var(--text-muted)] font-light leading-relaxed"
            >
              To restore the <span className="text-[var(--text-main)] font-medium">dignity</span> of a good meal for everyone in Nigeria by making quality food <span className="text-[var(--text-main)] font-medium">accessible</span>, <span className="text-[var(--text-main)] font-medium">reliable</span>, and <span className="text-[var(--text-main)] font-medium">delightful</span>.
            </motion.p>
          </div>

          {/* Vision */}
          <div className="glass-morphism p-8 sm:p-12 rounded-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--secondary-accent)] to-[var(--yellow-accent)] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-[#121212]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] leading-tight">Our Vision</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg sm:text-xl lg:text-2xl text-[var(--text-muted)] font-light leading-relaxed"
            >
              To be Nigeria's most <span className="text-[var(--text-main)] font-medium">trusted</span> and <span className="text-[var(--text-main)] font-medium">beloved</span> food platform, a household name synonymous with quality, community, and joy.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}