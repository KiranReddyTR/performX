import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Building2, GraduationCap, HeartPulse, Car, MapPin, Gem } from "lucide-react";
import { industries } from "@/data/industries";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries — PerformX",
  description: "Performance marketing expertise across e-commerce, real estate, education, healthcare, automobile, travel, jewellery and retail.",
  alternates: { canonical: "https://performx.agency/industries" },
};

const iconMap: Record<string, React.ElementType> = {
  "shopping-bag": ShoppingBag, "building-2": Building2, "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse, car: Car, "map-pin": MapPin, gem: Gem,
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">Industries</p>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Deep expertise across{" "}
            <GradientText>20+ industries.</GradientText>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed">
            Industry context matters in performance marketing. Knowing the compliance requirements,
            buying cycles, and audience psychology of your sector produces better results than generic campaigns.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] ?? ShoppingBag;
            const colors = ["#7415FD","#A838FD","#3D5BFD","#0A94FD","#36C2FE","#7415FD","#A838FD"];
            const color = colors[i % colors.length];
            return (
              <Link key={industry.id} href={`/industries/${industry.slug}`}
                className="card-dark p-8 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all group-hover:scale-110 duration-300"
                  style={{ background: `${color}15`, borderColor: `${color}35` }}>
                  <Icon size={26} style={{ color }} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white mb-3">{industry.title}</h2>
                  <p className="text-sm text-white/45 leading-relaxed">{industry.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/30 group-hover:text-brand-azure transition-colors mt-auto">
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-10 rounded-2xl border border-white/8 bg-white/[0.02] text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don't see your industry?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">We've worked across 20+ industries. If yours isn't listed, get in touch — the acquisition principles translate across most B2C and high-ticket B2B verticals.</p>
          <Button variant="primary" size="lg" href="/contact">Get in Touch</Button>
        </div>
      </div>
    </div>
  );
}
