import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Zap, Repeat, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from "react-router-dom";
import { createPageUrl } from '@/utils';

const features = [
  {
    id: 'pre-order',
    icon: Calendar,
    title: "Smart Pre-Ordering",
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
    title: "Lightning-Fast Delivery",
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
    title: "Flexible Meal Subscriptions",
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
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const activeFeature = features[activeTab];

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-[var(--background-alt)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 top-20 right-20"
          style={{ backgroundColor: activeFeature.color }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4 leading-tight">
            Three ways to experience <br />
            <span className="gradient-text">exceptional food</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light max-w-2xl mx-auto">
            Whether you're a planner or spontaneous, we've designed the perfect dining experience for your lifestyle.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex glass-morphism rounded-2xl p-2 gap-2">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => {
                  setActiveTab(index);
                  setAutoPlay(false);
                }}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-[var(--background)] shadow-lg'
                    : 'hover:bg-[var(--background)]/50'
                }`}
                style={{
                  color: activeTab === index ? feature.color : 'var(--text-muted)'
                }}
              >
                <feature.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{feature.title}</span>
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
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${activeFeature.color.replace('var(','').replace(')','')}20` }}
                >
                  <activeFeature.icon 
                    className="w-8 h-8" 
                    style={{ color: activeFeature.color }}
                  />
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[var(--text-main)]">
                    {activeFeature.title}
                  </h3>
                  <p 
                    className="text-lg font-medium mt-1"
                    style={{ color: activeFeature.color }}
                  >
                    {activeFeature.subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-[var(--text-muted)] leading-relaxed font-light mb-8">
                {activeFeature.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                {activeFeature.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 
                      className="w-5 h-5 flex-shrink-0" 
                      style={{ color: activeFeature.color }}
                    />
                    <span className="text-[var(--text-main)]">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link 
                to={activeFeature.linkTo}
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: `${activeFeature.color.replace('var(','').replace(')','')}20`,
                  color: activeFeature.color,
                  border: `1px solid ${activeFeature.color.replace('var(','').replace(')','')}40`
                }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </motion.div>
              
              {/* Decorative element */}
              <div 
                className="absolute -inset-4 rounded-3xl blur-xl opacity-20 -z-10"
                style={{ backgroundColor: activeFeature.color }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setAutoPlay(false);
              }}
              className="relative w-12 h-1 rounded-full bg-[var(--background)] overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: features[index].color, transformOrigin: 'left'  }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeTab === index ? 1 : 0 }}
                transition={{ duration: autoPlay && activeTab === index ? 5 : 0.3 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}