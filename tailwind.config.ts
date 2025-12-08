import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        sidebar: "var(--color-sidebar)",
        line: "var(--color-line)",
        highlight: "var(--color-highlight)",
        card: "var(--color-card)",
        cardHover: "var(--color-cardHover)",
        hover: "var(--color-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;