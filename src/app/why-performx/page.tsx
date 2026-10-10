import type { Metadata } from "next";
import { WhyPerformX } from "@/components/sections/WhyPerformX";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Why PerformX — Performance Marketing Agency",
  description: "Systems not campaigns. Data before opinion. Full-funnel ownership. Radical transparency. Creative that converts.",
};

export default function WhyPerformXPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-28 pb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand-azure uppercase tracking-widest mb-4">Why PerformX</p>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Five things that make us{" "}
              <GradientText>fundamentally different.</GradientText>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              There are thousands of digital marketing agencies. Here's why the distinction matters — and why it produces better results for your business.
            </p>
          </div>
        </div>
      </section>
      <WhyPerformX />
      <FinalCTA />
    </div>
  );
}
