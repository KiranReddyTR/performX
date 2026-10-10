"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full opacity-10 blur-[120px] bg-brand-violet animate-pulse-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 rounded-full opacity-8 blur-[100px] bg-brand-azure animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="outline" className="text-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gradient inline-block" aria-hidden="true" />
              Performance Marketing & Customer Acquisition
            </Badge>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="text-display-2xl font-bold text-white mb-8 tracking-tight">
            Performance{" "}
            <GradientText>That Scales.</GradientText>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-6">
            We build customer acquisition systems that connect{" "}
            <span className="text-white/90">creative, paid media, conversion, data, and automation</span>{" "}
            to measurable business growth.
          </p>
          <p className="text-sm text-white/40 mb-12 max-w-xl mx-auto">
            Not just ad campaigns — a complete system engineered for profitable, predictable scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" href="/free-growth-audit">
              Get Free Growth Audit
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" href="/case-studies">
              View Case Studies
            </Button>
          </div>

          {/* Proof stats */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { value: "5+", label: "Years building systems" },
              { value: "150+", label: "Campaigns launched" },
              { value: "20+", label: "Industries served" },
              { value: "7.9X", label: "Peak ROAS achieved" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-xl font-bold text-gradient bg-brand-gradient bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Acquisition system flow — below headline */}
        <div className="mt-20">
          <p className="text-center text-xs font-semibold text-white/30 uppercase tracking-widest mb-8">
            The PerformX Acquisition System
          </p>
          <AcquisitionSystemMini />
        </div>
      </div>
    </section>
  );
}

function AcquisitionSystemMini() {
  const nodes = [
    { label: "Creative", color: "#7415FD" },
    { label: "Paid Traffic", color: "#A838FD" },
    { label: "Landing Page", color: "#3D5BFD" },
    { label: "Conversion", color: "#0A94FD" },
    { label: "Tracking", color: "#0A94FD" },
    { label: "CRM", color: "#36C2FE" },
    { label: "Revenue", color: "#36C2FE" },
  ];

  return (
    <div className="relative" aria-label="PerformX customer acquisition system: Creative → Paid Traffic → Landing Page → Conversion → Tracking → CRM → Revenue">
      {/* Desktop flow */}
      <div className="hidden md:flex items-center justify-center gap-0">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${node.color}20`, borderColor: `${node.color}40` }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: node.color }} />
              </div>
              <span className="text-xs text-white/50 font-medium whitespace-nowrap">{node.label}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className="flex items-center mx-2 mt-[-14px]">
                <div className="w-8 h-px bg-gradient-to-r from-white/20 to-white/5" />
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="shrink-0 -ml-1" aria-hidden="true">
                  <path d="M2 1l4 3-4 3" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile flow — 2 rows */}
      <div className="md:hidden flex flex-wrap justify-center gap-3">
        {nodes.map((node) => (
          <div key={node.label} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10"
            style={{ background: `${node.color}10`, borderColor: `${node.color}30` }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: node.color }} />
            <span className="text-xs text-white/60 font-medium">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
