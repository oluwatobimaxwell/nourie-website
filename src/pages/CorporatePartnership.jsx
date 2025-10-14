
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Users, 
  Calendar, 
  Utensils, 
  TrendingUp, 
  Shield, 
  Truck,
  Building2,
  GraduationCap,
  Hospital,
  Briefcase,
  Landmark,
  Heart,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Section = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const BenefitCard = ({ icon: Icon, title, description, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="glass-morphism p-8 rounded-2xl hover:bg-[var(--background)]/60 transition-all duration-300 group"
  >
    <div 
      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: `${color}20` }}
    >
      <Icon className="w-7 h-7" style={{ color }} />
    </div>
    <h3 className="text-xl font-semibold text-[var(--text-main)] mb-3">{title}</h3>
    <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
  </motion.div>
);

const PartnershipOption = ({ title, description, features, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="glass-morphism p-8 rounded-3xl hover:bg-[var(--background)]/60 transition-all duration-300"
  >
    <div className="flex items-start space-x-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">{title}</h3>
        <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
      </div>
    </div>
    <ul className="space-y-3">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-[var(--primary-accent)] flex-shrink-0 mt-0.5" />
          <span className="text-[var(--text-muted)]">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const IndustryCard = ({ icon: Icon, title, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="glass-morphism p-6 rounded-2xl text-center hover:bg-[var(--background)]/60 transition-all duration-300 group"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-accent)]/20 to-[var(--secondary-accent)]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-[var(--primary-accent)]" />
    </div>
    <h3 className="text-lg font-semibold text-[var(--text-main)]">{title}</h3>
  </motion.div>
);

const ProcessStep = ({ number, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="flex items-start space-x-6">
      <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary-accent)] to-[var(--secondary-accent)] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
        {number}
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3">{title}</h3>
        <p className="text-[var(--text-muted)] text-lg leading-relaxed">{description}</p>
      </div>
    </div>
    {index < 3 && (
      <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-[var(--primary-accent)] to-transparent"></div>
    )}
  </motion.div>
);

