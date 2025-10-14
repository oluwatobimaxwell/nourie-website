import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OurStory() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <motion.section 
      className="py-32 bg-gradient-to-br from-white to-[#F9A03F]/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div variants={textVariants}>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
            Born from a 
            <br />
            <span className="text-[#F9A03F] font-medium">Quiet Crisis</span>
          </h2>
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
            <p>
              In Nigeria, the simple dignity of a good meal is slipping away. Prices are soaring, and for many, nourishment has become a daily struggle. We feel it too.
            </p>
            <p>
              Nourie is our response. A kitchen born from empathy and a promise to make exceptional food accessible again. This is more than a business, it's a movement!
            </p>
          </div>
          <Link 
            to={createPageUrl("About")}
            className="inline-flex items-center space-x-3 text-[#356859] font-medium hover:text-[#2B4D45] transition-colors mt-12 group text-lg"
          >
            <span>Read Our Full Story</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div variants={imageVariants} className="relative h-[600px] h-auto space-y-4 lg:h-[600px]">
          /*<img 
            src="https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg" 
            alt="Beautifully plated food"
            className="w-full lg:w-3/4 h-auto object-cover rounded-2xl shadow-lg"
          />*/
          <img 
            src="https://images.pexels.com/photos/5963877/pexels-photo-5963877.jpeg" 
            alt="Person enjoying a meal"
            className="w-full lg:w-3/4 h-auto object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}