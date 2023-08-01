/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      serif: ["Bellefair", ...defaultTheme.fontFamily.serif],
      'sans-condensed': ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "3.5rem",
      "4xl": "5rem",
      "5xl": "6.25rem",
    },
    extend: {
      colors: {
        primary: "#0b0d17",
        secondary: "#d0d6f9",
      },
      spacing: {
        30: "7.375rem",
      },
      fontSize: {
        "6xl": "9.375rem",
      },
      letterSpacing: {
        '235': "0.146875rem",
        '270': "0.16875rem",
        '475': "0.296875rem",
      },
      backgroundImage: {
        "home-mobile": "url('/backgrounds/home/background-home-mobile.jpg')",
        "home-tablet": "url('/backgrounds/home/background-home-tablet.jpg')",
        "home-desktop": "url('/backgrounds/home/background-home-desktop.jpg')",
      },
      width: {
        37: "9.375rem",
      },
      height: {
        37: "9.375rem",
      },
    },
  },
};
