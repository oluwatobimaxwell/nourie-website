import React from "react";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart, Shield, Eye } from "lucide-react";

const Section = ({ title, children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-10 h-10 bg-[var(--primary-accent)]/10 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-[var(--primary-accent)]" />
      </div>
      <h2 className="text-2xl font-semibold text-[var(--text-main)]">{title}</h2>
    </div>
    <div className="text-[var(--text-muted)] leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

const CookieTypeCard = ({ title, description, examples, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="glass-morphism rounded-2xl p-6 hover:bg-[var(--background-alt)]/60 transition-colors duration-300"
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center`}>
        <Cookie className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-[var(--text-main)]">{title}</h3>
    </div>
    <p className="text-[var(--text-muted)] mb-3">{description}</p>
    <p className="text-sm text-[var(--text-muted)]/70"><strong>Examples:</strong> {examples}</p>
  </motion.div>
);

export default function CookiePolicy() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "Necessary for the basic functionality of our app and website. These cannot be disabled.",
      examples: "Login sessions, shopping cart contents, security features",
      color: "bg-green-500"
    },
    {
      title: "Performance Cookies",
      description: "Help us understand how you use our services so we can improve your experience.",
      examples: "Page views, click tracking, app performance monitoring",
      color: "bg-blue-500"
    },
    {
      title: "Functional Cookies",
      description: "Remember your preferences and choices to provide a personalized experience.",
      examples: "Language preferences, delivery addresses, food preferences",
      color: "bg-purple-500"
    },
    {
      title: "Marketing Cookies",
      description: "Used to show you relevant offers and track the effectiveness of our campaigns.",
      examples: "Ad targeting, promotional content, referral tracking",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--text-main)]">
      {/* Hero Section */}
      <section className="py-24 bg-[var(--background-alt)] text-[var(--text-main)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-20 h-20 bg-[var(--primary-accent)]/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Cookie className="w-10 h-10 text-[var(--primary-accent)]" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Understanding how we use cookies to enhance your Nourie experience.
            </p>
            <p className="text-sm text-[var(--text-muted)]/70 mt-6">Last updated: October 1, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section title="What Are Cookies?" icon={Cookie}>
            <p>
              Cookies are small text files that are stored on your device when you visit our website or use our mobile app. They help us provide you with a better, more personalized experience by remembering your preferences and analyzing how our services are used.
            </p>
            <p>
              At Nourie, we use cookies responsibly to enhance your food ordering experience while respecting your privacy.
            </p>
          </Section>

          <Section title="Types of Cookies We Use" icon={Settings}>
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((type, index) => (
                <CookieTypeCard key={index} {...type} />
              ))}
            </div>
          </Section>

          <Section title="How We Use Cookies" icon={BarChart}>
            <p>We use cookies to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Keep you logged in:</strong> Remember your login status across app sessions</li>
              <li><strong>Remember your preferences:</strong> Store your delivery addresses, payment methods, and food preferences</li>
              <li><strong>Improve our services:</strong> Analyze usage patterns to enhance app performance and user experience</li>
              <li><strong>Personalize content:</strong> Show you relevant menu items and offers based on your order history</li>
              <li><strong>Ensure security:</strong> Protect against fraud and unauthorized access</li>
              <li><strong>Measure marketing effectiveness:</strong> Understand which promotions and campaigns work best</li>
            </ul>
          </Section>

          <Section title="Third-Party Cookies" icon={Eye}>
            <p>
              We may use third-party services that place cookies on your device. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Payment Processors:</strong> To securely process your payments</li>
              <li><strong>Analytics Services:</strong> To understand app usage and performance</li>
              <li><strong>Delivery Partners:</strong> To coordinate and track deliveries</li>
              <li><strong>Customer Support Tools:</strong> To provide better help and support</li>
            </ul>
            <p>
              These third parties have their own privacy policies and cookie practices. We encourage you to review them.
            </p>
          </Section>

          <Section title="Managing Your Cookie Preferences" icon={Settings}>
            <p>
              You have control over cookies and can manage them in several ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings</li>
              <li><strong>Mobile App Settings:</strong> Adjust tracking preferences in your device's privacy settings</li>
              <li><strong>Contact Us:</strong> Reach out to our support team for assistance with cookie preferences</li>
            </ul>
            <p className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mt-4 text-yellow-300">
              <strong>Important:</strong> Disabling essential cookies may impact the functionality of our app and prevent you from using certain features.
            </p>
          </Section>

          <Section title="Cookie Retention" icon={Shield}>
            <p>
              Different types of cookies are stored for different periods:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser or app</li>
              <li><strong>Persistent Cookies:</strong> Remain until they expire or you delete them</li>
              <li><strong>Preference Cookies:</strong> Typically stored for 1-2 years</li>
              <li><strong>Analytics Cookies:</strong> Usually stored for up to 2 years</li>
            </ul>
          </Section>

          <Section title="Children's Privacy" icon={Shield}>
            <p>
              Our services are not directed to children under 18. We do not knowingly collect information from children or use cookies to track children's online activities.
            </p>
          </Section>

          <Section title="Updates to This Policy" icon={Eye}>
            <p>
              We may update this Cookie Policy to reflect changes in our practices or for legal reasons. We will notify you of any material changes through our app or website.
            </p>
            <p>
              Your continued use of our services after changes to this policy constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="Contact Us About Cookies" icon={Settings}>
            <p>
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> <a href="mailto:privacy@nourie.ng" className="text-[var(--primary-accent)] hover:underline">privacy@nourie.ng</a></p>
              <p><strong>Phone:</strong> +234 800 NOURIE</p>
              <p><strong>Address:</strong> Wuse II, Bangui Street, Abuja, FCT, Nigeria</p>
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]/70">
              For immediate assistance with cookie settings, please visit our Help Center in the Nourie app.
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}