
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Smartphone,
  Calendar,
  ChefHat,
  Truck,
  Zap,
  PiggyBank,
  Sparkles,
  Leaf,
  Download,
  ClipboardList,
  Repeat,
  SlidersHorizontal
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppStoreButton from "../components/common/AppStoreButton";
import GooglePlayButton from "../components/common/GooglePlayButton";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/17952748/pexels-photo-17952748.jpeg"
          alt="Communal cooking preparation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 bg-[var(--primary-accent)]/20 border border-[var(--primary-accent)]/30 rounded-full text-[var(--primary-accent)] font-medium text-sm mb-6">
              How It Works
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            How Good Food Is Made <br />
            <span className="gradient-text">Possible Again</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light max-w-3xl"
          >
            Discover the blend of timeless wisdom and modern technology that allows us to serve you better, for less.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Section 2: The New Timeline Component for Steps
const TimelineSection = ({ title, tagline, accentColor, steps, sectionId, background = "var(--background-alt)" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <section ref={ref} id={sectionId} className="py-24 md:py-32" style={{ backgroundColor: background }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto"
          >
            {tagline}
          </motion.p>
        </div>

        <div className="relative">
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full hidden md:block" width="2" height="100%">
            <motion.path
              d="M 1 0 V 1000"
              stroke={accentColor}
              strokeWidth="2"
              fill="none"
              style={{ pathLength }}
              initial={{ pathLength: 0 }}
            />
          </svg>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <TimelineItem key={index} step={step} index={index} accentColor={accentColor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ step, index, accentColor }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex md:items-center flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"}`}
    >
      <div className={`md:w-5/12 ${isEven ? 'text-left' : 'md:text-right'}`}>
        <div className="p-6 md:p-8 glass-morphism rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: `${accentColor.replace('var(','').replace(')','')}20` }}>
              <step.icon className="w-6 h-6" style={{ color: accentColor }} />
            </div>
            <h3 className="text-2xl font-semibold text-[var(--text-main)]">{step.title}</h3>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed">{step.description}</p>
        </div>
      </div>
      <div className="w-12 h-12 hidden md:flex items-center justify-center flex-shrink-0 mx-8">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: accentColor }} />
      </div>
      {/* <div className="w-5/12 hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-80 rounded-2xl overflow-hidden glass-morphism p-2"
        >
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div> */}
    </motion.div>
  );
};

// Section 3: The New Advantage Section
const AdvantageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    { icon: PiggyBank, title: "Enjoy Lower Prices", description: "By pre-ordering, you help us optimize our kitchen. We thank you by passing those savings directly on to you." },
    { icon: Sparkles, title: "Access Exclusive Deals", description: "Unlock special discounts and offers available only to our pre-order customers." },
    { icon: Leaf, title: "Reduce Waste, Increase Value", description: "Efficient planning means less food waste. This sustainable practice allows us to offer you even better value." }
  ];

  return (
    <section ref={ref} id="pre-order-advantage" className="py-24 md:py-32 bg-[var(--background)] text-[var(--text-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-[var(--primary-accent)]">Pre-Order Advantage</span></h2>
            <div className="text-xl text-[var(--text-muted)] space-y-6 font-light leading-relaxed">
              <p>In the heart of every Nigerian home, generations before us mastered a profound art: the communal kitchen. They knew that true abundance lay not just in the harvest, but in shared effort and smart planning. This was how families thrived.</p>
              <p>But modern life has sped up. We're bringing that timeless wisdom back, powered by today's technology. Our pre-order model is your modern-day communal kitchen, a way to reclaim the financial freedom and nourishing abundance of yesteryears, tailor-made for your busy week.</p>
            </div>
          </motion.div>
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1), ease: "easeOut" }}
                className="glass-morphism p-8 rounded-2xl flex items-start space-x-6 hover:bg-[var(--background-alt)]/60 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--primary-accent)]/5 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-[var(--primary-accent)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-main)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 4: The Main Page Component
