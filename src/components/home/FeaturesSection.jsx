import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Zap, Repeat, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from "react-router-dom";
import { createPageUrl } from '@/utils';

const features = [
  {
    id: 'pre-order',
    icon: Calendar,
    title: "Pre-Order",
    subtitle: "Plan ahead, save more",
    description: "Schedule your meals up to a week in advance and enjoy up to 30% savings. Perfect for busy professionals who value both convenience and cost-effectiveness.",
    image: "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg",
    color: "var(--primary-accent)",
    benefits: [
      "Save up to 30% on meals",
      "Schedule up to a week ahead",
      "Guaranteed availability",
      "Flexible modifications"
    ],
    linkTo: `${createPageUrl("HowItWorks")}#pre-order-section`
  },
  {
    id: 'instant',
    icon: Zap,
    title: "Instant Delivery",
    subtitle: "Hungry now? We've got you",
    description: "Craving something delicious right now? Order from our instant menu and get hot, fresh meals delivered to your door in just 15-30 minutes.",
    image: "https://images.pexels.com/photos/3926133/pexels-photo-3926133.jpeg",
    color: "var(--secondary-accent)",
    benefits: [
      "15-30 minute delivery",
      "Hot & fresh meals",
      "Real-time tracking",
      "Wide menu selection"
    ],
    linkTo: `${createPageUrl("HowItWorks")}#instant-delivery-section`
  },
  {
    id: 'subscription',
    icon: Repeat,
    title: "Subscription",
    subtitle: "Your personalized meal plan",
    description: "Take the stress out of meal planning with Nourie's flexible subscription service. Choose your favorite meals, customize your preferences, and have fresh, delicious dishes delivered on your schedule.",
    image: "https://www.foodnify.com/wp-content/uploads/2024/09/abula-soup.jpg",
    color: "var(--yellow-accent)",
    benefits: [
      "Customized meal plans",
      "Pause anytime",
      "Weekly or monthly options",
      "Dietary preferences respected"
    ],
    linkTo: `${createPageUrl("HowItWorks")}#subscription-section`
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-rotate tabs
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const activeFeature = features[activeTab];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Choose your way to eat better
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light">
            Flexible options designed for every lifestyle
          </p>
        </motion.div>

        {/* Clean Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[var(--background-alt)]">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => {
                  setActiveTab(index);
                  setAutoPlay(false);
                }}
                className="relative px-8 py-3 rounded-full font-medium text-base transition-all duration-300"
                style={{
                  backgroundColor: activeTab === index ? 'var(--background)' : 'transparent',
                  color: activeTab === index ? feature.color : 'var(--text-muted)',
                  boxShadow: activeTab === index ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none'
                }}
              >
                <span className="flex items-center space-x-2">
                  <feature.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{feature.title}</span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto"
          >
            {/* Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${activeFeature.color}15` }}
                  >
                    <activeFeature.icon 
                      className="w-6 h-6" 
                      style={{ color: activeFeature.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[var(--text-main)]">
                      {activeFeature.title}
                    </h3>
                    <p 
                      className="text-base font-medium mt-1"
                      style={{ color: activeFeature.color }}
                    >
                      {activeFeature.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8 font-light">
                  {activeFeature.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {activeFeature.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${activeFeature.color}20` }}
                      >
                        <CheckCircle2 
                          className="w-3 h-3" 
                          style={{ color: activeFeature.color }}
                        />
                      </div>
                      <span className="text-[var(--text-main)]">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <Link 
                  to={activeFeature.linkTo}
                  className="inline-flex items-center space-x-2 text-base font-semibold group"
                  style={{ color: activeFeature.color }}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setAutoPlay(false);
              }}
              className="group"
            >
              <div className="relative w-16 h-1 rounded-full bg-[var(--background-alt)] overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: feature.color, transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeTab === index ? 1 : 0 }}
                  transition={{ 
                    duration: autoPlay && activeTab === index ? 6 : 0.3,
                    ease: "linear"
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}