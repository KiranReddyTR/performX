import type { Metadata } from "next";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About PerformX — Performance Marketing Agency",
  description: "PerformX is a performance marketing and customer acquisition agency. We build systems that connect creative, media, conversion, data and automation to measurable business growth.",
  alternates: { canonical: "https://performx.agency/about" },
};

const values = [
  { title: "Results over relationships", description: "We're judged by your CAC, ROAS, and revenue growth — not by how well we get on or how many decks we produce." },
  { title: "Transparency always", description: "You see every spend decision, every test result, every recommendation and the data behind it. No black boxes." },
  { title: "Systems thinking", description: "We think in systems, not campaigns. Every component we build is designed to compound — to make every other part of the system work better." },
  { title: "Honest over comfortable", description: "If something isn't working, we'll tell you — and we'll tell you why. We don't hide bad data." },
];

const stats = [
  { value: "5+", label: "Years in performance marketing" },
  { value: "150+", label: "Campaigns launched" },
  { value: "20+", label: "Industries served" },
  { value: "₹10Cr+", label: "Revenue generated for clients" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">About PerformX</p>
            <h1 className="text-display-lg font-bold text-white mb-8">
              We build acquisition systems,{" "}
              <GradientText>not ad campaigns.</GradientText>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-6 max-w-3xl">
              PerformX is a performance marketing and customer acquisition agency. We don't just run ads — we build the complete infrastructure that turns advertising spend into predictable, profitable revenue.
            </p>
            <p className="text-lg text-white/40 leading-relaxed max-w-3xl">
              Our positioning statement is not a claim that we don't operate advertising campaigns. We run hundreds of campaigns across Meta, Google, TikTok, and LinkedIn. It's a commitment to thinking beyond the campaign — to building the full system that makes campaigns consistently profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/[0.06] bg-[#0A0A0C]" aria-label="Agency statistics">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-2">{s.value}</div>
                <p className="text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are / aren't */}
      <section className="py-section" aria-labelledby="positioning-heading">
        <div className="section-container">
          <h2 id="positioning-heading" className="text-display-sm font-bold text-white mb-12">What PerformX is — and isn't.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-brand-azure/20 bg-brand-azure/5">
              <h3 className="text-lg font-bold text-white mb-6">PerformX IS</h3>
              <ul className="space-y-3">
                {["A performance marketing and customer acquisition agency","A full-funnel systems builder","Data-first in every decision","Accountable to business outcomes: CAC, ROAS, revenue","A long-term growth partner"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-brand-cyan mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <h3 className="text-lg font-bold text-white mb-6">PerformX IS NOT</h3>
              <ul className="space-y-3">
                {["A social media management agency","A conventional creative or branding agency","A guaranteed-ROAS provider","A cheap, quick-turnaround ads vendor","A team that runs campaigns in isolation"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-red-400 mt-0.5">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-[#0A0A0C]" aria-labelledby="values-heading">
        <div className="section-container">
          <h2 id="values-heading" className="text-display-sm font-bold text-white mb-12">How we operate.</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="card-dark p-8">
                <span className="text-5xl font-black text-white/[0.04] block mb-4">{String(i+1).padStart(2,"0")}</span>
                <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic scope */}
      <section className="py-section" aria-labelledby="geo-heading">
        <div className="section-container max-w-3xl">
          <h2 id="geo-heading" className="text-display-sm font-bold text-white mb-6">Where we work.</h2>
          <p className="text-lg text-white/50 leading-relaxed mb-6">
            PerformX is headquartered in India with active client engagements and growth ambitions in the UAE, USA, and UK. Performance marketing principles are universal — buying intent, conversion psychology, and data-driven optimisation work everywhere.
          </p>
          <p className="text-white/40">Primary market: India &nbsp;·&nbsp; International: UAE, USA, UK</p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
