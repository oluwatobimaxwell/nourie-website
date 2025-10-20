import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are your delivery hours?",
    answer: "Our standard delivery hours are from 9:00 AM to 9:00 PM, seven days a week. Pre-ordered meals can be scheduled for delivery at any time within this window."
  },
  {
    question: "How does pre-ordering save me money?",
    answer: "By pre-ordering, you help us plan our kitchen operations and ingredient purchasing more efficiently. This reduces waste and operational costs, and we pass those savings directly on to you in the form of lower prices and exclusive discounts."
  },
  {
    question: "What areas do you deliver to in Abuja?",
    answer: "We currently deliver to Wuse II, Maitama, Garki, and surrounding areas. We are constantly expanding our delivery zones, so please check the app for the most up-to-date service areas."
  },
  {
    question: "Can I customize my order?",
    answer: "Yes, you can specify dietary restrictions or add notes to your order during checkout. For major customizations, please contact our support team, and we will do our best to accommodate your needs."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <motion.div 
    className="border-b border-[var(--glass-border)] last:border-b-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <button
      className="w-full flex justify-between items-center text-left py-6 group"
      onClick={onClick}
    >
      <h3 className="text-lg md:text-xl font-medium text-[var(--text-main)] group-hover:text-[var(--primary-accent)] transition-colors pr-4">
        {faq.question}
      </h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
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
          <p className="pb-6 text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--background-alt)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
            Quick <span className="gradient-text">Answers</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Find answers to commonly asked questions
          </p>
        </motion.div>

        <div className="glass-morphism rounded-3xl p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}