"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies, caseStudyIndustries } from "@/data/case-studies";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function CaseStudyIndex() {
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const industries = ["All", ...caseStudyIndustries];
  const categories = ["All", "Paid Media", "Lead Generation"];

  const filtered = caseStudies.filter((cs) => {
    const byIndustry = activeIndustry === "All" || cs.industry === activeIndustry;
    const byCategory = activeCategory === "All" || cs.category === activeCategory;
    return byIndustry && byCategory;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10" role="group" aria-label="Filter case studies">
        <div className="flex flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveIndustry(ind)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-150",
                activeIndustry === ind
                  ? "bg-brand-violet/20 border-brand-violet/50 text-white"
                  : "bg-white/3 border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
              )}
              aria-pressed={activeIndustry === ind}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((cs) => (
          <Link
            key={cs.id}
            href={`/case-studies/${cs.slug}`}
            className="card-dark overflow-hidden group hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }} aria-hidden="true" />
            <div className="p-7 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge variant="subtle">{cs.industry}</Badge>
                {cs.featured && <Badge variant="outline">Featured</Badge>}
              </div>
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-2">{cs.client}</p>
              <h2 className="text-base font-semibold text-white mb-4 line-clamp-2 leading-snug">
                {cs.challenge.split(".")[0]}.
              </h2>
              <div className="flex flex-wrap gap-4 mb-5 mt-auto">
                {cs.metrics.filter((m) => m.verified && m.label !== "Channel").slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <div className="text-xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }}>
                      {m.value}
                    </div>
                    <p className="text-xs text-white/40">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cs.services.slice(0, 3).map((s) => (
                  <span key={s} className="text-xs text-white/30 px-2 py-1 bg-white/4 rounded-md border border-white/6">{s}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-brand-azure transition-colors">
                <CheckCircle2 size={13} className="text-green-400" aria-hidden="true" />
                <span className="text-xs">Verified</span>
                <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40">No case studies match the selected filters.</p>
        </div>
      )}
    </div>
  );
}
