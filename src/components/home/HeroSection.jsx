import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import TextContent from './hero/TextContent';
import DesktopPhoneMockup from './hero/DesktopPhoneMockup';
import MobileHeroDisplay from './hero/MobileHeroDisplay';
import DesktopScrollIndicator from './hero/DesktopScrollIndicator';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    if (!isMobile) {
        window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/eatnourie?igsh=MWJrajl4eTU5bWlrYw==", hoverColor: "hover:text-[#E4405F]" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/EatNourie?s=09", hoverColor: "hover:text-[#1DA1F2]" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/eat-nourie/", hoverColor: "hover:text-[#0A66C2]" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1BqHxqsrVA/?mibextid=wwXIfr", hoverColor: "hover:text-[#1877F2]" },
  ];

  const scrollDown = () => {
    const nextSection = containerRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[var(--background)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl hidden lg:block"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl hidden lg:block"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--yellow-accent)]/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
      </div>
      
      {isMobile ? (
        <div className="lg:hidden relative min-h-[80vh] flex flex-col items-center justify-center py-24 px-4 text-center">
            {/* Background Image for Mobile */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                    alt="Delicious food background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
          <TextContent isMobileView={true} socialLinks={socialLinks} />
        </div>
      ) : (
        <div className="hidden lg:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}>
              <TextContent isMobileView={false} socialLinks={socialLinks} />
            </div>
            <DesktopPhoneMockup mousePosition={mousePosition} />
          </div>
          <DesktopScrollIndicator />
        </div>
      )}
    </section>
  );
}