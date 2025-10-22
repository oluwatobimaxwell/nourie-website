import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a45cd32d6986d16467cc0d/fdf14ea4d_SimulatorScreenshot-iPhone16Plus-2025-10-19at104358-portrait.png",
    alt: "Pre-order grilled chicken meal"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a45cd32d6986d16467cc0d/add7cfd4c_SimulatorScreenshot-iPhone16Plus-2025-10-14at131609-portrait.png",
    alt: "Browse rice specials"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a45cd32d6986d16467cc0d/c7ccb9b26_SimulatorScreenshot-iPhone16Plus-2025-10-14at131705-portrait.png",
    alt: "Schedule your meals"
  }
];

export default function AppScreensCarousel({ mousePosition }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToNext = () => {
    setAutoPlay(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const goToPrevious = () => {
    setAutoPlay(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{
        transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`,
      }}
    >
      {/* Main Screenshot Display */}
      <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] mb-8 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "linear", duration: 0.3 },
              opacity: { duration: 0.2 }
            }}
            className="relative"
          >
            <img
              src={screenshots[currentIndex].url}
              alt={screenshots[currentIndex].alt}
              className="w-full h-auto"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Below Screenshot */}
      <div className="flex items-center space-x-4 z-20">
        <motion.button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center hover:bg-[var(--background-alt)] transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 text-[var(--text-main)]" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoPlay(false);
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="group"
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[var(--primary-accent)]'
                    : 'w-2 bg-[var(--text-muted)]/30 group-hover:bg-[var(--text-muted)]/50'
                }`}
              />
            </button>
          ))}
        </div>

        <motion.button
          onClick={goToNext}
          className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center hover:bg-[var(--background-alt)] transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 text-[var(--text-main)]" />
        </motion.button>
      </div>
    </div>
  );
}