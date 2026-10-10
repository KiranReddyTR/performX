"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      { group: "Paid Media", items: [
        { label: "Meta Ads", href: "/services/meta-ads" },
        { label: "Google Ads", href: "/services/google-ads" },
        { label: "TikTok Ads", href: "/services/tiktok-ads" },
        { label: "LinkedIn Ads", href: "/services/linkedin-ads" },
        { label: "Paid Media Strategy", href: "/services/paid-media-strategy" },
      ]},
      { group: "Creative", items: [
        { label: "Performance Creative & UGC", href: "/services/performance-creative" },
        { label: "AI Video & Creative Production", href: "/services/ai-video-creative" },
      ]},
      { group: "Conversion & Data", items: [
        { label: "Landing Pages & CRO", href: "/services/landing-pages-cro" },
        { label: "Tracking & Analytics", href: "/services/tracking-analytics" },
      ]},
      { group: "Automation", items: [
        { label: "CRM & Automation", href: "/services/crm-automation" },
        { label: "Email Marketing", href: "/services/email-marketing" },
        { label: "WhatsApp Marketing", href: "/services/whatsapp-marketing" },
      ]},
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { group: "Industries", items: [
        { label: "E-commerce & D2C", href: "/industries/ecommerce-d2c" },
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Education", href: "/industries/education" },
        { label: "Healthcare & Wellness", href: "/industries/healthcare-wellness" },
        { label: "Automobile & Dealerships", href: "/industries/automobile" },
        { label: "Travel, Events & Hospitality", href: "/industries/travel-events" },
        { label: "Jewellery, Furniture & Retail", href: "/industries/jewellery-furniture-retail" },
      ]},
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { group: "Company", items: [
        { label: "About PerformX", href: "/about" },
        { label: "Why PerformX", href: "/why-performx" },
        { label: "Our Process", href: "/process" },
        { label: "Who We Work With", href: "/who-we-work-with" },
        { label: "Careers", href: "/careers" },
      ]},
    ],
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#010002]/90 backdrop-blur-xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        )}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg transition-colors duration-200 hover:bg-white/5",
                      activeDropdown === item.label && "text-white bg-white/5"
                    )}
                    aria-expanded={item.children ? activeDropdown === item.label : undefined}
                    aria-haspopup={item.children ? "true" : undefined}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform duration-200", activeDropdown === item.label && "rotate-180")}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#0A0A0C] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 p-6 min-w-[480px]"
                      role="menu"
                    >
                      <div className={cn("grid gap-6", item.children.length > 2 ? "grid-cols-2" : "grid-cols-1")}>
                        {(item.children as Array<{ group: string; items: Array<{ label: string; href: string }> }>).map((group) => (
                          <div key={group.group}>
                            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">{group.group}</p>
                            <ul className="space-y-1">
                              {group.items.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150"
                                    role="menuitem"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="secondary" size="sm" href="/book-a-call">
                Book a Discovery Call
              </Button>
              <Button variant="primary" size="sm" href="/free-growth-audit">
                Get Free Growth Audit
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-[#010002] transition-all duration-300 lg:hidden overflow-y-auto",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="pt-24 pb-8 px-6 space-y-8">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block text-xl font-semibold text-white mb-4"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-6">
                  {(item.children as Array<{ group: string; items: Array<{ label: string; href: string }> }>).map((group) => (
                    <div key={group.group}>
                      <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">{group.group}</p>
                      <ul className="space-y-2">
                        {group.items.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block text-sm text-white/60 hover:text-white transition-colors py-1"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTAs */}
          <div className="pt-6 space-y-3 border-t border-white/10">
            <Button variant="secondary" size="lg" href="/book-a-call" fullWidth onClick={() => setMobileOpen(false)}>
              Book a Discovery Call
            </Button>
            <Button variant="primary" size="lg" href="/free-growth-audit" fullWidth onClick={() => setMobileOpen(false)}>
              Get Free Growth Audit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
