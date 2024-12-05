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
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          400: "#55A03E",
          500: "#449935",
        },
      },
      maxWidth: {
        "7xl": "1108px",
        "8xl": "1512px",
      },
      boxShadow: {
        button: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
        card: "0px 4px 32px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
