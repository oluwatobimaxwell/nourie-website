import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Users, MapPin } from 'lucide-react';

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 bg-[var(--background-alt)] text-[var(--text-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Story Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] mb-8 leading-tight">
                The quiet
                <br />
                <span className="gradient-text">crisis</span>
              </h2>
              
              <div className="space-y-8 text-xl text-[var(--text-muted)] leading-relaxed font-light">
                <p>
                  In Nigeria today, especially in cities like Abuja, something as basic as food has become a quiet crisis. Prices have soared, portions have shrunk, and the dignity of simply enjoying a good meal is slipping away from everyday people.
                </p>
                
                <p>
                  We've felt it too, the shock of paying thousands for a plate that leaves you hungry, the sadness of skipping lunch just to stretch your budget, the daily struggle of choosing between nourishment and necessity.
                </p>
                
                <p className="text-2xl font-medium text-[var(--primary-accent)]">
                  This is why we built Nourie.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2">Prices Soared</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">Thousands for meals that don't satisfy</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2">Dignity Lost</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">Good food becoming out of reach</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--primary-accent)] to-[#356859] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2">Our Response</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">Born in Abuja to solve this crisis</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative hidden lg:block h-[600px]">
              <img 
                src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg" 
                alt="Nigerian market scene"
                className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-3xl shadow-2xl"
              />
              <img 
                src="https://img.freepik.com/premium-photo/ofada-rice-nigerian-dish-plate-white-background-directly-view_864588-12622.jpg" 
                alt="Nourie meal"
                className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-3xl shadow-2xl"
              />
      
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}