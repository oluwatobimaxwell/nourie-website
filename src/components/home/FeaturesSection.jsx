
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from "react-router-dom";
import { createPageUrl } from '@/utils';
import { Calendar, Zap, Repeat, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: "Smart Pre-Ordering",
    subtitle: "Plan ahead, save more",
    description: "Schedule your meals up to a week in advance and enjoy up to 30% savings. Perfect for busy professionals who value both convenience and cost-effectiveness.",
    image: "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg",
    color: "var(--primary-accent)",
    linkTo: `${createPageUrl("HowItWorks")}#pre-order-section`
  },
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    subtitle: "Hungry now? We've got you",
    description: "Craving something delicious right now? Order from our instant menu and get hot, fresh meals delivered to your door in just 15-30 minutes.",
    image: "https://images.pexels.com/photos/3926133/pexels-photo-3926133.jpeg",
    color: "var(--secondary-accent)",
    reverse: true,
    linkTo: `${createPageUrl("HowItWorks")}#instant-delivery-section`
  },
  {
    icon: Repeat,
    title: "Flexible Meal Subscriptions",
    subtitle: "Your personalized meal plan, delivered",
    description: "Take the stress out of meal planning with Nourie's flexible subscription service. Choose your favorite meals, customize your preferences, and have fresh, delicious dishes delivered on your schedule, saving you valuable time and money. Enjoy the convenience of regular deliveries, with the freedom to pause or adjust your plan anytime.",
    image: "https://www.foodnify.com/wp-content/uploads/2024/09/abula-soup.jpg",
    color: "var(--yellow-accent)",
    linkTo: `${createPageUrl("HowItWorks")}#subscription-section`
  }
];

const FeatureBlock = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-24 bg-[var(--background)] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ 
            backgroundColor: feature.color,
            top: feature.reverse ? 'auto' : '10%',
            bottom: feature.reverse ? '10%' : 'auto',
            left: feature.reverse ? '10%' : 'auto',
            right: feature.reverse ? 'auto' : '10%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${feature.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Content */}
          <div className={feature.reverse ? 'lg:col-start-2' : ''}>
            <div className="flex items-center space-x-4 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${feature.color.replace('var(','').replace(')','')}20` }}
              >
                <feature.icon 
                  className="w-8 h-8" 
                  style={{ color: feature.color }}
                />
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] leading-tight">
                  {feature.title}
                </h3>
                <p 
                  className="text-xl font-medium mt-2"
                  style={{ color: feature.color }}
                >
                  {feature.subtitle}
                </p>
              </div>
            </div>
            
            <p className="text-xl text-[var(--text-muted)] leading-relaxed font-light mb-8">
              {feature.description}
            </p>

            <Link 
              to={feature.linkTo}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: `${feature.color.replace('var(','').replace(')','')}20`,
                color: feature.color,
                border: `1px solid ${feature.color.replace('var(','').replace(')','')}40`
              }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image */}
          <div className={`relative ${feature.reverse ? 'lg:col-start-1' : ''}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div 
              className="absolute -inset-4 rounded-3xl blur-xl opacity-20 -z-10"
              style={{ backgroundColor: feature.color }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-[var(--background)] relative">
      {/* Section Header */}
      <div className="py-24 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 leading-tight">
              Three ways to experience <br />
              <span className="gradient-text">exceptional food</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] leading-relaxed font-light max-w-3xl mx-auto">
              Whether you're a planner or spontaneous, we've designed the perfect dining experience for your lifestyle.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Feature Blocks */}
      {features.map((feature, index) => (
        <FeatureBlock key={index} feature={feature} index={index} />
      ))}
    </section>
  );
}
