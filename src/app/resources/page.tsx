import type { Metadata } from "next";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resources & Insights — PerformX",
  description: "Performance marketing insights, guides, and case studies from the PerformX team. Paid media, CRO, attribution, and customer acquisition strategy.",
};

const topics = [
  "Paid Media Strategy", "Performance Creative", "CRO & Landing Pages",
  "Attribution & Tracking", "CRM & Automation", "D2C Growth",
  "Real Estate Lead Gen", "Email & WhatsApp Marketing",
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">Resources</p>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Performance marketing{" "}
            <GradientText>insights.</GradientText>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            Practical guides, frameworks, and commentary on paid media, conversion optimisation, attribution, and customer acquisition — from the team that builds acquisition systems daily.
          </p>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-12">
          {topics.map((t) => (
            <span key={t} className="px-4 py-2 rounded-xl text-sm border border-white/10 bg-white/4 text-white/60">{t}</span>
          ))}
        </div>

        {/* Coming soon */}
        <div className="card-dark p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-brand-azure/10 border border-brand-azure/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-4">Content coming soon</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
            We're building out our editorial library. In the meantime, subscribe to get notified when we publish — or get in touch directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-violet/60 transition-colors" aria-label="Email for newsletter" />
            <Button variant="primary" size="md">Notify me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
