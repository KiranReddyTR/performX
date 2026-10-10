"use client";

import { useState } from "react";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/utils";

const systemNodes = [
  {
    id: "creative",
    label: "Creative",
    color: "#7415FD",
    icon: "✦",
    title: "Performance Creative",
    description:
      "Every campaign starts with creative that's engineered to convert. We develop performance briefs, UGC content, static ads, and video creative — all tested systematically to find winning angles.",
    outputs: ["UGC & Video Creative", "Static Performance Ads", "A/B Testing Framework", "Creative Intelligence"],
  },
  {
    id: "paid-traffic",
    label: "Paid Traffic",
    color: "#A838FD",
    icon: "◆",
    title: "Paid Media Execution",
    description:
      "Multi-platform media buying on Meta, Google, TikTok, and LinkedIn. Every campaign is structured around customer acquisition cost targets, not vanity metrics.",
    outputs: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Budget Allocation"],
  },
  {
    id: "landing-page",
    label: "Landing Page",
    color: "#3D5BFD",
    icon: "▲",
    title: "Conversion Infrastructure",
    description:
      "Dedicated conversion pages for every campaign. Not your homepage — purpose-built landing pages with clear messaging, social proof, and a single call to action.",
    outputs: ["Dedicated Landing Pages", "Offer Pages", "Lead Capture Forms", "Mobile Optimisation"],
  },
  {
    id: "conversion",
    label: "Conversion",
    color: "#3D5BFD",
    icon: "●",
    title: "CRO & Optimisation",
    description:
      "We continuously improve conversion rates through heatmap analysis, A/B testing, copy optimisation, and UX refinement. Every percentage point of improvement multiplies ROAS.",
    outputs: ["A/B & Multivariate Tests", "Heatmap Analysis", "Copy Optimisation", "Funnel Audits"],
  },
  {
    id: "tracking",
    label: "Tracking",
    color: "#0A94FD",
    icon: "◉",
    title: "Attribution & Analytics",
    description:
      "Accurate, first-party tracking so you know exactly what's working. Server-side tracking, GA4, Meta CAPI, and custom dashboards that give you the full picture.",
    outputs: ["Server-Side Tracking", "GA4 Configuration", "Meta Conversion API", "Custom Dashboards"],
  },
  {
    id: "crm",
    label: "CRM",
    color: "#0A94FD",
    icon: "⬡",
    title: "CRM & Automation",
    description:
      "Leads don't convert themselves. We build automated follow-up sequences, lead scoring, and nurturing workflows that work while you sleep.",
    outputs: ["CRM Setup", "Lead Nurturing Flows", "WhatsApp Automation", "Email Sequences"],
  },
  {
    id: "revenue",
    label: "Revenue",
    color: "#36C2FE",
    icon: "★",
    title: "Measurable Revenue",
    description:
      "Every component of the system is connected to revenue outcomes. We report on CAC, ROAS, LTV, and payback period — not impressions or clicks.",
    outputs: ["Revenue Reporting", "LTV Analysis", "CAC Tracking", "Payback Period"],
  },
];

export function AcquisitionSystem() {
  const [active, setActive] = useState(systemNodes[0]);

  return (
    <section className="py-section bg-[#0A0A0C]" aria-labelledby="system-heading">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-azure uppercase tracking-widest mb-4">
            The PerformX system
          </p>
          <h2 id="system-heading" className="text-display-md font-bold text-white mb-6">
            A complete acquisition system,{" "}
            <GradientText>not isolated campaigns.</GradientText>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Every component is connected. Each stage feeds the next. The result is a compounding
            system where improvements to any stage improve overall performance.
          </p>
        </div>

        {/* System diagram */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Nodes */}
          <div>
            {/* Desktop: horizontal chain */}
            <div className="hidden md:block">
              <div className="flex items-start gap-0 mb-8" role="list" aria-label="Acquisition system stages">
                {systemNodes.map((node, i) => (
                  <div key={node.id} className="flex items-center flex-1" role="listitem">
                    <button
                      className={cn(
                        "flex flex-col items-center gap-3 w-full group cursor-pointer focus-visible:outline-none",
                        active.id === node.id ? "opacity-100" : "opacity-50 hover:opacity-80"
                      )}
                      onClick={() => setActive(node)}
                      aria-pressed={active.id === node.id}
                      aria-label={`View ${node.label} stage details`}
                    >
                      <div
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center text-lg transition-all duration-300",
                          active.id === node.id ? "scale-110 shadow-lg" : "hover:scale-105"
                        )}
                        style={{
                          background: `${node.color}20`,
                          borderColor: `${node.color}60`,
                          border: "1.5px solid",
                          boxShadow: active.id === node.id ? `0 0 30px ${node.color}40` : undefined,
                        }}
                      >
                        <span style={{ color: node.color }} aria-hidden="true">{node.icon}</span>
                      </div>
                      <span className="text-xs font-medium text-white/70 text-center leading-tight">{node.label}</span>
                    </button>
                    {i < systemNodes.length - 1 && (
                      <div className="w-px h-px relative flex-shrink-0">
                        <svg width="24" height="2" className="absolute left-0 top-[-1px] -translate-x-full" aria-hidden="true">
                          <line x1="0" y1="1" x2="24" y2="1" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 2" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical list */}
            <div className="md:hidden space-y-3 mb-8">
              {systemNodes.map((node) => (
                <button
                  key={node.id}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left",
                    active.id === node.id
                      ? "border-white/20 bg-white/5"
                      : "border-white/5 hover:border-white/10"
                  )}
                  onClick={() => setActive(node)}
                  aria-pressed={active.id === node.id}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${node.color}20`, border: `1.5px solid ${node.color}40` }}
                  >
                    <span style={{ color: node.color }} className="text-base" aria-hidden="true">{node.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{node.label}</p>
                    <p className="text-xs text-white/40">{node.title}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Progressive connection line (desktop) */}
            <div className="hidden md:block relative h-1 rounded-full bg-white/5 overflow-hidden mb-2">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-brand-gradient transition-all duration-500"
                style={{
                  width: `${((systemNodes.findIndex((n) => n.id === active.id) + 1) / systemNodes.length) * 100}%`,
                }}
              />
            </div>
            <p className="hidden md:block text-xs text-white/20 text-center mt-2">
              Click each stage to explore
            </p>
          </div>

          {/* Detail card */}
          <div
            key={active.id}
            className="card-dark p-8 border-gradient"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
              style={{ background: `${active.color}20`, border: `1.5px solid ${active.color}40` }}
            >
              <span style={{ color: active.color }} aria-hidden="true">{active.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{active.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">{active.description}</p>
            <div>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">What we deliver</p>
              <ul className="space-y-2">
                {active.outputs.map((output) => (
                  <li key={output} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient flex-shrink-0" style={{ background: active.color }} />
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
