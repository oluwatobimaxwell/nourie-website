
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Instagram, 
  Twitter, 
  Linkedin,
  Facebook,
} from 'lucide-react';

export default function PremiumFooter() {
  const companyLinks = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "How It Works", path: createPageUrl("HowItWorks") },
    { name: "Partnership", path: createPageUrl("CorporatePartnership") },
    { name: "Blog", path: createPageUrl("Blogs") },
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
    <footer className="relative bg-[var(--background-alt)] text-[var(--text-main)] overflow-hidden">
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
            
            {/* Brand Identity & Mission */}
            <div className="lg:col-span-2">
              <Link to={createPageUrl("Home")} className="block mb-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://usc1.contabostorage.com/f1c12e4ccb9c4c7997808c3aa039be4b:nourie-prod/media/nourie-logo-v2.png" 
                    alt="Nourie Logo" 
                    className="h-12" 
                  />
                  <span className="text-2xl font-bold text-[var(--text-main)]">Nourie</span>
                </div>
              </Link>
              
              <p className="text-2xl font-light text-[var(--text-main)] mb-8 italic">
                Eat with us.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full glass-morphism flex items-center justify-center text-[var(--text-muted)] transition-colors duration-300 ${social.hoverColor}`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-[var(--text-main)]">Company</h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
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

            {/* Get Started */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-[var(--text-main)]">Get Started</h4>
              <div className="flex flex-col space-y-4">
                <Link
                  to={createPageUrl("WaitingList")}
                  className="block text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors duration-300 font-medium"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Join Waitlist
                </Link>
                
                <Link to={createPageUrl("WaitingList")}>
                  <motion.div 
                    className="group w-full glass-morphism px-4 py-2.5 rounded-xl flex items-center space-x-3 hover:bg-[var(--background-alt)]/60 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-[var(--text-muted)]">Download on the</p>
                      <p className="text-sm font-semibold text-[var(--text-main)]">App Store</p>
                    </div>
                  </motion.div>
                </Link>
                
                <Link to={createPageUrl("WaitingList")}>
                  <motion.div 
                    className="group w-full glass-morphism px-4 py-2.5 rounded-xl flex items-center space-x-3 hover:bg-[var(--background-alt)]/60 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.609 1.814L13.792 12.01L3.61 22.186C3.483 22.284 3.324 22.33 3.164 22.316C2.868 22.291 2.636 22.046 2.61 21.75V2.734C2.593 2.42 2.82 2.155 3.133 2.124C3.298 2.105 3.46 2.155 3.58 2.26L3.609 1.814Z" fill="#32BBFF"/>
                      <path d="M20.415 10.262L18.153 8.982L13.793 12.008L18.153 15.035L20.415 13.755C21.055 13.395 21.055 12.441 20.415 12.081V12.081L20.415 10.262Z" fill="#FFC932"/>
                      <path d="M18.153 15.035L13.793 12.009L3.61 22.186C3.903 22.423 4.316 22.373 4.549 22.125L18.153 9.619V15.035Z" fill="#00E57C"/>
                      <path d="M18.153 8.982L4.549 1.875C4.316 1.627 3.903 1.577 3.61 1.814L13.793 12.008L18.153 8.982Z" fill="#FF3B5D"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-[var(--text-muted)]">Get it on</p>
                      <p className="text-sm font-semibold text-[var(--text-main)]">Google Play</p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--glass-border)] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} Nourie. All Rights Reserved.
            </p>

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
