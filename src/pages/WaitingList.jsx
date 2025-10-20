import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { submitWaitlist } from "../api/waitlist";
import { 
  Sparkles, 
  Gift, 
  Zap, 
  Bell, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  User,
  ArrowRight
} from "lucide-react";

export default function WaitingList() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    location: "",
    service_interest: "all"
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: submitWaitlist,
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(formData);
  };

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Launch Discount",
      description: "Get 30% off your first month as an early adopter"
    },
    {
      icon: Zap,
      title: "Priority Access",
      description: "Be among the first to experience Nourie when we launch"
    },
    {
      icon: Bell,
      title: "Early Updates",
      description: "Receive insider updates about our launch timeline and features"
    },
    {
      icon: Sparkles,
      title: "Beta Testing Opportunity",
      description: "Chance to test the app and shape its features before launch"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="glass-morphism p-12 rounded-3xl">
            <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[var(--text-main)] mb-4">
              You're On The List!
            </h2>
            <p className="text-[var(--text-muted)] text-xl leading-relaxed mb-8">
              Welcome to the Nourie family! We'll notify you as soon as we launch. 
              Get ready for an amazing food experience.
            </p>
            <div className="bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20 rounded-2xl p-6 mb-8">
              <p className="text-[var(--text-main)] font-medium mb-2">What's Next?</p>
              <p className="text-[var(--text-muted)]">
                Thanks for joining. We'll keep you updated on our launch progress 
                and send you your exclusive early-bird discount code soon!
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center space-x-2 px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-105 transition-all duration-300"
            >
              <span>Back to Home</span>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--background)] text-[var(--text-main)] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80"
            alt="Delicious food preparation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/95 to-[var(--background)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--secondary-accent)]/20 to-[var(--yellow-accent)]/20 border border-[var(--secondary-accent)]/30 rounded-full text-[var(--secondary-accent)] font-semibold text-sm sm:text-base mb-8">
              🎉 Coming Soon to Abuja
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Future of Food <br />
              <span className="gradient-text">Starts Here</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Nourie is revolutionizing how Nigeria experiences food. Join our waiting list 
              to be first in line when we launch and unlock exclusive early-bird benefits.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-16"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">500+</div>
                <div className="text-[var(--text-muted)] text-sm sm:text-base">Already Waiting</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">30%</div>
                <div className="text-[var(--text-muted)] text-sm sm:text-base">Launch Discount</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-[var(--text-muted)] text-sm sm:text-base">Service Soon</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
              Why Join Our <span className="gradient-text">Waiting List?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-2xl text-center hover:bg-[var(--background)]/60 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[var(--primary-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
              Reserve Your <span className="gradient-text">Spot</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              Join hundreds of food lovers waiting for Nourie to launch
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-morphism p-8 lg:p-12 rounded-3xl">
              {isError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                    {error?.message || "Something went wrong. Please try again."}
                </div>
              )}

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <User className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <Mail className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <Phone className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <MapPin className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Location in Abuja (Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                    placeholder="Wuse II, Maitama, etc."
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <Sparkles className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>I'm Most Interested In *</span>
                  </label>
                  <select
                    name="service_interest"
                    value={formData.service_interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                  >
                    <option value="all">All Services</option>
                    <option value="pre_order">Pre-Order (Save up to 30%)</option>
                    <option value="instant_delivery">Instant Delivery (15-30 min)</option>
                    <option value="subscription">Meal Subscriptions</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full mt-8 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Joining...</span>
                  </>
                ) : (
                  <>
                    <span>Join Waiting List</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-[var(--text-muted)] text-sm text-center mt-6">
                By joining, you agree to receive updates about Nourie's launch. We respect your privacy and won't spam you.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}