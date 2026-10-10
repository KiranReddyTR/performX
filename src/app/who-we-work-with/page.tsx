import type { Metadata } from "next";
import { CheckCircle2, XCircle } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Who We Work With — PerformX",
  description: "PerformX works with established e-commerce brands, D2C businesses, real estate developers, and growth-focused businesses ready to invest seriously in customer acquisition.",
};

const goodFit = [
  "Established businesses with a proven product or service",
  "E-commerce and D2C brands ready to scale paid media",
  "Founders and marketing leaders who understand performance data",
  "Businesses investing ₹50K+ per month in advertising (or ready to)",
  "Companies that want a long-term acquisition partner, not a vendor",
  "Teams open to testing, iteration, and data-driven decisions",
  "Businesses targeting India, UAE, USA, or UK markets",
];

const notFit = [
  "Businesses looking for the cheapest possible option",
  "Brands that want guaranteed ROAS promises",
  "Startups without product-market fit seeking ads to fix fundamentals",
  "Businesses not willing to share performance data or give feedback",
  "Companies expecting overnight results from a standing start",
  "Brands that want social media management or content creation only",
];

const audiences = [
  { role: "Founders & Business Owners", desc: "You want predictable customer acquisition that doesn't require your daily attention. You want a system that scales." },
  { role: "E-commerce & D2C Brands", desc: "You're running ads but ROAS is inconsistent. You know there's more to unlock but aren't sure where to start." },
  { role: "Marketing Heads & CMOs", desc: "You need a specialist partner for paid media that integrates with your broader marketing strategy and reports at a business level." },
  { role: "Growth Leads", desc: "You're responsible for CAC and LTV targets. You need a team that thinks in unit economics, not just ad metrics." },
];

export default function WhoWeWorkWithPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Ideal clients</p>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Who we do our{" "}
              <GradientText>best work with.</GradientText>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              We're selective about who we work with — not because we're precious, but because the right fit produces dramatically better results for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-section bg-[#0A0A0C]" aria-labelledby="audiences-heading">
        <div className="section-container">
          <h2 id="audiences-heading" className="text-display-sm font-bold text-white mb-12">Who comes to us.</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {audiences.map((a) => (
              <div key={a.role} className="card-dark p-8">
                <h3 className="text-lg font-bold text-white mb-3">{a.role}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good fit / not fit */}
      <section className="py-section" aria-labelledby="fit-heading">
        <div className="section-container">
          <h2 id="fit-heading" className="text-display-sm font-bold text-white mb-12">Are we a good fit?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-brand-azure/20 bg-brand-azure/5">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-cyan" aria-hidden="true" /> Good fit
              </h3>
              <ul className="space-y-3">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={15} className="text-brand-cyan mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <XCircle size={20} className="text-red-400" aria-hidden="true" /> Not the right fit
              </h3>
              <ul className="space-y-3">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <XCircle size={15} className="text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
