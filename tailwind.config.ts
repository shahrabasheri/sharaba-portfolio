import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-geist-sans)",
          "var(--font-inter)",
          "sans-serif",
        ],
        serif: [
          "var(--font-instrument-serif)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      // Tokens kept for backwards-compat naming, values inverted for the
      // light/white theme. "dark" now means the page background (white).
      colors: {
        dark: {
          DEFAULT: "#FFFFFF", // page background
          light: "#F8F6F0", // softly tinted band
          card: "#FFFFFF", // surface card
        },
        "blue-gray": {
          DEFAULT: "#F4F1E8", // warm cream, alt-section background
          light: "#E9E4D2",
        },
        gold: {
          DEFAULT: "#B8902F", // contrast-safe gold for body/text use
          light: "#D4A843", // original lighter gold for accents/CTAs
          dark: "#8C6E1F",
        },
        "text-primary": "#0F1316",
        "text-secondary": "#5A5A5F",
        "tag-border": "#D9D5C8",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
