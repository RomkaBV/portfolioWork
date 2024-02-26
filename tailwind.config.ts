import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headerFont: ["Satoshi", "cursive"],
        headerBoldFont: ["Satoshi_Bold", "cursive"],
        heroFont: ["Switzer", "cursive"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "2.25rem",
        "4xl": "2.441rem",
        "4.4xl": "2.5rem",
        "5xl": "3.052rem",
        "5.5xl": "3.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
