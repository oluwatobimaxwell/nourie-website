import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ClipboardCheck, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "Discover & Design",
    description: "Connect with our team to assess your unique needs and co-create a tailored meal solution."
  },
  {
    icon: ClipboardCheck,
    title: "Experience & Approve",
    description: "Approve your custom plan and, if desired, enjoy a tasting session to experience Nourie's quality firsthand."
  },
  {
    icon: Rocket,
    title: "Launch & Thrive",
    description: "Seamless implementation means your team enjoys fresh, delicious meals, while we handle the logistics."
  }
];

export default function OurProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--background-alt)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Your Path to a
            <br />
            <span className="gradient-text">Nourished Workplace</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
            Partnering with Nourie is a straightforward journey, designed for your convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative text-center group"
            >
              {/* Connector Line (hidden on mobile, shown on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--primary-accent)] to-transparent"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="glass-morphism p-6 rounded-2xl hover:bg-[var(--background)]/60 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">{step.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed font-light">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}