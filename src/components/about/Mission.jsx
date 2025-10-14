import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function Mission() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.pexels.com/photos/5591679/pexels-photo-5591679.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
          alt="Nigerian ingredients and cooking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#356859]/90"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl lg:text-6xl font-light mb-12 leading-tight">
            Nourie: A name born from 
            <br />
            <span className="font-medium text-[#F9A03F]">Nigeria itself</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid md:grid-cols-3 gap-12 mb-16"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-[#F9A03F]">Oúnjẹ</h3>
              <p className="text-lg text-white/80 mb-2">Yoruba</p>
              <p className="text-white/60">"Food" - nourishment that brings joy</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-[#F9A03F]">Abinci</h3>
              <p className="text-lg text-white/80 mb-2">Hausa</p>
              <p className="text-white/60">"Food" - sustenance for body and soul</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-[#F9A03F]">Nri</h3>
              <p className="text-lg text-white/80 mb-2">Igbo</p>
              <p className="text-white/60">"Food" - the foundation of community</p>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl lg:text-3xl leading-relaxed text-white/90 font-light"
          >
            A name stitched together from shared hunger, shared hope, and the shared belief that food should never feel out of reach.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}