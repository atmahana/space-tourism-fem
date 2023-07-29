/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
      serif: ["Bellefair", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "3.5rem",
      "4xl": "6.25rem",
      "5xl": "9.375rem",
    },
    letterSpacing: {
      wide: "0.146875",
      wider: "0.16875",
      widest: "0.296875rem",
    },
    extend: {
      colors: {
        primary: "#0b0d17",
        secondary: "#d0d6f9",
      },
    },
  },
};
