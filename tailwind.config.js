const themes = require("./themes");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: themes.colors,
      fontSize: themes.fontSizes,
      fontFamily: themes.fontFamily,
      spacing: themes.spacing,
    },
  },
  plugins: [],
};