export default function CorporatePartnership() {
  const benefits = [
    {
      icon: Utensils,
      title: "Freshly Cooked Meals",
      description: "Every meal is prepared daily from our modern cloud kitchen, ensuring taste, hygiene, and nutrition.",
      color: "var(--primary-accent)"
    },
    {
      icon: Calendar,
      title: "Flexible Meal Plans",
      description: "Choose from daily, weekly, or monthly meal packages tailored to your team's schedule and budget.",
      color: "var(--secondary-accent)"
    },
    {
      icon: TrendingUp,
      title: "Easy Digital Ordering",
      description: "Your staff can pre-order meals directly via the Nourie app or web portal — no confusion, no delays.",
      color: "var(--yellow-accent)"
    },
    {
      icon: Shield,
      title: "Custom Corporate Menus",
      description: "We curate local and continental meal options to fit diverse tastes and dietary needs.",
      color: "var(--primary-accent)"
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      description: "Meals are delivered right to your office — hot, fresh, and on schedule.",
      color: "var(--secondary-accent)"
    },
    {
      icon: Heart,
      title: "Professional Service",
      description: "From packaging to presentation, we maintain premium standards that represent your brand.",
      color: "var(--yellow-accent)"
    }
  ];

  const partnershipOptions = [
    {
      icon: Users,
      title: "Corporate Meal Subscription Plans",
      description: "Simplify lunch management for your team with subscription-based meal deliveries. We'll handle planning, cooking, and logistics while your employees focus on work.",
      features: [
        "Weekly or monthly subscription packages",
        "Customizable meal plans per employee",
        "Centralized billing and reporting",
        "Dedicated account manager"
      ]
    },
    {
      icon: Calendar,
      title: "Daily Staff Meal Delivery",
      description: "We deliver fresh meals to your office every day, so your team never skips a healthy lunch again.",
      features: [
        "Same-day meal ordering",
        "Multiple meal options daily",
        "Individual or bulk orders",
        "Contactless delivery options"
      ]
    },
    {
      icon: Utensils,
      title: "Event & Meeting Catering",
      description: "From boardroom lunches to team retreats, our catering service ensures your guests enjoy every bite.",
      features: [
        "Custom menu design",
        "Professional presentation",
        "Setup and cleanup services",
        "Accommodates special dietary requirements"
      ]
    },
    {
      icon: Heart,
      title: "Wellness & Nutrition Programs",
      description: "Partner with Nourie to provide balanced meal options designed to promote health and focus in the workplace.",
      features: [
        "Nutritionist-approved menus",
        "Calorie and macro tracking",
        "Dietary restriction management",
        "Monthly wellness reports"
      ]
    }
  ];

  const industries = [
    { icon: Building2, title: "Corporates & Startups" },
    { icon: Landmark, title: "NGOs & Development Organisations" },
    { icon: Briefcase, title: "Government Agencies" },
    { icon: TrendingUp, title: "Banks & Financial Institutions" },
    { icon: GraduationCap, title: "Schools & Training Centres" },
    { icon: Hospital, title: "Hospitals & Health Centres" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Get in Touch",
      description: "Fill out our partnership form or contact our corporate sales team. We'll schedule an initial consultation to understand your needs."
    },
    {
      number: "02",
      title: "Consultation & Menu Design",
      description: "We'll assess your team's needs, preferences, and budget to build a tailored meal plan that works for everyone."
    },
    {
      number: "03",
      title: "Tasting Session",
      description: "Try a curated selection of our best meals before signing off. We want you to love what you're getting."
    },
    {
      number: "04",
      title: "Launch & Enjoy",
      description: "Your staff start enjoying fresh, daily meals delivered on time — every time. We handle everything else."
    }
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--text-main)] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/615899900/photo/you-guys-came-up-with-some-great-ideas.jpg?s=612x612&w=0&k=20&c=lSKOw5iFOAkfhK2g3vEerI-PcwmVvUzTaroFxB8MSDY="
            alt="Professional African team dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 bg-[var(--primary-accent)]/20 border border-[var(--primary-accent)]/30 rounded-full text-[var(--primary-accent)] font-medium text-sm mb-6">
                B2B Food Solutions
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Corporate Partnership <br />
              <span className="gradient-text">with Nourie</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light mb-8"
            >
              Freshly Cooked. Smartly Delivered. Professionally Managed.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl"
            >
              At Nourie, we understand that great food fuels great teams. Our Corporate Partnership Program helps companies provide their employees with fresh, healthy, and consistent meals — without the stress of managing catering or daily orders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <Link
                to={createPageUrl("PartnershipForm")}
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--yellow-accent)] text-[#121212] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Start Partnership</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 lg:py-32 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
              Why <span className="gradient-text">Partner with Us</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
              We're more than a food provider — we're your partner in creating a better workplace experience. Our model combines culinary excellence, smart technology, and dependable logistics.
            </p>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-24 lg:py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
              Partnership <span className="gradient-text">Options</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
              Flexible solutions tailored to your organization's unique needs
            </p>
          </Section>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnershipOptions.map((option, index) => (
              <PartnershipOption key={index} {...option} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 lg:py-32 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
              Who We <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
              Whether you have 10 employees or 500, Nourie scales with you
            </p>
          </Section>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto font-light">
              Getting started is simple. Here's our proven 4-step process
            </p>
          </Section>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[var(--background-alt)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--primary-accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--secondary-accent)]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glass-morphism p-12 lg:p-16 rounded-3xl text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-6">
              Let's <span className="gradient-text">Partner</span>
            </h2>
            <p className="text-xl text-[var(--text-muted)] mb-12 max-w-3xl mx-auto leading-relaxed">
              Nourie helps organisations create happier, healthier, and more productive teams through food that's made with care and delivered with precision.
            </p>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[var(--primary-accent)]/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-[var(--primary-accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--text-main)] mb-2">Visit Us</h3>
                <p className="text-[var(--text-muted)] text-center text-sm">
                  Suite 1, Elite Wash, Bangui Street,<br />
                  Off Ademola Adetokunbo Crescent,<br />
                  Wuse II, Abuja
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[var(--secondary-accent)]/20 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-[var(--secondary-accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--text-main)] mb-2">Call Us</h3>
                <p className="text-[var(--text-muted)]">+234 813 025 9200</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-[var(--yellow-accent)]/20 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-[var(--yellow-accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--text-main)] mb-2">Email Us</h3>
                <p className="text-[var(--text-muted)]">partnerships@eatnourie.com</p>
              </div>
            </div>

            <Link
              to={createPageUrl("PartnershipForm")}
              className="inline-flex items-center space-x-3 px-10 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[var(--primary-accent)] to-[#356859] text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Start Partnership</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
