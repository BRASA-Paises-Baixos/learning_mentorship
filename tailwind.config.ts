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
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -40px rgba(46, 46, 46, 0.45)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
