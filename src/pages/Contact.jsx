
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import FAQ from "../components/contact/FAQ";
import LocationSection from "../components/contact/LocationSection";
import AppStoreButton from "../components/common/AppStoreButton";
import GooglePlayButton from "../components/common/GooglePlayButton";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const QuickContactCard = ({ title, description, action, bgGradient, href }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className={`${bgGradient} rounded-3xl p-8 text-center relative overflow-hidden group h-full`}>
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
        <div className="flex items-center justify-center space-x-3 text-white font-medium">
          <span>{action}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500"></div>
    </div>
  </motion.a>
);

export default function Contact() {

  return (
    <div className="bg-[var(--background)] text-[var(--text-main)] overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative py-48 bg-[var(--background)] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/premium-photo/happiness-pride-portrait-black-woman-desk-with-smile-computer-african-entrepreneur-with-smile-happy-face-businesswoman-office-small-business-startup-receptionist-agency_590464-197844.jpg"
            alt="Friendly Nigerian support person"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto border-2 border-[var(--primary-accent)]/50 rounded-full flex items-center justify-center glass-morphism">
              <MessageCircle className="w-10 h-10 text-[var(--primary-accent)]" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto"
          >
            We're here to help and answer any questions you might have. 
            Reach out to us through any of the channels below.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-24 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
              Multiple Ways to <span className="gradient-text">Reach Us</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Choose the method that works best for you. We're committed to responding quickly and helpfully.
            </p>
          </motion.div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-2 gap-8">
            <QuickContactCard
              title="WhatsApp Support"
              description="Get instant answers and quick support directly on WhatsApp. Perfect for urgent questions or real-time assistance."
              action="Start Chat"
              bgGradient="bg-gradient-to-br from-[#25D366] to-[#128C7E]"
              href="https://wa.me/2347044487002"
            />
            
            <QuickContactCard
              title="Email Support"
              description="For detailed inquiries, feedback, or business matters. We typically respond within 2-4 hours during business days."
              action="Send Email"
              bgGradient="bg-gradient-to-br from-[var(--primary-accent)] to-[#356859]"
              href="mailto:hello@eatnourie.com?subject=Nourie Inquiry"
            />
          </div>
        </div>
      </section>

      {/* Location Section with Map */}
      <LocationSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience <span className="text-white">Nourie?</span>
            </h2>
            <p className="text-xl text-[#121212]/90 mb-8 max-w-2xl mx-auto">
              Don't just get in touch—join the movement. Download our app and discover how good food can be accessible again.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link to={createPageUrl("waitinglist")}>
              <AppStoreButton variant="solid" />
              </Link>
               <Link to={createPageUrl("waitinglist")}>
              <GooglePlayButton variant="solid" />
              </Link>            
              </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
