import type { Metadata } from "next";
import { Phone, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Discovery Call — PerformX",
  description: "Schedule a discovery call with the PerformX team. We'll discuss your growth goals and whether we're the right fit.",
};

export default function BookACallPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4">
              Discovery call
            </p>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Let's talk about{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                your growth.
              </span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              A 30-minute call to understand your business, your current acquisition challenges,
              and whether PerformX is the right partner to help you scale.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { icon: Clock, text: "30 minutes — no fluff, no pitch deck" },
                { icon: CheckCircle2, text: "We'll audit what you share on the call in real time" },
                { icon: Phone, text: "Video or phone — your preference" },
                { icon: CheckCircle2, text: "No obligation, no hard sell" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={18} className="text-brand-azure flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-white/70">{text}</span>
                </div>
              ))}
            </div>
            <div className="card-dark p-6">
              <p className="text-sm text-white/40 mb-1 font-semibold text-xs uppercase tracking-widest">Can't wait?</p>
              <p className="text-white font-medium mb-1">WhatsApp us directly</p>
              <a href="https://wa.me/918839685579" className="text-brand-azure text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                +91 88396 85579
              </a>
            </div>
          </div>

          {/* Right — calendar embed placeholder */}
          <div className="card-dark p-8 min-h-[500px] flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-violet/10 border border-brand-violet/30 flex items-center justify-center mb-6">
              <Phone size={28} className="text-brand-violet" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">Booking Calendar</h2>
            <p className="text-sm text-white/40 mb-6 max-w-xs leading-relaxed">
              Calendar booking integration is being configured. In the meantime, please reach out directly:
            </p>
            <div className="space-y-3 w-full max-w-xs">
              <a
                href="mailto:rishigoswami2234@gmail.com?subject=Discovery%20Call%20Request"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-gradient text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
              >
                Email to Book a Call
              </a>
              <a
                href="https://wa.me/918839685579?text=Hi%20PerformX%2C%20I%27d%20like%20to%20book%20a%20discovery%20call."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
              >
                WhatsApp to Schedule
              </a>
            </div>
            <p className="text-xs text-white/20 mt-6">
              {/* Integration note for developer: Replace above buttons with Calendly/Cal.com embed widget once booking URL is provided */}
              [INTEGRATION PENDING: Insert Calendly or Cal.com embed here]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
