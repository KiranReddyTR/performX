import type { Metadata } from "next";
import { GrowthAuditForm } from "@/components/forms/GrowthAuditForm";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Growth Audit — PerformX",
  description:
    "Get a free customer acquisition audit from PerformX. We'll analyse your paid media, conversion funnel, and tracking setup, then tell you exactly where you're leaving growth on the table.",
};

const included = [
  "Paid media account review (Meta, Google, or both)",
  "Landing page and conversion funnel assessment",
  "Tracking and attribution gap analysis",
  "Top 3 growth opportunities with specific recommendations",
  "Estimated impact on CAC and ROAS",
];

export default function FreeGrowthAuditPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — value prop */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">
              Free, no obligation
            </p>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Get your free{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Growth Audit.
              </span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Tell us about your business and your current advertising setup. We'll audit your
              acquisition system — paid media, conversion funnel, tracking — and deliver specific,
              actionable recommendations at no cost.
            </p>

            <div className="space-y-3 mb-10">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-cyan mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="card-dark p-6">
              <p className="text-sm text-white/40 mb-1 uppercase tracking-widest font-semibold text-xs">Delivered within</p>
              <p className="text-3xl font-bold text-white mb-1">48 hours</p>
              <p className="text-sm text-white/40">No fluff. No sales pitch. Just an honest assessment of where your acquisition system stands and where to improve it.</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <GrowthAuditForm />
          </div>
        </div>
      </div>
    </div>
  );
}
