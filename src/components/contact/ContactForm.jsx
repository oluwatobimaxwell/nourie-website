import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, User, Mail, PenSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form Data Submitted:', formData);
    // Here you would typically send the data to a backend or email service.
    // e.g., await Core.SendEmail({ to: 'hello@eatnourie.com', subject: formData.subject, body: `From: ${formData.name} <${formData.email}>\n\n${formData.message}` });
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-[var(--background-alt)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
            Send Us a <span className="gradient-text">Message</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            Have a question or proposal? Fill out the form below.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="glass-morphism p-8 md:p-12 rounded-3xl"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Send className="w-10 h-10 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-[var(--text-main)]">Thank You!</h3>
              <p className="text-[var(--text-muted)] mt-2">Your message has been sent. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                  <Input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="pl-12 h-14 text-lg"/>
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
                  <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="pl-12 h-14 text-lg"/>
                </div>
              </div>
              <div className="relative">
                <PenSquare className="absolute left-4 top-5 w-5 h-5 text-[var(--text-muted)]" />
                <Input name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="pl-12 h-14 text-lg"/>
              </div>
              <div className="relative">
                <Textarea name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} required className="pl-6 pt-4 text-lg min-h-[150px]" />
              </div>
              <div className="text-right">
                <Button type="submit" size="lg" className="px-10 py-7 text-lg bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}