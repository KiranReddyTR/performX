import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#010002",
          white: "#FFFFFF",
          "violet": "#7415FD",
          "purple": "#A838FD",
          "blue": "#3D5BFD",
          "azure": "#0A94FD",
          "cyan": "#36C2FE",
        },
        surface: {
          DEFAULT: "#010002",
          "01": "#0A0A0C",
          "02": "#111114",
          "03": "#1A1A1F",
          "04": "#222228",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          subtle: "rgba(255,255,255,0.04)",
          accent: "rgba(116,21,253,0.3)",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #7415FD 0%, #A838FD 25%, #3D5BFD 60%, #0A94FD 80%, #36C2FE 100%)",
        "brand-gradient-135": "linear-gradient(135deg, #7415FD 0%, #A838FD 25%, #3D5BFD 60%, #0A94FD 80%, #36C2FE 100%)",
        "dark-gradient": "linear-gradient(180deg, #010002 0%, #0A0A0C 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(116,21,253,0.06) 0%, rgba(58,91,253,0.04) 100%)",
        "hero-radial": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(116,21,253,0.2) 0%, transparent 60%)",
        "glow-violet": "radial-gradient(ellipse 400px 400px at center, rgba(116,21,253,0.15) 0%, transparent 70%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 8rem)",
        "section-sm": "clamp(3rem, 6vw, 6rem)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
