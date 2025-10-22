import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Utensils, Users, ChevronDown } from 'lucide-react';

const nameOrigins = [
  {
    icon: Landmark,
    title: "Nri: Food in Igbo",
    content: [
      "'Nri' is the Igbo word for food, but it means so much more. It's life, it's community, it's the anchor of every gathering. It represents the very foundation of our existence and the deep, cultural respect we have for what sustains us."
    ],
    color: "var(--primary-accent)"
  },
  {
    icon: Utensils,
    title: "Ounje: Food in Yoruba",
    content: [
      "In Yoruba, 'Ounje' signifies more than a meal; it's an experience. It's the vibrant centerpiece of celebrations, the comfort in daily life, and the language of family. 'Ounje' is joy and togetherness served on a plate."
    ],
    color: "var(--secondary-accent)"
  },
  {
    icon: Users,
    title: "Abinci: Food in Hausa",
    content: [
      "'Abinci' is the Hausa term for food, and it carries with it the spirit of hospitality and generosity. It is about sharing, caring for others, and the honor of providing a meal. 'Abinci' is a warm welcome and a bond of community."
    ],
    color: "var(--yellow-accent)"
  }
];

const OriginItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-[var(--glass-border)] last:border-b-0">
    <button
      className="w-full flex justify-between items-center text-left py-6 hover:bg-[var(--background-alt)]/30 transition-colors px-4 rounded-lg"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color.replace('var(','').replace(')','')}2A` }}>
          <item.icon className="w-6 h-6" style={{ color: item.color }} />
        </div>
        <h3 className="text-xl font-medium text-[var(--text-main)]">{item.title}</h3>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-6 h-6 text-[var(--primary-accent)]" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pb-6 pl-16 pr-4 space-y-4">
            {item.content.map((p, i) => (
              <p key={i} className="text-lg text-[var(--text-muted)] leading-relaxed font-light">{p}</p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function OurName() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="our-name" className="py-24 md:py-32 bg-gradient-to-br from-[var(--background-alt)] via-[var(--background-alt)] to-[var(--background)] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9A03F' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6">
            Our Name, Our <span className="gradient-text">Heritage</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            "Nourie" celebrates Nigeria's rich linguistic tapestry—a tribute to the universal word that binds us all: Food.
          </p>
        </motion.div>

        <div className="glass-morphism rounded-2xl p-4">
          {nameOrigins.map((item, index) => (
            <OriginItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-2xl text-[var(--text-muted)] leading-relaxed font-light max-w-3xl mx-auto">
            Inspired by the shared spirit of <span className="font-medium text-[var(--text-main)]">Nri, Ounje,</span> and <span className="font-medium text-[var(--text-main)]">Abinci</span>, we created a name that honors them all: <span className="gradient-text font-semibold">Nourie</span>. And in a beautiful coincidence, it echoes the word 'nourish'—defining our ultimate promise to you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}