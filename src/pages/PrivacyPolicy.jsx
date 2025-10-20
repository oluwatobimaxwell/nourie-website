import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Database, Lock } from "lucide-react";

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

export default function PrivacyPolicy() {
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
              <Shield className="w-10 h-10 text-[var(--primary-accent)]" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Your privacy matters to us. Here's how we protect and use your information.
            </p>
            <p className="text-sm text-[var(--text-muted)]/70 mt-6">Last updated: October 1, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section title="Information We Collect" icon={Database}>
            <p>
              At Nourie, we collect information to provide you with the best possible food delivery experience. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Account Information:</strong> Name, email address, phone number, and delivery addresses</li>
              <li><strong>Order Information:</strong> Food preferences, dietary restrictions, order history, and payment details</li>
              <li><strong>Location Data:</strong> Delivery addresses and real-time location for accurate delivery</li>
              <li><strong>Device Information:</strong> Device type, operating system, and app usage data</li>
              <li><strong>Communication Data:</strong> Messages, feedback, and customer support interactions</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information" icon={Eye}>
            <p>We use your personal information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your food orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send order confirmations, delivery updates, and important notifications</li>
              <li>Improve our services and develop new features</li>
              <li>Ensure food safety and quality standards</li>
              <li>Comply with legal obligations and prevent fraud</li>
              <li>Send promotional offers and updates (with your consent)</li>
            </ul>
          </Section>

          <Section title="Information Sharing" icon={Lock}>
            <p>
              We respect your privacy and do not sell your personal information. We may share your information only in these limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Delivery Partners:</strong> Necessary information to complete your food delivery</li>
              <li><strong>Payment Processors:</strong> Secure payment processing through trusted providers</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
              <li><strong>Service Providers:</strong> Trusted third parties who help us operate our platform</li>
            </ul>
          </Section>

          <Section title="Data Security" icon={Shield}>
            <p>
              We implement robust security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encryption of sensitive data during transmission and storage</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure payment processing that meets industry standards</li>
              <li>Regular training of our staff on privacy and security best practices</li>
            </ul>
          </Section>

          <Section title="Your Rights and Choices" icon={Eye}>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correct:</strong> Update or correct inaccurate personal information</li>
              <li><strong>Delete:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@nourie.ng" className="text-[var(--primary-accent)] hover:underline">privacy@nourie.ng</a> or through our app.
            </p>
          </Section>

          <Section title="Cookies and Tracking" icon={Database}>
            <p>
              We use cookies and similar technologies to enhance your experience. These help us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remember your preferences and login information</li>
              <li>Analyze app performance and user behavior</li>
              <li>Provide personalized recommendations</li>
              <li>Ensure platform security and prevent fraud</li>
            </ul>
            <p className="mt-4">
              You can manage cookie preferences through your device settings or by contacting us.
            </p>
          </Section>

          <Section title="Data Retention" icon={Database}>
            <p>
              We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Order history is typically retained for 7 years for business and legal purposes, while marketing preferences are kept until you opt out.
            </p>
          </Section>

          <Section title="Children's Privacy" icon={Shield}>
            <p>
              Nourie is not intended for children under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
          </Section>

          <Section title="Changes to This Policy" icon={Eye}>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our app and website. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact Us" icon={Lock}>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> <a href="mailto:privacy@nourie.ng" className="text-[var(--primary-accent)] hover:underline">privacy@nourie.ng</a></p>
              <p><strong>Phone:</strong> +234 800 NOURIE</p>
              <p><strong>Address:</strong> Wuse II, Bangui Street, Abuja, FCT, Nigeria</p>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}