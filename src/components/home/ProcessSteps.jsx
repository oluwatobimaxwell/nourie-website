import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Step = ({ number, title, description, image, reverse = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="grid lg:grid-cols-2 gap-16 items-center"
      variants={variants}
    >
      <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#356859]/20 to-[#F9A03F]/20 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
        <img 
          src={image}
          alt={title}
          className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
        />
      </div>
      <div className={`relative z-10 ${reverse ? 'lg:order-1' : ''}`}>
        <span className="text-7xl font-bold text-gray-200/80 leading-none">
          {number}
        </span>
        <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mt-4 mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Sourced from Our Markets',
      description: 'We partner with trusted sellers in local Abuja markets like Dei-Dei and Kado, ensuring every ingredient is fresh, authentic, and supports our community.',
      image: 'https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg'
    },
    {
      number: '02',
      title: 'Cooked with Precision',
      description: 'Our innovative pre-cooking model allows us to prepare meals with meticulous care and consistency, a process that makes our accessible pricing possible.',
      image: 'https://images.pexels.com/photos/28736731/pexels-photo-28736731.jpeg'
    },
    {
      number: '03',
      title: 'Delivered with Dignity',
      description: 'The final step is our promise fulfilled. Every meal is carefully packaged to preserve its warmth and artistry, arriving at your table to nourish and delight.',
      image: 'https://images.pexels.com/photos/12725436/pexels-photo-12725436.jpeg'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Our <span className="font-medium text-[#356859]">Promise</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Three principles that guide every meal we create.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.4 }}
        >
          <Step {...steps[0]} />
          <Step {...steps[1]} reverse={true} />
          <Step {...steps[2]} />
        </motion.div>
      </div>
    </section>
  );
}