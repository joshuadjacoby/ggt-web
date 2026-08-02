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
        "sage-teal": "#C1613E",
        "deep-teal": "#2A3648",
        "soft-sage": "#F0E6DC",
        "warm-cream": "#F7F5F0",
        charcoal: "#2C2C2A",
        "stone-gray": "#8A8073",
      },
      fontFamily: {
        georgia: ["Georgia", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
