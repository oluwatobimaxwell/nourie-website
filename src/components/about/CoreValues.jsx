import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, ShieldCheck, Users, Lightbulb, ChefHat } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Empathy', description: 'We listen to our community and act with compassion.' },
  { icon: ShieldCheck, title: 'Integrity', description: 'We operate with honesty and transparency in all we do.' },
  { icon: Users, title: 'Community', description: 'We invest in local suppliers and build lasting relationships.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We use technology to solve real-world problems for our customers.' },
  { icon: ChefHat, title: 'Excellence', description: 'We are relentless in our pursuit of culinary and service perfection.' },
];

export default function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6">
            Our Guiding <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            These are the principles that shape our culture, guide our decisions, and drive our commitment to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-morphism p-8 rounded-3xl text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-accent)] to-[#356859] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--text-main)] mb-3">{value.title}</h3>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light">{value.description}</p>
            </motion.div>
          ))}
           <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * 5, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:col-span-2 lg:col-span-1 glass-morphism p-8 rounded-3xl text-center group bg-gradient-to-br from-[var(--secondary-accent)]/20 to-transparent"
            >
              <h3 className="text-2xl font-semibold text-[var(--text-main)] mb-3">And so much more...</h3>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light">
                Our values are a living part of our daily operations, always evolving as we grow.
              </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}