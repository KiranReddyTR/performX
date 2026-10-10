import type { Metadata } from "next";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers — PerformX",
  description: "Join the PerformX team. We're building a performance marketing agency for the systems era.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Careers</p>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Build the future of{" "}
            <GradientText>performance marketing.</GradientText>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed">
            We're a small, focused team doing serious work. If you're obsessed with performance marketing, data, and building systems that produce real business outcomes — we'd like to meet you.
          </p>
        </div>

        <div className="card-dark p-12 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-4">No open roles right now</h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            We don't always have open positions, but we're always interested in hearing from exceptional people. If you're a performance media buyer, creative strategist, CRO specialist, or data analyst — send us a note.
          </p>
          <Button variant="primary" href="mailto:rishigoswami2234@gmail.com?subject=Careers%20at%20PerformX">
            Send us a note
          </Button>
        </div>
      </div>
    </div>
  );
}
