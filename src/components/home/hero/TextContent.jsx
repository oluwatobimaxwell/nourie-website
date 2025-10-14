import React from 'react';
import { motion } from 'framer-motion';
import AppStoreButton from '../../common/AppStoreButton';
import GooglePlayButton from '../../common/GooglePlayButton';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function TextContent({ isMobileView, socialLinks }) {
  return (
    <motion.div
      className={`text-center ${!isMobileView ? 'lg:text-left' : ''} relative ${isMobileView ? 'z-10' : 'z-20'}`}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: isMobileView ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-8 ${isMobileView ? 'text-white' : ''}`}
      >
        Food that{" "}
        <span className="gradient-text">brings joy</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: isMobileView ? 0.2 : 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`text-xl md:text-2xl leading-relaxed font-light mb-12 max-w-2xl mx-auto ${!isMobileView ? 'lg:text-[var(--text-muted)] lg:mx-0' : 'text-gray-200'} ${isMobileView ? 'text-gray-200' : 'text-[var(--text-muted)]'}`}
      >
        Nigeria's leading mobile-first food platform. Quality meals made accessible, reliable, and delightful for everyone.
      </motion.p>

      {/* App Store Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: isMobileView ? 0.4 : 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`flex flex-col sm:flex-row gap-6 mb-10 ${isMobileView ? 'justify-center' : 'justify-center lg:justify-start'}`}
      >
         <Link to={createPageUrl("waitinglist")}>
        <AppStoreButton variant="default" />
        </Link>
         <Link to={createPageUrl("waitinglist")}>
        <GooglePlayButton variant="default" />
        </Link>
      </motion.div>
      
      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: isMobileView ? 0.6 : 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`flex items-center space-x-6 ${isMobileView ? 'justify-center' : 'justify-center lg:justify-start'}`}
      >
        {socialLinks.map((social, index) => (
          <motion.a 
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${social.hoverColor} ${isMobileView ? 'text-gray-300' : 'text-gray-300 lg:text-[var(--text-muted)]'}`}
            whileHover={{ y: -3, scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: isMobileView ? 0.8 + index * 0.1 : 1.6 + index * 0.1 }}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}