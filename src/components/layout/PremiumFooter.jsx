
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Twitter, 
  Linkedin,
  Facebook,
  Apple,
  Play,
} from 'lucide-react';

export default function PremiumFooter() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const navigationLinks = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "How It Works", path: createPageUrl("HowItWorks") },
    { name: "Contact", path: createPageUrl("Contact") },
  ];

  const supportLinks = [
    { name: "Help Center", path: createPageUrl("Contact") },
    { name: "Privacy Policy", path: createPageUrl("PrivacyPolicy") },
    { name: "Terms of Service", path: createPageUrl("TermsOfService") },
    { name: "Cookie Policy", path: createPageUrl("CookiePolicy") },
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/eatnourie?igsh=MWJrajl4eTU5bWlrYw==", 
      hoverColor: "hover:text-[#E4405F]"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      href: "https://x.com/EatNourie?s=09", 
      hoverColor: "hover:text-[#1DA1F2]"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/eat-nourie/", 
      hoverColor: "hover:text-[#0A66C2]"
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1BqHxqsrVA/?mibextid=wwXIfr", 
      hoverColor: "hover:text-[#1877F2]"
    },
  ];

  return (
    <footer ref={containerRef} className="relative bg-[var(--background-alt)] text-[var(--text-main)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A8D5BA' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm60 60c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
            
            {/* Brand Info */}
            <div className="lg:col-span-2">
              <Link to={createPageUrl("Home")} className="block mb-6">
                <div className="flex items-center space-x-3">
                    <img 
                      src="https://boolean-bucket.nyc3.cdn.digitaloceanspaces.com/nourie/NOURIE%20LOGO.png" 
                      alt="Nourie Logo" 
                      className="h-12 hidden dark:block" 
                    />
                    <img 
                      src="https://boolean-bucket.nyc3.cdn.digitaloceanspaces.com/nourie/NOURIE%20LOGO.png" 
                      alt="Nourie Logo" 
                      className="h-12 dark:hidden" 
                    />
                    <span className="text-2xl font-bold text-[var(--primary-accent)]">Nourie</span>
                </div>
              </Link>
              <p className="text-[var(--text-muted)] max-w-sm leading-relaxed mb-8">
                Food that brings joy. Nigeria's leading mobile-first food platform, making quality meals accessible to everyone.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>Wuse II, Abuja, FCT Nigeria</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                  <Phone className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>+234 704 448 7002</span>
                </div>
                <div className="flex items-center space-x-3 text-[var(--text-muted)]">
                  <Mail className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>hello@eatnourie.com</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-[var(--text-main)]">Company</h4>
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors duration-300"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-[var(--text-main)]">Support</h4>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors duration-300"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-[var(--text-main)]">Get The App</h4>
              <div className="space-y-4">
              <Link to={createPageUrl("waitinglist")}
              className="group w-full glass-morphism text-[var(--text-main)] px-4 py-3 rounded-xl font-medium flex items-center space-x-3 hover:bg-[var(--background-alt)]/60 transition-all duration-300">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Apple className="w-5 h-5" />

                  <span>iOS App</span>
                 
                </motion.div>
              </Link>
              <Link to={createPageUrl("waitinglist")}
              className="group w-full glass-morphism text-[var(--text-main)] px-4 py-3 rounded-xl font-medium flex items-center space-x-3 hover:bg-[var(--background-alt)]/60 transition-all duration-300">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  <span>Android App</span>
                </motion.div>
                   </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--glass-border)] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-[var(--text-muted)]">&copy; {new Date().getFullYear()} Nourie. All Rights Reserved.</p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[var(--text-muted)] transition-colors duration-300 ${social.hoverColor}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Brand tagline */}
            <div className="text-sm text-[var(--text-muted)]">
              Made with <span className="text-[var(--primary-accent)]">♥</span> in Abuja
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
