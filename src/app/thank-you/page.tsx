import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You — PerformX",
  description: "Your submission has been received. The PerformX team will be in touch within 48 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-24">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={36} className="text-green-400" aria-hidden="true" />
          </div>
          <h1 className="text-display-md font-bold text-white mb-4">
            We've got your request.
          </h1>
          <p className="text-lg text-white/50 mb-8 leading-relaxed">
            Your Growth Audit request has been received. A member of the PerformX team will
            review your information and be in touch within{" "}
            <strong className="text-white">48 hours</strong>.
          </p>
          <p className="text-sm text-white/30 mb-12">
            In the meantime, feel free to explore our case studies or get in touch directly at{" "}
            <a href="mailto:rishigoswami2234@gmail.com" className="text-brand-azure hover:underline">
              rishigoswami2234@gmail.com
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/case-studies">
              Explore Case Studies
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button variant="secondary" href="/">
              Back to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
