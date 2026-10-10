import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact — PerformX",
  description: "Get in touch with the PerformX team. Email, phone, WhatsApp, or use our contact form.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h1 className="text-display-lg font-bold text-white mb-6">
            Let's talk{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">growth.</span>
          </h1>
          <p className="text-lg text-white/50">
            Whether you're ready to start or just exploring, we're happy to have an honest
            conversation about your growth goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="card-dark p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-brand-violet" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-1">Email</p>
                <a href="mailto:rishigoswami2234@gmail.com" className="text-sm text-white hover:text-brand-azure transition-colors">
                  rishigoswami2234@gmail.com
                </a>
              </div>
            </div>
            <div className="card-dark p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-azure/10 border border-brand-azure/30 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-brand-azure" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-1">Phone / WhatsApp</p>
                <a href="tel:+918839685579" className="text-sm text-white hover:text-brand-azure transition-colors">
                  +91 88396 85579
                </a>
              </div>
            </div>
            <div className="card-dark p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A838FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-1">Instagram</p>
                <a href="https://instagram.com/performex.agency" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-brand-azure transition-colors">
                  @performex.agency
                </a>
              </div>
            </div>

            <div className="card-dark p-6">
              <p className="text-sm font-semibold text-white mb-2">India headquarters</p>
              <p className="text-sm text-white/40">
                {/* Address placeholder — awaiting client confirmation */}
                India
              </p>
              <p className="text-xs text-white/20 mt-3 italic">Geographic coverage: India, UAE, USA, UK</p>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
