
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const scrollToDownload = (e) => {
  e.preventDefault();
  const ctaSection = document.getElementById('home-app-cta');
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const MealCard = ({ meal, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className={`relative ${meal.gridClass} group cursor-pointer`}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.15, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#home-app-cta" onClick={scrollToDownload} className="block w-full h-full">
        <div className="relative w-full h-full overflow-hidden rounded-3xl">
          <motion.img 
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-8"
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-3xl font-medium text-white mb-2 leading-tight">
              {meal.name}
            </h3>
            <p className="text-white/80 text-lg font-light">
              {meal.description}
            </p>
          </motion.div>

          <motion.div 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              backgroundColor: isHovered ? 'rgba(249, 160, 63, 0.9)' : 'rgba(255, 255, 255, 0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            <Download className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};

export default function FeaturedMeals() {
  const meals = [
    {
      name: "Smoky Jollof & Asun",
      description: "Our signature party jollof with spicy smoked goat meat",
      image: "https://themewscafe.com/public/uploads/all/wAhSBtUu3gF5StOG3OAw2X3EX2KYuSzCD2M5xLge.jpg",
      gridClass: "md:col-span-2 md:row-span-2 h-96 md:h-full"
    },
    {
      name: "Seafood Okra Soup",
      description: "Rich and flavorful with fresh prawns and crab",
      image: "https://lowcarbafrica.com/wp-content/uploads/2020/02/Seafood-Okra-IG-1.jpg",
      gridClass: "h-64 md:h-full"
    },
    {
      name: "Grilled Tilapia",
      description: "Perfectly spiced and grilled to perfection",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800",
      gridClass: "h-64 md:h-full"
    },
    {
      name: "Garden Salad",
      description: "Fresh, vibrant, and nutritiously delicious",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      gridClass: "md:col-span-2 h-64"
    },
  ];

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Culinary <span className="font-medium text-[#F9A03F]">Artistry</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Each dish is a masterpiece, crafted with precision and served with pride.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[700px] mb-20">
          {meals.map((meal, index) => (
            <MealCard key={index} meal={meal} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <a 
            href="#home-app-cta"
            onClick={scrollToDownload}
            className="group inline-flex items-center space-x-4 bg-[#356859] text-white px-12 py-4 rounded-full font-medium text-xl hover:bg-[#2B4D45] transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span>View Full Menu in App</span>
            <Download className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
