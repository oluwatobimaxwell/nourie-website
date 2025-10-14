import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Mission */}
          <div className="glass-morphism p-12 rounded-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center space-x-6 mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-accent)] to-[#356859] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-[var(--text-main)] leading-tight">Our Mission</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-2xl text-[var(--text-muted)] font-light leading-relaxed"
            >
              To restore the <span className="text-[var(--text-main)] font-medium">dignity</span> of a good meal for everyone in Nigeria by making quality food <span className="text-[var(--text-main)] font-medium">accessible</span>, <span className="text-[var(--text-main)] font-medium">reliable</span>, and <span className="text-[var(--text-main)] font-medium">delightful</span>.
            </motion.p>
          </div>

          {/* Vision */}
          <div className="glass-morphism p-12 rounded-3xl mt-0 lg:mt-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex items-center space-x-6 mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--secondary-accent)] to-[var(--yellow-accent)] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-10 h-10 text-[#121212]" />
              </div>
              <h2 className="text-5xl font-bold text-[var(--text-main)] leading-tight">Our Vision</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-2xl text-[var(--text-muted)] font-light leading-relaxed"
            >
              To be Nigeria's most <span className="text-[var(--text-main)] font-medium">trusted</span> and <span className="text-[var(--text-main)] font-medium">beloved</span> food platform, a household name synonymous with quality, community, and joy.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}