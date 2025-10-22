import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--background-alt)] relative overflow-hidden border-b">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 tracking-tight">
            Stay <span className="gradient-text">Inspired</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[var(--text-muted)] mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Join thousands of food lovers receiving weekly stories, recipes, and exclusive insights from the Nourie kitchen.
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mb-16"
          >
            {!isSubmitted ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-14 pr-5 py-4 rounded-full glass-morphism text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] border border-[var(--glass-border)] transition-all duration-300 text-base"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center space-x-3 py-5 px-8 glass-morphism border border-[var(--glass-border)] rounded-full shadow-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-[var(--primary-accent)]" />
                <span className="text-[var(--text-main)] font-semibold text-lg">Successfully subscribed! Check your inbox.</span>
              </motion.div>
            )}
          </motion.form>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 text-[var(--text-muted)]"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--primary-accent)] rounded-full"></div>
              <span className="text-lg">10,000+ subscribers</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--secondary-accent)] rounded-full"></div>
              <span className="text-lg">Weekly updates</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[var(--yellow-accent)] rounded-full"></div>
              <span className="text-lg">Unsubscribe anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}