import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Get instant answers. Perfect for urgent questions.",
    action: "Start Chat",
    href: "https://wa.me/2348124001495",
    gradient: "from-[#25D366] to-[#128C7E]",
    badge: "Fastest Response"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "For detailed inquiries and business matters.",
    action: "Send Email",
    href: "mailto:hello@eatnourie.com",
    gradient: "from-[var(--primary-accent)] to-[#356859]",
    badge: "Within 2-4 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team during business hours.",
    action: "Call Now",
    href: "tel:+2348124001495",
    gradient: "from-[var(--secondary-accent)] to-[var(--yellow-accent)]",
    badge: "+234 812 400 1495"
  }
];

export default function QuickContactMethods() {
  return (
    <section id="contact-methods" className="py-24 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
            Choose Your Preferred Way to <span className="gradient-text">Reach Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="block"
            >
              <div className={`bg-gradient-to-br ${method.gradient} rounded-3xl p-8 text-white h-full relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300`}>
                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  {method.badge}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{method.description}</p>

                {/* CTA */}
                <div className="inline-flex items-center space-x-2 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  <span>{method.action}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}