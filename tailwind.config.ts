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
          500: "#55A03E",
        },
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
