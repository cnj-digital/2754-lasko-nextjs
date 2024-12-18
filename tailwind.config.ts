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
          700: "#1B5F0A",
          800: "#044A16",
        },
        gray: { 600: "#484848" },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "7xl": "1268px",
        "8xl": "1920px",
      },
      boxShadow: {
        button: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
        card: "0px 4px 32px 0px rgba(0, 0, 0, 0.25)",

        "small-card": "box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.32)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        neutraface: ["var(--font-Neutraface-Display)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
