import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sage-teal": "#1D9E75",
        "deep-teal": "#0F6E56",
        "soft-sage": "#E1F5EE",
        "warm-cream": "#F7F5F0",
        charcoal: "#2C2C2A",
        "stone-gray": "#888780",
      },
      fontFamily: {
        georgia: ["Georgia", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
