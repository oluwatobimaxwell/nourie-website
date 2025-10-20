import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Utensils, Heart, ChevronDown } from 'lucide-react';

const solutions = [
  {
    icon: Calendar,
    title: "Corporate Meal Subscriptions",
    brief: "Seamless, recurring meal deliveries for daily employee nourishment.",
    features: [
      "Weekly or monthly subscription packages tailored to team size",
      "Customizable meal plans per employee with dietary accommodations",
      "Centralized billing and comprehensive reporting dashboard",
      "Dedicated account manager for seamless support"
    ]
  },
  {
    icon: Utensils,
    title: "Event & Meeting Catering",
    brief: "Elevated dining experiences for your corporate events, meetings, and special occasions.",
    features: [
      "Custom menu design tailored to your event's theme and audience",
      "Professional presentation and setup services",
      "On-site coordination and cleanup included",
      "Accommodates diverse dietary requirements and preferences"
    ]
  },
  {
    icon: Heart,
    title: "Employee Wellness Programs",
    brief: "Nourish your team with health-focused, balanced meal options and nutritional guidance.",
    features: [
      "Nutritionist-approved menus designed for optimal health",
      "Calorie and macro tracking available for health-conscious teams",
      "Comprehensive dietary restriction management",
      "Monthly wellness reports and insights"
    ]
  }
];

const SolutionCard = ({ solution, index, isOpen, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="glass-morphism rounded-3xl overflow-hidden hover:bg-[var(--background)]/60 transition-all duration-300"
    >
      <button
        onClick={onClick}
        className="w-full p-8 text-left flex items-start justify-between group"
      >
        <div className="flex items-start space-x-6 flex-1">
          <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <solution.icon className="w-7 h-7 text-[var(--primary-accent)]" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[var(--text-main)] mb-2">{solution.title}</h3>
            <p className="text-[var(--text-muted)] font-light">{solution.brief}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
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
            <div className="px-8 pb-8 pt-0">
              <div className="border-t border-[var(--glass-border)] pt-6">
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[var(--primary-accent)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[var(--text-muted)] font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function TailoredSolutions() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Flexible Solutions for
            <br />
            <span className="gradient-text">Every Organization</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Nourie offers adaptable meal plans designed to integrate seamlessly with your company culture and operational needs
          </p>
        </motion.div>

        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solution={solution}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}