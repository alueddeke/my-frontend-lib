// src/themes.ts

const theme = {
  colors: {
    primary: {
      light: "#60A5FA", // light blue
      DEFAULT: "#3B82F6", // blue
      dark: "#2563EB", // dark blue
    },
    secondary: {
      light: "#9CA3AF", // light gray
      DEFAULT: "#6B7280", // gray
      dark: "#4B5563", // dark gray
    },
    background: {
      light: "#F3F4F6", // light gray
      DEFAULT: "#E5E7EB", // gray
      dark: "#D1D5DB", // dark gray
    },
  },
  fontSizes: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
};

export default theme;
