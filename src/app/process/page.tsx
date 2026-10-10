import type { Metadata } from "next";
import { GrowthFramework } from "@/components/sections/GrowthFramework";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Our Process — PerformX",
  description: "PerformX's 9-stage growth framework: Discovery, Research, Offer, Creative, Campaign Setup, Testing, Optimisation, Scaling, and Reporting.",
  alternates: { canonical: "https://performx.agency/process" },
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">How we work</p>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Nine stages from zero to{" "}
              <GradientText>profitable scale.</GradientText>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Every PerformX engagement follows the same proven framework — whether you're launching from scratch or rebuilding a broken acquisition system. No shortcuts. No guesswork.
            </p>
          </div>
        </div>
      </section>
      <GrowthFramework />
      <FinalCTA />
    </div>
  );
}