export default function HowItWorks() {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const el = document.querySelector(location.hash);
  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   }
  // }, [location]);

  const preOrderSteps = [
    { icon: Calendar, title: "Plan Your Week", description: "Browse our menu and schedule your meals for any day, at any time. Perfect for busy lives.", image: "https://media.istockphoto.com/id/1491200150/vector/daily-meal-plan-isolated-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=JPfnFLr6Tpfns6iPyca58CEdsDi1xcTWHOpQpZpVkIc=" },
    { icon: ChefHat, title: "Crafted Fresh For You", description: "Our chefs prepare your order with the finest ingredients, timed perfectly for your delivery slot.", image: "https://lifeofbaash.wordpress.com/wp-content/uploads/2018/01/picsart_01-02-02-08-27-1.png" },
    { icon: Truck, title: "Delivered On Your Time", description: "Your meal arrives hot and ready to enjoy, exactly when you planned. No waiting, no hassle.", image: "https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?semt=ais_hybrid&w=740&q=80" }
  ];

  const subscriptionSteps = [
    { icon: ClipboardList, title: "Set Your Plan", description: "Choose your favorite meals, set your delivery frequency, and create a personalized plan that fits your lifestyle.", image: "https://static.vecteezy.com/system/resources/previews/014/453/501/non_2x/document-plan-icon-simple-style-vector.jpg" },
    { icon: Repeat, title: "Automated Deliveries", description: "Sit back and relax. Your delicious, pre-selected meals will be automatically delivered on your schedule.", image: "https://cdn-icons-png.freepik.com/512/7364/7364288.png" },
    { icon: SlidersHorizontal, title: "Flexible Management", description: "Life happens. Easily pause, skip a delivery, or modify your meal plan anytime directly from the app.", image: "https://cdn-icons-png.flaticon.com/512/8759/8759165.png" }
  ];

  const instantSteps = [
    { icon: Smartphone, title: "Order on a Whim", description: "Feeling hungry now? Open the app and choose from our menu of ready-to-cook dishes.", image: "https://www.pngitem.com/pimgs/m/529-5292567_food-delivery-app-png-transparent-png.png" },
    { icon: Zap, title: "Instant Kitchen Action", description: "Your order hits our kitchen immediately, and our team springs into action to cook it fresh.", image: "https://www.ogbongeblog.com/wp-content/uploads/2023/11/nigerian_chef_photo.png" },
    { icon: Truck, title: "Speedy Delivery", description: "A hot, delicious meal arrives at your doorstep in minutes. The perfect solution for sudden cravings.", image: "https://www.seekpng.com/png/detail/39-399896_collection-of-free-flamen-clipart-pdf-download-speed.png" }
  ];

  return (
    <div className="bg-[var(--background)] overflow-hidden">
      <HeroSection />

      <TimelineSection
        sectionId="pre-order-section"
        title="The Planner's Choice: <span style='color:var(--primary-accent)' class='font-medium'>Pre-Order</span>"
        tagline="For those who love to plan. Enjoy convenience, consistency, and smart savings."
        accentColor="var(--primary-accent)"
        steps={preOrderSteps}
        background="var(--background-alt)"
      />

      <AdvantageSection />

      <TimelineSection
        sectionId="subscription-section"
        title="The Smart Choice: <span style='color:var(--yellow-accent)' class='font-medium'>Subscriptions</span>"
        tagline="Automate your meals, simplify your life. The ultimate set-and-forget solution for delicious food."
        accentColor="var(--yellow-accent)"
        steps={subscriptionSteps}
        background="var(--background-alt)"
      />

      <TimelineSection
        sectionId="instant-delivery-section"
        title="For The Moment: <span style='color:var(--secondary-accent)' class='font-medium'>Instant Delivery</span>"
        tagline="For when hunger strikes. Get hot, delicious meals delivered in minutes."
        accentColor="var(--secondary-accent)"
        steps={instantSteps}
        background="var(--background)"
      />

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-[var(--background-alt)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--yellow-accent)]/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glass-morphism p-16 rounded-3xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Your Perfect Meal is Just <br />
              <span className="gradient-text">One Tap Away</span>
            </motion.h2>

            <motion.p
              className="text-xl text-[var(--text-muted)] mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Join thousands of Nigerians who have made Nourie their go-to solution for delicious, affordable meals. Whether you plan ahead or order on-demand, we're here to serve you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link to={createPageUrl("waitinglist")}>
              <AppStoreButton variant="default" />
              </Link>
                <Link to={createPageUrl("waitinglist")}>
              <GooglePlayButton variant="default" />
              </Link>
            
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8 border-t border-[var(--glass-border)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--primary-accent)] mb-1">Up to 20%</div>
                <div className="text-[var(--text-muted)] text-sm">Savings on Pre-Orders</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--secondary-accent)] mb-1">25min</div>
                <div className="text-[var(--text-muted)] text-sm">Avg Delivery</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--yellow-accent)] mb-1">50+</div>
                <div className="text-[var(--text-muted)] text-sm">Chef-Designed Meals</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--primary-accent)] mb-1">30%</div>
                <div className="text-[var(--text-muted)] text-sm">Savings</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
