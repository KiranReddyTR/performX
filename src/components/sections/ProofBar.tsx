import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: "7.9", suffix: "X", label: "Peak ROAS", note: "Fashion D2C campaign — verified" },
  { value: "90", suffix: "%", label: "CPL Reduction", note: "Commercial Real Estate — verified" },
  { value: "5900", suffix: "+", label: "Enquiries Generated", note: "Travel & Tours, ₹12.67 CPE — verified" },
  { value: "500", suffix: "+", label: "Qualified Leads", note: "Automobile Dealership — verified" },
  { value: "150", suffix: "+", label: "Campaigns Launched", note: "Across 20+ industries" },
];

export function ProofBar() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0A0A0C]" aria-label="Performance evidence">
      <div className="section-container py-16">
        <p className="text-center text-xs font-semibold text-white/30 uppercase tracking-widest mb-12">
          Verified results from active client campaigns
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                <span className="bg-brand-gradient bg-clip-text text-transparent tabular-nums">
                  {stat.value}{stat.suffix}
                </span>
              </div>
              <p className="text-sm font-medium text-white/80 mb-1">{stat.label}</p>
              <p className="text-xs text-white/30 leading-tight">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
