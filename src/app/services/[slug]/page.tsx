import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = services.find((sv) => sv.slug === params.slug);
  if (!s) return { title: "Service Not Found" };
  return {
    title: `${s.title} — PerformX`,
    description: s.description,
    alternates: { canonical: `https://performx.agency/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const relatedCS = caseStudies.filter((cs) =>
    cs.services.some((s) => s.toLowerCase().includes(service.shortTitle.toLowerCase()))
  ).slice(0, 3);

  const otherServices = services.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 4);

  const catColor: Record<string, string> = {
    "Paid Media": "#7415FD", "Creative": "#A838FD", "Conversion": "#3D5BFD",
    "Data": "#0A94FD", "Automation": "#36C2FE",
  };
  const color = catColor[service.category] ?? "#7415FD";

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-white/30">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white/60">{service.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            {/* Header */}
            <Badge variant="subtle" className="mb-6">{service.category}</Badge>
            <h1 className="text-display-md font-bold text-white mb-6">
              <GradientText>{service.title}</GradientText>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12">{service.description}</p>

            {/* Problem */}
            <section className="mb-10" aria-labelledby="problem-heading">
              <h2 id="problem-heading" className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: `${color}20`, color }}>01</span>
                The Problem
              </h2>
              <div className="p-6 rounded-xl border border-red-500/15 bg-red-500/5">
                <p className="text-base text-white/60 leading-relaxed">{service.problem}</p>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10" aria-labelledby="solution-heading">
              <h2 id="solution-heading" className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: `${color}20`, color }}>02</span>
                How We Solve It
              </h2>
              <p className="text-base text-white/60 leading-relaxed">{service.solution}</p>
            </section>

            {/* Tools */}
            <section className="mb-12" aria-labelledby="tools-heading">
              <h2 id="tools-heading" className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                <Wrench size={18} className="text-white/40" aria-hidden="true" />
                Tools & Platforms
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="text-sm text-white/60 px-3 py-1.5 bg-white/5 rounded-xl border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Related Case Studies */}
            {relatedCS.length > 0 && (
              <section aria-labelledby="cs-heading">
                <h2 id="cs-heading" className="text-lg font-bold text-white mb-6">Related Case Studies</h2>
                <div className="space-y-4">
                  {relatedCS.map((cs) => (
                    <Link key={cs.id} href={`/case-studies/${cs.slug}`}
                      className="card-dark p-6 flex items-center gap-6 group hover:border-white/15 transition-all duration-300">
                      <div className="flex-1">
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-1">{cs.industry}</p>
                        <p className="text-sm font-semibold text-white">{cs.client}</p>
                        <p className="text-xs text-white/40 mt-1 line-clamp-1">{cs.results}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        {cs.metrics.filter((m) => m.verified && m.label !== "Channel")[0] && (
                          <div className="text-xl font-bold bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(90deg, ${cs.imageColor}, #36C2FE)` }}>
                            {cs.metrics.filter((m) => m.verified && m.label !== "Channel")[0].value}
                          </div>
                        )}
                        <ArrowRight size={16} className="text-white/20 group-hover:text-brand-azure group-hover:translate-x-1 transition-all ml-auto" aria-hidden="true" />
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
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Ready to get started?</p>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">Get a free audit to see how {service.title} can improve your customer acquisition.</p>
              <div className="space-y-3">
                <Button variant="primary" size="md" href="/free-growth-audit" fullWidth>Get Free Growth Audit</Button>
                <Button variant="secondary" size="md" href="/book-a-call" fullWidth>Book a Discovery Call</Button>
              </div>
            </div>
            {otherServices.length > 0 && (
              <div className="card-dark p-6">
                <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Related Services</p>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`}
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors py-1.5 group">
                      <CheckCircle2 size={13} style={{ color }} aria-hidden="true" />
                      {s.shortTitle}
                      <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
