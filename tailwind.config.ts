import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F1E6",
        ocean: "#1B6D8D",
        sky: "#2FA6A5",
        leaf: "#78B24A",
        sun: "#F2C24B",
        ember: "#F47A5A",
        royal: "#1B4FBF",
        citrus: "#F2B33D",
        charcoal: "#2E2E2E",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        "surface-3": "rgb(var(--surface-3) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        info: "rgb(var(--info) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 4vw, 4rem)", { lineHeight: "1.05" }],
        title: ["clamp(2rem, 3vw, 2.75rem)", { lineHeight: "1.15" }],
        subtitle: ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "clamp(4rem, 7vw, 7rem)",
        "section-sm": "clamp(2.5rem, 5vw, 4rem)",
        gutter: "clamp(1.25rem, 4vw, 2.5rem)",
      },
      boxShadow: {
        soft: "0 24px 60px -40px rgba(46, 46, 46, 0.45)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
