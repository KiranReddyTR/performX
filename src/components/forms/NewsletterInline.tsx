"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Integration adapter — awaiting email provider configuration
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-brand-cyan text-sm font-medium">You're on the list. We'll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-white/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-violet/60 transition-colors"
      />
      <Button type="submit" variant="primary" size="md">Notify me</Button>
    </form>
  );
}
