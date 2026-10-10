import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models — PerformX",
  description: "PerformX offers flexible engagement models tailored to your growth stage. No fixed price lists — every engagement is scoped to your specific requirements.",
};

const models = [
  {
    title: "Growth Audit",
    price: "Free",
    description: "A comprehensive review of your current acquisition setup — paid media, landing pages, tracking, and CRM. Delivered within 48 hours.",
    features: ["Paid media account review", "Conversion funnel assessment", "Tracking gap analysis", "Top 3 growth recommendations", "No commitment required"],
    cta: "Get Free Audit",
    ctaHref: "/free-growth-audit",
    highlight: false,
  },
  {
    title: "Full Acquisition System",
    price: "Custom",
    description: "A complete customer acquisition system built for your business — from creative strategy through paid media, landing pages, tracking, CRM, and automation.",
    features: ["Paid media management (Meta, Google, or both)", "Performance creative production", "Landing page build and CRO", "Tracking and attribution setup", "CRM and automation build", "Monthly reporting and strategy"],
    cta: "Book a Discovery Call",
    ctaHref: "/book-a-call",
    highlight: true,
  },
  {
    title: "Paid Media Management",
    price: "Custom",
    description: "Ongoing management of your paid media campaigns across Meta, Google, TikTok, or LinkedIn — with performance creative and conversion optimisation included.",
    features: ["Campaign strategy and setup", "Performance creative testing", "Audience and bid management", "Weekly performance reviews", "Monthly strategy sessions"],
    cta: "Get in Touch",
    ctaHref: "/contact",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Engagement models</p>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Flexible engagements,{" "}
              <GradientText>built around your goals.</GradientText>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-4">
              We don't publish fixed pricing because every acquisition system is scoped to your business — your channels, your goals, your current setup.
            </p>
            <p className="text-base text-white/35">
              What we can tell you: we work with businesses investing seriously in growth. If you're spending ₹50K+ per month on advertising — or ready to — get in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section bg-[#0A0A0C]" aria-labelledby="models-heading">
        <div className="section-container">
          <h2 id="models-heading" className="sr-only">Engagement models</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((model) => (
              <div key={model.title} className={`rounded-2xl p-8 flex flex-col ${model.highlight ? "border-gradient bg-white/[0.03]" : "card-dark"}`}>
                {model.highlight && (
                  <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Most popular</span>
                )}
                <h2 className="text-xl font-bold text-white mb-2">{model.title}</h2>
                <div className="text-3xl font-bold bg-brand-gradient bg-clip-text text-transparent mb-4">{model.price}</div>
                <p className="text-sm text-white/50 leading-relaxed mb-8">{model.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2 size={15} className="text-brand-azure mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={model.highlight ? "primary" : "secondary"} size="md" href={model.ctaHref} fullWidth>
                  {model.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
