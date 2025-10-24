import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function LocationSection() {
  const contactDetails = [
    {
      icon: MapPin,
      label: "Address",
      value: "Bangui Street, Wuse II",
      subtitle: "Abuja, FCT, Nigeria"
    },
    {
      icon: Clock,
      label: "Delivery Hours",
      value: "9:00 AM - 9:00 PM",
      subtitle: "7 days a week"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 704 448 7002",
      subtitle: "WhatsApp available"
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@eatnourie.com",
      subtitle: "Response within 2-4 hours"
    }
  ];

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
            Find Us in <span className="gradient-text">Abuja</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-morphism p-4 rounded-3xl overflow-hidden h-full">
              <div className="h-[450px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9661834665507!2d7.492631614770145!3d9.076494793443907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba8c2b4c3a1%3A0x4c6a4fe73a7e7e3e!2sBangui%20St%2C%20Wuse%20II%2C%20Abuja%2C%20FCT%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nourie Kitchen Location"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 glass-morphism rounded-2xl hover:bg-[var(--background-alt)]/60 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--primary-accent)]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-6 h-6 text-[var(--primary-accent)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--primary-accent)] mb-1">{detail.label}</p>
                  <p className="text-lg font-semibold text-[var(--text-main)] mb-1">{detail.value}</p>
                  <p className="text-sm text-[var(--text-muted)]">{detail.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}