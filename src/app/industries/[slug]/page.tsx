import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = industries.find((i) => i.slug === params.slug);
  if (!ind) return { title: "Industry Not Found" };
  return {
    title: `${ind.title} Performance Marketing — PerformX`,
    description: ind.description,
    alternates: { canonical: `https://performx.agency/industries/${ind.slug}` },
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  const relatedCS = caseStudies.filter((cs) =>
    cs.industry.toLowerCase().includes(industry.title.toLowerCase().split(" ")[0].toLowerCase()) ||
    industry.title.toLowerCase().includes(cs.industry.toLowerCase().split(" ")[0].toLowerCase())
  ).slice(0, 3);

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-white/30">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white/60">{industry.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            <p className="text-xs font-semibold text-brand-violet uppercase tracking-widest mb-4">Industry</p>
            <h1 className="text-display-md font-bold text-white mb-6">
              Performance marketing for{" "}
              <GradientText>{industry.title}.</GradientText>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12">{industry.description}</p>

            {/* Challenges */}
            <section className="mb-10" aria-labelledby="challenges-heading">
              <h2 id="challenges-heading" className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle size={18} className="text-red-400" aria-hidden="true" />
                Common Challenges in {industry.title}
              </h2>
              <div className="space-y-3">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-red-500/10 bg-red-500/5">
                    <span className="text-xs font-bold text-red-400 mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-white/60">{c}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solutions */}
            <section className="mb-12" aria-labelledby="solutions-heading">
              <h2 id="solutions-heading" className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-brand-cyan" aria-hidden="true" />
                How PerformX Solves These
              </h2>
              <div className="space-y-3">
                {industry.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-brand-azure/15 bg-brand-azure/5">
                    <CheckCircle2 size={16} className="text-brand-azure mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-white/70">{s}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related case studies */}
            {relatedCS.length > 0 && (
              <section aria-labelledby="industry-cs-heading">
                <h2 id="industry-cs-heading" className="text-lg font-bold text-white mb-6">
                  {industry.title} Case Studies
                </h2>
                <div className="space-y-4">
                  {relatedCS.map((cs) => (
                    <Link key={cs.id} href={`/case-studies/${cs.slug}`}
                      className="card-dark p-6 flex items-center gap-6 group hover:border-white/15 transition-all duration-300">
                      <div className="flex-1">
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-1">{cs.client}</p>
                        <p className="text-sm font-semibold text-white line-clamp-1">{cs.results.split(".")[0]}.</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/30 group-hover:text-brand-azure transition-colors flex-shrink-0">
                        View case study
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-32 self-start">
            <div className="card-dark p-6">
              <p className="text-sm font-semibold text-white mb-2">Ready to scale in {industry.title.split(" ")[0]}?</p>
              <p className="text-sm text-white/40 mb-6 leading-relaxed">Get a free audit and see what a full acquisition system could do for your business.</p>
              <div className="space-y-3">
                <Button variant="primary" size="md" href="/free-growth-audit" fullWidth>Get Free Growth Audit</Button>
                <Button variant="secondary" size="md" href="/book-a-call" fullWidth>Book a Discovery Call</Button>
              </div>
            </div>
            <div className="card-dark p-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Other Industries</p>
              <div className="space-y-2">
                {industries.filter((i) => i.id !== industry.id).slice(0, 5).map((i) => (
                  <Link key={i.id} href={`/industries/${i.slug}`}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors py-1.5 group">
                    <ArrowRight size={12} style={{ color: "#7415FD" }} aria-hidden="true" />
                    {i.title}
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
