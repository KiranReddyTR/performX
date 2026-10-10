import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NewsletterInline } from "@/components/forms/NewsletterInline";

const footerLinks = {
  Services: [
    { label: "Meta Ads", href: "/services/meta-ads" },
    { label: "Google Ads", href: "/services/google-ads" },
    { label: "TikTok Ads", href: "/services/tiktok-ads" },
    { label: "LinkedIn Ads", href: "/services/linkedin-ads" },
    { label: "Performance Creative", href: "/services/performance-creative" },
    { label: "Landing Pages & CRO", href: "/services/landing-pages-cro" },
    { label: "CRM & Automation", href: "/services/crm-automation" },
    { label: "Tracking & Analytics", href: "/services/tracking-analytics" },
  ],
  Company: [
    { label: "About PerformX", href: "/about" },
    { label: "Why PerformX", href: "/why-performx" },
    { label: "Our Process", href: "/process" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Resources", href: "/resources" },
  ],
  Industries: [
    { label: "E-commerce & D2C", href: "/industries/ecommerce-d2c" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Education", href: "/industries/education" },
    { label: "Healthcare & Wellness", href: "/industries/healthcare-wellness" },
    { label: "Automobile", href: "/industries/automobile" },
    { label: "Travel & Events", href: "/industries/travel-events" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#010002] border-t border-white/[0.06]" role="contentinfo">
      {/* Newsletter CTA band */}
      <div className="border-b border-white/[0.06]">
        <div className="section-container py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">Stay sharp</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Growth insights, direct to your inbox.
            </h2>
            <NewsletterInline />
            <p id="newsletter-hint" className="text-xs text-white/30 mt-3">
              No spam. Performance marketing insights only. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="md" />
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              We don't run ads. We build profitable customer acquisition systems that connect
              creative, paid media, conversion, data, and automation to measurable business growth.
            </p>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">
              Performance That Scales
            </p>

            {/* Contact */}
            <div className="space-y-3 pt-2">
              <a
                href="mailto:rishigoswami2234@gmail.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                aria-label="Send email to PerformX"
              >
                <Mail size={15} className="text-brand-azure group-hover:text-brand-cyan transition-colors" aria-hidden="true" />
                rishigoswami2234@gmail.com
              </a>
              <a
                href="tel:+918839685579"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                aria-label="Call PerformX"
              >
                <Phone size={15} className="text-brand-azure group-hover:text-brand-cyan transition-colors" aria-hidden="true" />
                +91 88396 85579
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/performex.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
                aria-label="PerformX on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
                aria-label="PerformX on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">{group}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} PerformX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
