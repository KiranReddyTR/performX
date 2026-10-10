import type { Metadata } from "next";
import { CaseStudyIndex } from "@/components/case-studies/CaseStudyIndex";

export const metadata: Metadata = {
  title: "Case Studies — PerformX",
  description: "Verified performance marketing results across e-commerce, real estate, education, healthcare and more. Up to 7.9X ROAS and 90% CPL reduction.",
  alternates: { canonical: "https://performx.agency/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">Verified results</p>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Results we can{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">actually prove.</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed">
            Every metric shown below is verified from real client campaigns. No averages, no projections, no fabricated dashboards. 12 case studies across 7 industries.
          </p>
        </div>
        <CaseStudyIndex />
      </div>
    </div>
  );
}
