"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white" | "icon-only";
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", className, href = "/", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 32, iconSize: 28 },
    md: { width: 152, height: 40, iconSize: 36 },
    lg: { width: 192, height: 50, iconSize: 44 },
  };
  const { width, height, iconSize } = sizes[size];

  const logoContent = (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* PX Icon Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="px-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7415FD" />
            <stop offset="0.35" stopColor="#A838FD" />
            <stop offset="0.65" stopColor="#3D5BFD" />
            <stop offset="0.85" stopColor="#0A94FD" />
            <stop offset="1" stopColor="#36C2FE" />
          </linearGradient>
        </defs>
        {/* P letterform */}
        <path
          d="M6 8h10a8 8 0 0 1 0 16H6V8z"
          fill="none"
          stroke="url(#px-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="6" y1="24" x2="6" y2="34" stroke="url(#px-gradient)" strokeWidth="2.5" strokeLinecap="round" />
        {/* X letterform */}
        <line x1="24" y1="8" x2="36" y2="24" stroke="url(#px-gradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="8" x2="24" y2="24" stroke="url(#px-gradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="22" y1="26" x2="28" y2="34" stroke="url(#px-gradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="34" y1="26" x2="28" y2="34" stroke="url(#px-gradient)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      {variant !== "icon-only" && (
        <svg
          width={size === "sm" ? 88 : size === "md" ? 110 : 138}
          height={size === "sm" ? 20 : size === "md" ? 24 : 30}
          viewBox="0 0 110 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="PerformX"
        >
          <defs>
            <linearGradient id="text-gradient" x1="0" y1="0" x2="110" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7415FD" />
              <stop offset="0.4" stopColor="#3D5BFD" />
              <stop offset="0.7" stopColor="#0A94FD" />
              <stop offset="1" stopColor="#36C2FE" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="19"
            fontFamily="'Poppins', system-ui, sans-serif"
            fontWeight="600"
            fontSize="20"
            letterSpacing="-0.5"
            fill={variant === "white" ? "#FFFFFF" : "url(#text-gradient)"}
          >
            Perform
          </text>
          <text
            x="79"
            y="19"
            fontFamily="'Poppins', system-ui, sans-serif"
            fontWeight="700"
            fontSize="20"
            letterSpacing="-0.5"
            fill="url(#text-gradient)"
          >
            X
          </text>
        </svg>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet rounded-sm" aria-label="PerformX — Performance That Scales">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
