import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function PartnershipCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-morphism p-12 lg:p-16 rounded-3xl text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Ready to Transform Your
            <br />
            <span className="gradient-text">Workplace Dining?</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Our dedicated solutions team is ready to craft a partnership that aligns with your vision and enhances your employee experience.
          </p>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-[var(--secondary-accent)]/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-[var(--secondary-accent)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-main)] mb-2">Email Us</h3>
              <a href="mailto:partnerships@eatnourie.com" className="text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors">
                partnerships@eatnourie.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-[var(--primary-accent)]/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-[var(--primary-accent)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-main)] mb-2">Call Us</h3>
              <a href="tel:+2348130259200" className="text-[var(--text-muted)] hover:text-[var(--primary-accent)] transition-colors">
                +234 813 025 9200
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-[var(--yellow-accent)]/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[var(--yellow-accent)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-main)] mb-2">Visit Us</h3>
              <p className="text-[var(--text-muted)] text-sm text-center">
                Suite 1, Elite Wash, Bangui Street<br />
                Wuse II, Abuja
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to={createPageUrl("PartnershipForm")}
              className="inline-flex items-center space-x-3 px-10 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}