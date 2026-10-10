import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PerformX",
  description: "PerformX privacy policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container max-w-3xl">
        <h1 className="text-display-md font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: October 2026</p>
        <div className="prose prose-invert max-w-none space-y-8 text-white/60 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Information We Collect</h2>
            <p>When you submit a form on our website (contact, growth audit request, or newsletter signup), we collect the information you provide — such as your name, email address, phone number, company name, and any details about your business you choose to share.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide solely to respond to your enquiry, deliver the service you've requested (such as a Growth Audit), or send you the newsletter you've signed up for. We do not sell, rent, or share your personal data with third parties for their marketing purposes.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Data Retention</h2>
            <p>We retain your contact information for as long as necessary to provide the requested service and maintain our business records. You may request deletion of your data at any time by contacting us.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Cookies and Analytics</h2>
            <p>Our website may use cookies and analytics tools (such as Google Analytics 4) to understand how visitors use the site. This data is used in aggregate form and does not personally identify individual visitors.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at rishigoswami2234@gmail.com.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">6. Contact</h2>
            <p>For any privacy-related queries, contact: <a href="mailto:rishigoswami2234@gmail.com" className="text-brand-azure hover:underline">rishigoswami2234@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
