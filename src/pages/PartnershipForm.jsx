import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { submitPartnership } from "../api/partnerships";

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    organization_name: "",
    contact_person: "",
    email: "",
    phone_number: "",
    office_location: "",
    team_size: "",
    service_interest: "",
    additional_info: ""
  });

  const confirmRef = useRef(null)
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
  if (isSubmitted && confirmRef.current) {
    confirmRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [isSubmitted]);


  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: submitPartnership,
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);

  };

  if (isSubmitted) {
    return (
      <div ref={confirmRef} className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <div className="glass-morphism p-12 rounded-3xl">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">Thank You!</h2>
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
              We've received your partnership inquiry. Our team will review your information and get back to you within 24-48 hours.
            </p>
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
      <section className="py-24 bg-[var(--background-alt)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-20 h-20 bg-[var(--primary-accent)]/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Building2 className="w-10 h-10 text-[var(--primary-accent)]" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Start Your <span className="gradient-text">Partnership</span>
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24-48 hours to discuss how we can serve your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-morphism p-8 lg:p-12 rounded-3xl">
              {isError && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                   {error?.message || "Submission failed. Please try again."}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Organization Name */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <Building2 className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Organization Name *</span>
                  </label>
                  <input
                    type="text"
                    name="organization_name"
                    value={formData.organization_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                    placeholder="Acme Corporation"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <Users className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Contact Person *</span>
                  </label>
                  <input
                    type="text"
                    name="contact_person"
                    value={formData.contact_person}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                    placeholder="john@acmecorp.com"
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
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Location */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <MapPin className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Office Location *</span>
                  </label>
                  <input
                    type="text"
                    name="office_location"
                    value={formData.office_location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                    placeholder="Wuse II, Abuja"
                  />
                </div>

                {/* Team Size */}
                <div>
                  <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                    <Users className="w-4 h-4 text-[var(--primary-accent)]" />
                    <span>Team Size *</span>
                  </label>
                  <select
                    name="team_size"
                    value={formData.team_size}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="101-500">101-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              {/* Meal Type */}
              <div className="mb-6">
                <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                  <Building2 className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>Meal Service Interest *</span>
                </label>
                <select
                  name="service_interest"
                  value={formData.service_interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors"
                >
                  <option value="">Select service type</option>
                  <option value="meal_subscription">Corporate Meal Subscription</option>
                  <option value="daily_meal_delivery">Daily Staff Meal Delivery</option>
                  <option value="event_catering">Event & Meeting Catering</option>
                  <option value="wellness">Wellness & Nutrition Program</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="flex items-center space-x-2 text-[var(--text-main)] font-medium mb-3">
                  <MessageSquare className="w-4 h-4 text-[var(--primary-accent)]" />
                  <span>Additional Information</span>
                </label>
                <textarea
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background-alt)] border border-[var(--glass-border)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary-accent)] transition-colors resize-none"
                  placeholder="Tell us more about your needs, dietary preferences, delivery schedules, or any special requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isPending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Partnership Request</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-[var(--text-muted)] text-sm text-center mt-6">
                By submitting this form, you agree to be contacted by Nourie regarding your partnership inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}