import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from "react-router-dom";
import { createPageUrl } from '@/utils';
import { Calendar, Zap, ArrowRight, Download } from 'lucide-react';

const scrollToDownload = (e) => {
  e.preventDefault();
  const ctaSection = document.getElementById('home-app-cta');
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }s
};

const MethodCard = ({ icon: Icon, title, description, features, color, bgGradient, delay, linkTo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative ${bgGradient} rounded-3xl p-8 md:p-10 text-white overflow-hidden group`}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform -translate-x-4 translate-y-4 group-hover:scale-125 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-white/90 mb-8 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={linkTo}
            className="group/btn inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 border border-white/20"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <a
           href="#home-app-cta"
           onClick={scrollToDownload}
           className="inline-flex items-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors shadow-lg transition-all duration-500 transform hover:scale-105"
          >
            <Download className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            <span>Get App</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function OrderingMethods() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const methods = [
    {
      icon: Calendar,
      title: "Pre-Order",
      description: "Plan ahead and enjoy the benefits of communal cooking. Lower prices, guaranteed availability, and the satisfaction of mindful meal planning.",
      features: [
        "Up to 30% savings on meals",
        "Schedule meals up to a week ahead",
        "Priority access to new dishes",
        "Guaranteed delivery slots"
      ],
      color: "#356859",
      bgGradient: "bg-gradient-to-br from-[#356859] to-[#2B4D45]",
      linkTo: `${createPageUrl("HowItWorks")}#pre-order-section`
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Hungry right now? No problem. Order from our ready-to-cook menu and get hot, fresh meals delivered to your door in minutes.",
      features: [
        "Delivery in 15-30 minutes",
        "Real-time order tracking",
        "Perfect for spontaneous cravings",
        "Always fresh, never pre-cooked"
      ],
      color: "#F9A03F",
      bgGradient: "bg-gradient-to-br from-[#F9A03F] to-[#C97B25]",
      linkTo: `${createPageUrl("HowItWorks")}#instant-delivery-section`
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23356859' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Two ways to experience 
            <br />
            <span className="font-medium text-[#356859]">Nourie</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Whether you're a planner or spontaneous, we've designed the perfect dining experience for your lifestyle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <MethodCard 
              key={method.title} 
              {...method} 
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}