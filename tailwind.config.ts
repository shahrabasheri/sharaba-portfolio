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
        sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-outfit)", "ui-monospace", "monospace"],
      },
      colors: {
        dark: {
          DEFAULT: "#FFFFFF",
          light: "#F4F4F4",
          card: "#FFFFFF",
        },
        "blue-gray": {
          DEFAULT: "#F4F4F4",
          light: "#EBEBEB",
        },
        // Accent: Sarah Lauchli portfolio magenta (#B51F64)
        gold: {
          DEFAULT: "#B51F64",
          light: "#D43077",
          dark: "#8E1B50",
        },
        "text-primary": "#000000",
        "text-secondary": "#4F4F4F",
        "tag-border": "#D9D9D9",
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
