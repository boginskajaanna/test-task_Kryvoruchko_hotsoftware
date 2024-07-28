/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        xl: "24px",
      },
      screens: {
        "2xl": "1920px",
      },
    },
    extend: {
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
        "2xl": "1920px",
      },
      fontFamily: {
        sofia: ["Sofia Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        bold: 700,
        "extra-bold": 800,
        regular: 400,
        "semi-bold": 600,
      },
      lineHeight: {
        1.2: "1.2",
        1.33: "1.33",
      },
      letterSpacing: {
        tight: "-.02em",
      },
      colors: {
        "bg-primary": "#312442",
        "light-primary": "#FFFFFF",
        "bg-secondary": "#3D2D52",
        "bg-dark": "#000000",
        "bg-input": "#E6ECF1",
        muted: "#7E93A8",
        accent: "#F4E02B",
        shadow: "#E84A11",
      },
      backgroundImage: {
        "violet-gradient": "linear-gradient(180deg, rgba(49, 36, 66, 1) 0%, rgba(25, 18, 33, 0.88) 73%)",
        "black-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 0) 100%)",
        "bottom-fade-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 1) 46%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [],
};
