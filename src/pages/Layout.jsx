
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import PremiumFooter from "../components/layout/PremiumFooter";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";

function LayoutContent({ children, currentPageName }) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  const { scrollYProgress } = useScroll();
  
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(18, 18, 18, 0)", "rgba(18, 18, 18, 0.95)"]
  );
   const navBackgroundLight = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const isHomePage = location.pathname === createPageUrl("Home") || location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home") },
    { 
      name: "About", 
      path: createPageUrl("About"),
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", path: `${createPageUrl("About")}#our-story` },
        { name: "Mission & Vision", path: `${createPageUrl("About")}#mission-vision` },
        { name: "Our Values", path: `${createPageUrl("About")}#values` },
        { name: "Meet Our Team", path: `${createPageUrl("About")}#team` },
        { name: "Our Name", path: `${createPageUrl("About")}#our-name` },
      ]
    },
    { name: "How It Works", path: createPageUrl("HowItWorks") },
    { name: "Partnership", path: createPageUrl("CorporatePartnership") },
    { name: "Contact", path: createPageUrl("Contact") },
  ];

  const isActiveMenuItem = (itemPath) => {
    if (location.pathname === "/" && itemPath === createPageUrl("Home")) {
      return true;
    }
    return location.pathname === itemPath;
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-main)] transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800&display=swap');
        
        :root {
          --background: #FFFFFF;
          --background-alt: #F5F5F5;
          --primary-accent: #356859;
          --secondary-accent: #F9A03F;
          --yellow-accent: #FFD166;
          --text-main: #121212;
          --text-muted: #555555;
          --glass-bg: rgba(255, 255, 255, 0.4);
          --glass-border: rgba(53, 104, 89, 0.2);
          --dropdown-bg: rgba(255, 255, 255, 0.98);
        }
        
        [data-theme='dark'] {
          --background: #121212;
          --background-alt: #1D1D1D;
          --primary-accent: #A8D5BA;
          --secondary-accent: #FFCB8E;
          --yellow-accent: #FFD166;
          --text-main: #F5F5F5;
          --text-muted: #B0B0B0;
          --glass-bg: rgba(29, 29, 29, 0.4);
          --glass-border: rgba(168, 213, 186, 0.1);
          --dropdown-bg: rgba(29, 29, 29, 0.98);
        }
        
        * {
          font-family: 'Lexend', sans-serif;
        }
        
        .glass-morphism {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--secondary-accent) 0%, var(--yellow-accent) 50%, var(--primary-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <motion.nav 
        className="fixed top-0 w-full z-50 transition-colors duration-300"
        style={{
          backgroundColor: (isHomePage && window.innerWidth < 1024) 
            ? 'transparent' 
            : (theme === 'dark' ? navBackground : navBackgroundLight),
          backdropFilter: (isHomePage && window.innerWidth < 1024) ? 'none' : 'blur(12px)',
        }}
      >
        <div 
          className={`transition-all duration-500 ${(isHomePage && window.innerWidth < 1024) ? '' : 'border-b border-[var(--glass-border)]'}`}
          style={{ borderColor: scrollY > 50 ? 'var(--glass-border)' : 'transparent' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link 
                  to={createPageUrl("Home")} 
                  className="flex items-center group space-x-3"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <img 
                      src="https://boolean-bucket.nyc3.cdn.digitaloceanspaces.com/nourie/NOURIE%20LOGO.png" 
                      alt="Nourie Logo" 
                      className="h-10 hidden dark:block" 
                    />
                    <img 
                      src="https://boolean-bucket.nyc3.cdn.digitaloceanspaces.com/nourie/NOURIE%20LOGO.png" 
                      alt="Nourie Logo" 
                      className="h-10 dark:hidden" 
                    />
                  </motion.div>
                  <span className="text-2xl font-bold text-[var(--primary-accent)] hidden sm:block">Nourie</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="flex items-center">
                <div className="hidden md:flex items-center space-x-8">
                  {navigationItems.map((item) => (
                    item.hasDropdown ? (
                      <div 
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => setAboutDropdownOpen(true)}
                        onMouseLeave={() => setAboutDropdownOpen(false)}
                      >
                        <Link
                          to={item.path}
                          className={`relative text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                            isActiveMenuItem(item.path) 
                              ? 'text-[var(--primary-accent)]' 
                              : 'text-[var(--text-muted)] hover:text-[var(--primary-accent)]'
                          }`}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                          <div className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-300 bg-[var(--primary-accent)] ${
                            isActiveMenuItem(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`} />
                        </Link>
                        
                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {aboutDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 w-56 rounded-2xl shadow-xl py-2 border border-[var(--glass-border)]"
                              style={{ 
                                backgroundColor: 'var(--dropdown-bg)',
                                backdropFilter: 'blur(20px)'
                              }}
                            >
                              {item.dropdownItems.map((dropdownItem, idx) => (
                                <Link
                                  key={idx}
                                  to={dropdownItem.path}
                                  className="block px-4 py-3 text-sm text-[var(--text-muted)] hover:text-[var(--primary-accent)] hover:bg-[var(--background-alt)]/50 transition-all duration-200"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`relative text-sm font-medium transition-all duration-300 group ${
                          isActiveMenuItem(item.path) 
                            ? 'text-[var(--primary-accent)]' 
                            : 'text-[var(--text-muted)] hover:text-[var(--primary-accent)]'
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <div className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-300 bg-[var(--primary-accent)] ${
                          isActiveMenuItem(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`} />
                      </Link>
                    )
                  ))}
                      <Link to={createPageUrl("waitinglist")}>
                  <motion.button 
                    className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212] hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    
                    Join Waitlist
                  </motion.button>
                  </Link>                  
                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 rounded-full glass-morphism text-[var(--text-main)]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <motion.button
                    className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0, 
            height: mobileMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:hidden overflow-hidden border-b border-[var(--glass-border)]"
        >
          <div className="px-4 py-6 space-y-4 glass-morphism">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: mobileMenuOpen ? 1 : 0, 
                  x: mobileMenuOpen ? 0 : -20 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: mobileMenuOpen ? index * 0.1 : 0,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <Link
                  to={item.path}
                  className={`block text-base font-medium transition-colors duration-300 ${
                    isActiveMenuItem(item.path) 
                      ? 'text-[var(--primary-accent)]' 
                      : 'text-[var(--text-muted)] hover:text-[var(--primary-accent)]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
        <Link to={createPageUrl("waitinglist")}>
            <motion.div 
              className="border-t border-[var(--glass-border)] pt-6 mt-6 flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
              transition={{ delay: mobileMenuOpen ? 0.6 : 0 }}
            >

              <motion.button 
                className="w-full px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join WaitList
              </motion.button>
      

              <motion.button
                  onClick={toggleTheme}
                  className="p-3 ml-4 rounded-full glass-morphism text-[var(--text-main)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.button>
            </motion.div>
                    </Link>         
                     </div>
        </motion.div>
      </motion.nav>

      <main className={isHomePage ? "" : "pt-20"}>
        {children}
      </main>

      <PremiumFooter />
    </div>
  );
}

export default function Layout({ children, currentPageName }) {
  return (
    <ThemeProvider>
      <LayoutContent currentPageName={currentPageName}>
        {children}
      </LayoutContent>
    </ThemeProvider>
  )
}
