import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PerformX",
  description: "PerformX terms of service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container max-w-3xl">
        <h1 className="text-display-md font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: October 2026</p>
        <div className="space-y-8 text-white/60 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-base mb-3">1. Use of This Website</h2>
            <p>By accessing and using the PerformX website, you accept and agree to be bound by these terms. This website is provided for informational purposes about PerformX's services.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">2. Accuracy of Information</h2>
            <p>PerformX makes reasonable efforts to ensure the accuracy of information on this website. Performance metrics and case study results are verified from real client campaigns. Past results do not guarantee future performance.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">3. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and design — is the property of PerformX and protected by applicable intellectual property laws.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">4. Limitation of Liability</h2>
            <p>PerformX shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on information provided herein.</p>
          </section>
          <section>
            <h2 className="text-white font-semibold text-base mb-3">5. Contact</h2>
            <p>Questions about these terms: <a href="mailto:rishigoswami2234@gmail.com" className="text-brand-azure hover:underline">rishigoswami2234@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
