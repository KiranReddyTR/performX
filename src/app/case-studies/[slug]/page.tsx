import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: `${cs.client} — ${cs.metrics[0]?.value ?? "Case Study"} | PerformX`,
    description: cs.results,
    alternates: { canonical: `https://performx.agency/case-studies/${cs.slug}` },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === params.slug);
  const prev = caseStudies[idx - 1];
  const next = caseStudies[idx + 1];

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-white/30">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white/60 truncate max-w-[200px]">{cs.client}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1fr_340px] gap-12">
          {/* Main content */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="subtle">{cs.industry}</Badge>
                <Badge variant="subtle">{cs.category}</Badge>
                {cs.featured && <Badge variant="outline">Featured</Badge>}
              </div>
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-3">{cs.client}</p>
              <h1 className="text-display-md font-bold text-white mb-6 leading-tight">
                {cs.challenge.split(".")[0]}.
              </h1>

              {/* Verified metrics bar */}
              <div className="flex flex-wrap gap-8 p-6 rounded-2xl border border-white/8 bg-white/[0.02] mb-2">
                {cs.metrics.filter((m) => m.verified).map((m) => (
                  <div key={m.label}>
                    <div className="text-3xl font-bold bg-clip-text text-transparent mb-1"
                      style={{ backgroundImage: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }}>
                      {m.value}
                    </div>
                    <p className="text-sm text-white/50">{m.label}</p>
                    {m.description && <p className="text-xs text-white/25">{m.description}</p>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/25 flex items-center gap-1.5 mb-10">
                <CheckCircle2 size={12} className="text-green-400" aria-hidden="true" />
                All metrics verified from live campaign data
              </p>
            </div>

            {/* Challenge */}
            <section className="mb-10" aria-labelledby="challenge-heading">
              <h2 id="challenge-heading" className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: `${cs.imageColor}20`, color: cs.imageColor }}>01</span>
                The Challenge
              </h2>
              <p className="text-base text-white/60 leading-relaxed">{cs.challenge}</p>
            </section>

            {/* Strategy */}
            <section className="mb-10" aria-labelledby="strategy-heading">
              <h2 id="strategy-heading" className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: `${cs.imageColor}20`, color: cs.imageColor }}>02</span>
                Our Strategy
              </h2>
              <p className="text-base text-white/60 leading-relaxed">{cs.strategy}</p>
            </section>

            {/* Results */}
            <section className="mb-10 p-8 rounded-2xl border border-white/8 bg-white/[0.02]" aria-labelledby="results-heading">
              <h2 id="results-heading" className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold" style={{ background: `${cs.imageColor}20`, color: cs.imageColor }}>03</span>
                Results
              </h2>
              <p className="text-base text-white/60 leading-relaxed">{cs.results}</p>
            </section>

            {/* Services used */}
            <section aria-labelledby="services-heading">
              <h2 id="services-heading" className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Services delivered</h2>
              <div className="flex flex-wrap gap-2">
                {cs.services.map((s) => (
                  <span key={s} className="text-sm text-white/60 px-3 py-1.5 bg-white/5 rounded-xl border border-white/10">{s}</span>
                ))}
              </div>
            </section>

            {/* Prev / Next navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/8">
              {prev ? (
                <Link href={`/case-studies/${prev.slug}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  <span>{prev.client}</span>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/case-studies/${next.slug}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group">
                  <span>{next.client}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-32 self-start">
            <div className="card-dark p-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Get similar results</p>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Want to see what a PerformX acquisition system could do for your business?
              </p>
              <div className="space-y-3">
                <Button variant="primary" size="md" href="/free-growth-audit" fullWidth>
                  Get Free Growth Audit
                </Button>
                <Button variant="secondary" size="md" href="/book-a-call" fullWidth>
                  Book a Discovery Call
                </Button>
              </div>
            </div>

            <div className="card-dark p-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Industry</p>
              <Link href={`/industries/${cs.industry.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group">
                {cs.industry}
                <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            <div className="card-dark p-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">More case studies</p>
              <div className="space-y-3">
                {caseStudies.filter((c) => c.id !== cs.id && c.featured).slice(0, 3).map((c) => (
                  <Link key={c.id} href={`/case-studies/${c.slug}`}
                    className="block text-sm text-white/50 hover:text-white transition-colors py-1 border-b border-white/5 last:border-0">
                    {c.client} — {c.metrics[0]?.value}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
