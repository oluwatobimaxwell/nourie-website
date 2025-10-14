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
      className="w-full flex justify-between items-center text-left py-6"
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
          <div className="pb-6 pl-16 space-y-4">
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
    <section className="py-32 bg-[var(--background-alt)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6">
            Our Name, Our Heritage
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            "Nourie" is a celebration of Nigeria's rich linguistic tapestry, a tribute to the universal word that binds us all: Food.
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