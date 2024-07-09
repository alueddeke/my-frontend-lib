import theme from "./src/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: theme.colors,
      fontSize: theme.fontSizes,
      fontFamily: theme.fontFamily,
      spacing: theme.spacing,
    },
  },
  plugins: [],
};
