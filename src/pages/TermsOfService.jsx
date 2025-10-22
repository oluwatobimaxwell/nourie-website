import React from "react";
import { motion } from "framer-motion";
import { FileText, Users, ShoppingCart, AlertTriangle, Scale, Gavel, Shield } from "lucide-react";

const Section = ({ title, children, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-10 h-10 bg-[var(--secondary-accent)]/10 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-[var(--secondary-accent)]" />
      </div>
      <h2 className="text-2xl font-semibold text-[var(--text-main)]">{title}</h2>
    </div>
    <div className="text-[var(--text-muted)] leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

export default function TermsOfService() {
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
            <div className="w-20 h-20 bg-[var(--secondary-accent)]/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="w-10 h-10 text-[var(--secondary-accent)]" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              The guidelines that ensure a great experience for everyone in the Nourie community.
            </p>
            <p className="text-sm text-[var(--text-muted)]/70 mt-6">Last updated: January 1, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section title="Acceptance of Terms" icon={Gavel}>
            <p>
              By accessing and using Nourie's services, including our mobile application and website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              These terms constitute a legally binding agreement between you and Nourie, a food delivery service operating in Abuja, FCT, Nigeria.
            </p>
          </Section>

          <Section title="Service Description" icon={ShoppingCart}>
            <p>
              Nourie provides food delivery services through two main models:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Pre-Order Service:</strong> Schedule meals in advance with discounted pricing</li>
              <li><strong>Instant Delivery:</strong> On-demand food delivery within 15-30 minutes</li>
            </ul>
            <p>
              Our services are currently available in select areas of Abuja, FCT. Service availability may vary and is subject to change without notice.
            </p>
          </Section>

          <Section title="User Responsibilities" icon={Users}>
            <p>As a Nourie user, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Use our services only for lawful purposes</li>
              <li>Be present at the delivery location during your scheduled delivery time</li>
              <li>Treat our delivery personnel with respect and courtesy</li>
              <li>Pay for all orders placed through your account</li>
              <li>Report any issues or concerns promptly through appropriate channels</li>
            </ul>
          </Section>

          <Section title="Ordering and Payment" icon={ShoppingCart}>
            <p>
              <strong>Order Placement:</strong> All orders are subject to availability and acceptance. We reserve the right to refuse or cancel orders for any reason.
            </p>
            <p>
              <strong>Pricing:</strong> Prices are displayed in Nigerian Naira and include applicable taxes. Pre-order prices may differ from instant delivery prices.
            </p>
            <p>
              <strong>Payment:</strong> Payment is required at the time of order placement. We accept various payment methods as displayed in the app.
            </p>
            <p>
              <strong>Modifications and Cancellations:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pre-orders can be modified or cancelled up to 2 hours before scheduled delivery</li>
              <li>Instant orders can only be cancelled within 5 minutes of placement</li>
              <li>Refunds for cancelled orders will be processed according to our refund policy</li>
            </ul>
          </Section>

          <Section title="Delivery Terms" icon={AlertTriangle}>
            <p>
              <strong>Delivery Areas:</strong> We deliver within specified zones in Abuja. Delivery fees may apply based on distance and demand.
            </p>
            <p>
              <strong>Delivery Times:</strong> Estimated delivery times are approximations and may vary due to weather, traffic, or high demand.
            </p>
            <p>
              <strong>Failed Deliveries:</strong> If we cannot complete delivery due to incorrect address, unavailability, or other customer-related issues, additional charges may apply for re-delivery.
            </p>
          </Section>

          <Section title="Food Safety and Quality" icon={Shield}>
            <p>
              We maintain high standards of food safety and quality. However:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Please inform us of any food allergies or dietary restrictions when ordering</li>
              <li>Consume delivered food promptly for best quality and safety</li>
              <li>Report any food quality issues immediately through our customer support</li>
              <li>We cannot guarantee that our kitchen is completely free from allergens</li>
            </ul>
          </Section>

          <Section title="Refunds and Disputes" icon={Scale}>
            <p>
              <strong>Refund Policy:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full refunds for cancelled pre-orders (within allowed timeframe)</li>
              <li>Refunds or credits for food quality issues, assessed case-by-case</li>
              <li>No refunds for orders correctly delivered as specified</li>
            </ul>
            <p>
              <strong>Dispute Resolution:</strong> We encourage resolving disputes through direct communication with our customer support team. For unresolved issues, disputes will be handled under Nigerian law.
            </p>
          </Section>

          <Section title="Intellectual Property" icon={FileText}>
            <p>
              All content on our platform, including but not limited to text, graphics, logos, images, and software, is the property of Nourie or our licensors and is protected by Nigerian and international copyright laws.
            </p>
            <p>
              You may not reproduce, distribute, or create derivative works from our content without explicit written permission.
            </p>
          </Section>

          <Section title="Limitation of Liability" icon={AlertTriangle}>
            <p>
              To the fullest extent permitted by law, Nourie's liability is limited to the amount you paid for the specific order in question. We are not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Delays caused by circumstances beyond our control</li>
              <li>Issues arising from incorrect delivery information provided by you</li>
              <li>Food allergies or dietary reactions (unless due to our negligence)</li>
            </ul>
          </Section>

          <Section title="Account Termination" icon={Users}>
            <p>
              We reserve the right to suspend or terminate your account if you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violate these terms of service</li>
              <li>Engage in fraudulent or abusive behavior</li>
              <li>Provide false or misleading information</li>
              <li>Use our services in ways that harm our business or other users</li>
            </ul>
          </Section>

          <Section title="Changes to Terms" icon={FileText}>
            <p>
              We may update these Terms of Service from time to time. We will notify you of material changes through the app or email. Your continued use of our services after such changes constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="Governing Law" icon={Scale}>
            <p>
              These Terms of Service are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms or your use of our services will be subject to the jurisdiction of Nigerian courts.
            </p>
          </Section>

          <Section title="Contact Information" icon={Users}>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> <a href="mailto:legal@nourie.ng" className="text-[var(--secondary-accent)] hover:underline">legal@nourie.ng</a></p>
              <p><strong>Phone:</strong> +234 800 NOURIE</p>
              <p><strong>Address:</strong> Wuse II, Bangui Street, Abuja, FCT, Nigeria</p>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}