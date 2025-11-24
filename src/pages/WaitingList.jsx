import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const formRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, []);
  
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    location: "",
    service_interest: "all"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://production.eatnourie.com/api/engagements/waitlist/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit waitlist signup");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly at hello@eatnourie.com");
      console.error("Waiting list submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
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
      description: "Receive insider updates about our launch timeline"
    },
    {
      icon: Sparkles,
      title: "Shape Our Future",
      description: "Get a chance to test and influence our features"
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
            <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-4xl font-bold text-[var(--text-main)] mb-4">
              You're On The List!
            </h2>
            <p className="text-[var(--text-main)] text-xl font-medium mb-2">
              Welcome to the Nourie Family!
            </p>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
              We've received your signup, Thank you for joining the waitlist. 
              We'll keep you updated on our launch progress and send you your exclusive 
              early-bird discount code soon. Get ready for an amazing food experience!
            </p>
            <div className="bg-[var(--primary-accent)]/10 border border-[var(--primary-accent)]/20 rounded-2xl p-6 mb-8">
              <p className="text-[var(--text-main)] font-medium mb-2">What's Next?</p>
              <p className="text-[var(--text-muted)]">
                Stay tuned for exclusive updates, early access opportunities, and your special 
                launch discount. The culinary revolution is coming to Abuja!
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
      <section className="relative py-32 lg:py-48 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Delicious food preparation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[var(--background)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Unlock the Taste <br />
              <span className="gradient-text">of Tomorrow</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Join our exclusive waitlist to be among the first to savor Abuja's culinary revolution. 
              Priority access, special discounts, and early updates await.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">1500+</div>
                <div className="text-gray-300 text-sm sm:text-base">Already Waiting</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">30%</div>
                <div className="text-gray-300 text-sm sm:text-base">Launch Discount</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-300 text-sm sm:text-base">Service Soon</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
              Why Be a <span className="gradient-text">Nourie Pioneer?</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Early adopters get exclusive perks that make the wait worthwhile
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-2xl text-center hover:bg-[var(--background)]/60 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-[var(--primary-accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-main)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-24 bg-[var(--background)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
              Reserve Your Spot.
              <br />
              <span className="gradient-text">Be Part of the Movement.</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              We're excited to have you! Fill out the form below to secure your place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-morphism p-8 lg:p-12 rounded-3xl">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
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
                    <span>Email *</span>
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
                    <span>Phone *</span>
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
                    <span>Location (Optional)</span>
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
                    <span>I'm Interested In *</span>
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
                disabled={isSubmitting}
                className="w-full mt-8 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
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
                By joining, you agree to receive updates about Nourie's launch. 
                We respect your privacy and won't spam you.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}