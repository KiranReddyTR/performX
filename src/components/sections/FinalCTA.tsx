import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-section relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-azure/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-radial opacity-50 pointer-events-none" aria-hidden="true" />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-6">
            Ready to scale?
          </p>
          <h2 id="cta-heading" className="text-display-lg font-bold text-white mb-6">
            Start with a free{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Growth Audit.
            </span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us about your business, your current advertising spend, and your growth goals.
            We'll audit your acquisition system and tell you exactly where you're leaving money on the table — free, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="primary" size="lg" href="/free-growth-audit">
              Get Free Growth Audit
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" href="/book-a-call">
              <Phone size={16} aria-hidden="true" />
              Book a Discovery Call
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
              Delivered within 48 hours
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
              Actionable, specific recommendations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
