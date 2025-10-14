import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "With prices everywhere going crazy, Nourie has been a lifesaver. I can finally enjoy amazing, high-quality food without breaking the bank. It's more than just dinner—it's peace of mind.",
    name: "Amina Hassan",
    role: "Software Engineer",
    location: "Wuse II, Abuja",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5
  },
  {
    id: 2,
    text: "The pre-order feature is genius! I plan my entire week's meals on Sunday, and everything just works perfectly. The food is always fresh and the savings are real.",
    name: "David Okafor",
    role: "Marketing Manager",
    location: "Maitama, Abuja",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5
  },
  {
    id: 3,
    text: "As a busy mother of three, Nourie has transformed how we eat. The kids love the food, I love the convenience, and my husband loves that we're saving money!",
    name: "Sarah Adebayo",
    role: "Entrepreneur",
    location: "Garki, Abuja",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-32 bg-[var(--background-alt)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
            What our <span className="gradient-text">customers</span> say
          </h2>
          <p className="text-xl text-[var(--text-muted)] font-light">
            Real stories from real people who love Nourie
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-morphism p-12 rounded-3xl text-center max-w-4xl mx-auto relative"
        >
          {/* Rating Stars */}
          <div className="flex justify-center space-x-1 mb-8">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[var(--yellow-accent)] text-[var(--yellow-accent)]" />
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote 
            key={`quote-${currentTestimonial.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-light text-[var(--text-main)] leading-relaxed mb-8 italic"
          >
            "{currentTestimonial.text}"
          </motion.blockquote>

          {/* Customer Info */}
          <motion.div
            key={`info-${currentTestimonial.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-4"
          >
            <img 
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[var(--primary-accent)]"
            />
            <div className="text-left">
              <h4 className="text-xl font-semibold text-[var(--text-main)]">{currentTestimonial.name}</h4>
              <p className="text-[var(--secondary-accent)] font-medium">{currentTestimonial.role}</p>
              <p className="text-[var(--text-muted)] text-sm">{currentTestimonial.location}</p>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[var(--background-alt)]/60 backdrop-blur-md border border-[var(--glass-border)] rounded-full flex items-center justify-center text-[var(--primary-accent)] hover:bg-[var(--primary-accent)] hover:text-[#121212] transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[var(--background-alt)]/60 backdrop-blur-md border border-[var(--glass-border)] rounded-full flex items-center justify-center text-[var(--primary-accent)] hover:bg-[var(--primary-accent)] hover:text-[#121212] transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[var(--primary-accent)] w-8' 
                  : 'bg-[var(--text-muted)]/30 hover:bg-[var(--text-muted)]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}