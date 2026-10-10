import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Search, Video, Briefcase, Map, Sparkles, Film, Layout, BarChart, Settings, Mail, MessageCircle } from "lucide-react";
import { services, servicesByCategory } from "@/data/services";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — PerformX",
  description: "Complete performance marketing services: Meta Ads, Google Ads, TikTok, LinkedIn, Performance Creative, CRO, Landing Pages, Tracking, CRM & Automation.",
  alternates: { canonical: "https://performx.agency/services" },
};

const iconMap: Record<string, React.ElementType> = {
  target: Target, search: Search, video: Video, briefcase: Briefcase, map: Map,
  sparkles: Sparkles, film: Film, layout: Layout, "bar-chart": BarChart,
  settings: Settings, mail: Mail, "message-circle": MessageCircle,
};

const catColors: Record<string, string> = {
  "Paid Media": "#7415FD", "Creative": "#A838FD", "Conversion": "#3D5BFD",
  "Data": "#0A94FD", "Automation": "#36C2FE",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">What we do</p>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Every capability your acquisition{" "}
            <GradientText>system needs.</GradientText>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed">
            12 integrated services across paid media, creative, conversion, data, and automation.
            Each one designed to work as part of a complete system, not in isolation.
          </p>
        </div>

        {Object.entries(servicesByCategory).map(([cat, svcs]) => {
          const color = catColors[cat] ?? "#7415FD";
          return (
            <div key={cat} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold text-white">{cat}</h2>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {svcs.map((service) => {
                  const Icon = iconMap[service.icon] ?? Target;
                  return (
                    <Link key={service.id} href={`/services/${service.slug}`}
                      className="card-dark p-7 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all group-hover:scale-110 duration-300"
                        style={{ background: `${color}15`, borderColor: `${color}40` }}>
                        <Icon size={22} style={{ color }} aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-white/45 leading-relaxed">{service.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/30 group-hover:text-brand-azure transition-colors">
                        Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div className="mt-8 p-10 rounded-2xl border border-white/8 bg-white/[0.02] text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Not sure which services you need?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Start with a free Growth Audit. We'll assess your current setup and recommend the exact services your acquisition system needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/free-growth-audit">Get Free Growth Audit</Button>
            <Button variant="secondary" size="lg" href="/book-a-call">Book a Discovery Call</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
