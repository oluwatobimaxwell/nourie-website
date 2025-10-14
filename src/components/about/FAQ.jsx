import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        className="w-full py-8 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium text-gray-900 pr-8 group-hover:text-[#356859] transition-colors">
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="w-10 h-10 bg-[#356859]/10 rounded-full flex items-center justify-center group-hover:bg-[#356859]/20 transition-colors">
              <Plus className="w-5 h-5 text-[#356859]" />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? "auto" : 0, 
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 24 : 0 
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 leading-relaxed pr-12 pb-2">
            {answer}
          </p>
        </motion.div>
      </button>
    </motion.div>
  );
};

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  const faqs = [
    {
      question: "What makes Nourie different from other food delivery services?",
      answer: "Nourie is built on a unique pre-order model inspired by traditional African communal cooking. By allowing customers to plan and pre-order meals, we can optimize our kitchen operations, reduce waste, and pass those benefits directly to you. This isn't just about convenience—it's about restoring the dignity of affordable, quality meals in Nigeria."
    },
    {
      question: "How does the pre-order system help me save money?",
      answer: "When you pre-order, you're essentially joining a modern communal kitchen. Multiple customers ordering the same meal allows us to buy ingredients in bulk, plan production precisely, and minimize waste. These operational efficiencies translate directly into lower prices for you—sometimes up to 30% less than instant orders."
    },
    {
      question: "What are your delivery areas in Abuja?",
      answer: "We currently deliver to all major districts in Abuja, including Maitama, Wuse I & II, Garki, Asokoro, Utako, Jabi, and their surrounding areas. We're expanding rapidly across the FCT, so check our app for the most up-to-date coverage in your area."
    },
    {
      question: "How fresh are your meals?",
      answer: "Freshness is our core promise. All meals are prepared to order in our cloud kitchen using ingredients sourced daily from trusted local markets like Dei-Dei and Kado. We never pre-cook or reheat food—everything is made fresh when you place your order, whether it's pre-ordered or instant."
    },
    {
      question: "Can I modify or cancel my pre-order?",
      answer: "For pre-orders, you can modify or cancel up to 2 hours before your scheduled delivery time through the app. For instant orders, changes must be made within 5 minutes of placing the order as our kitchen begins preparation immediately to ensure quick delivery."
    },
    {
      question: "Do you accommodate dietary restrictions and allergies?",
      answer: "Absolutely! We offer vegetarian options and can accommodate most dietary needs. For specific allergies or dietary restrictions, please add detailed notes when placing your order, or contact our support team. We take food safety and dietary requirements very seriously."
    },
    {
      question: "How does your pricing work for pre-orders vs instant orders?",
      answer: "Pre-orders enjoy significant discounts because they help us plan better and reduce waste. Instant orders are priced at regular rates due to the immediate preparation and delivery required. You'll always see the exact price, including any pre-order savings, before confirming your order."
    },
    {
      question: "What happens if I'm not satisfied with my meal?",
      answer: "Your satisfaction is our priority. If you're not completely happy with your meal, contact us immediately through the app or our support channels. We'll work with you to make it right, whether that means a replacement meal, credit to your account, or a full refund."
    },
    {
      question: "How do you ensure food safety and quality?",
      answer: "We maintain the highest standards of food safety with regular health inspections, temperature-controlled storage and delivery, and strict hygiene protocols in our kitchen. Our team is trained in food safety best practices, and we source only from trusted, verified suppliers."
    },
    {
      question: "Are you planning to expand to other cities in Nigeria?",
      answer: "Yes! While we're currently focused on perfecting our service in Abuja, we have ambitious plans to bring Nourie to Lagos, Port Harcourt, Kano, and other major Nigerian cities. Our goal is to make affordable, quality meals accessible across the country. Follow our social media for expansion updates."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Questions About <br />
            <span className="text-[#F9A03F] font-medium">Our Mission</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            Everything you need to know about Nourie's approach to making good food accessible again.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <a 
            href="mailto:hello@nourie.ng"
            className="inline-flex items-center space-x-3 bg-[#356859] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2B4D45] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}