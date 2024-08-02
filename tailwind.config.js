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
    colors: {
      primary: "#d90429",
      secondary: "#ef233c",
      light: "#edf2f4",
      neutral: "#8d99ae",
      dark: "#2b2d42",
      white: "#ffffff",
      text: "#333333",
      footer: "#022b3a", // Add this line
      "1f7a8c": "#1f7a8c",
    },
  },
  plugins: [],
};
