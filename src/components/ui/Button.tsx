"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, external, loading, fullWidth, className, children, disabled, ...props }, ref) => {
    const base = cn(
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-50 disabled:cursor-not-allowed select-none",
      fullWidth && "w-full",
      {
        // Primary — gradient fill
        "bg-brand-gradient text-white shadow-lg hover:shadow-brand-violet/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99]":
          variant === "primary",
        // Secondary — outline with gradient border
        "relative bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.99]":
          variant === "secondary",
        // Ghost
        "bg-transparent text-white/70 hover:text-white hover:bg-white/5 active:scale-[0.99]":
          variant === "ghost",
        // Outline gradient
        "border-gradient bg-transparent text-white hover:bg-white/5 active:scale-[0.99]":
          variant === "outline",
        // Sizes
        "text-xs px-4 py-2.5 rounded-lg": size === "sm",
        "text-sm px-6 py-3 rounded-xl": size === "md",
        "text-base px-8 py-4 rounded-xl": size === "lg",
      },
      className
    );

    const content = (
      <>
        {loading && (
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={base}
        >
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={base} disabled={disabled || loading} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
