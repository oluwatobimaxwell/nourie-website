import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Shield, Globe, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every meal crafted with care and passion"
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Only the finest ingredients make it to your table"
  },
  {
    icon: Globe,
    title: "Community Driven",
    description: "Supporting local markets and suppliers"
  },
 /* {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in food delivery"
  }*/
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-8 leading-tight">
              Born from a 
              <br />
              <span className="gradient-text">quiet crisis</span>
            </h2>
            
            <div className="space-y-6 text-xl text-[var(--text-muted)] leading-relaxed font-light mb-12">
              <p>
                In Nigeria today, especially in cities like Abuja, something as basic as food has become a quiet crisis. Prices have soared, portions have shrunk, and the dignity of simply enjoying a good meal is slipping away.
              </p>
              
              <p>
                We've felt it too—the shock of paying thousands for a plate that leaves you hungry, the sadness of skipping lunch just to stretch your budget. This is why we built Nourie.
              </p>
              
              <p className="text-2xl font-semibold text-[var(--primary-accent)]">
                A movement to restore the dignity of good food.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                  className="flex items-start space-x-4 p-4 glass-morphism rounded-2xl hover:bg-[var(--background-alt)]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-accent)] to-[#356859] rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-main)] mb-1">{value.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-[600px]"
          >
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://img.freepik.com/premium-photo/homemade-chicken-stew-with-tomatoes-onions-carrot-potatoes-plate_1339-155940.jpg" 
                alt="Nigerian chef preparing food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/30 via-transparent to-transparent"></div>
            </div> 

            {/* Secondary Image */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://www.kindpng.com/picc/m/121-1219877_pounded-yam-and-afang-soup-hd-png-download.png" 
                alt="Fresh Nigerian ingredients"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/30 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[var(--primary-accent)]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[var(--secondary-accent)]/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}