/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "Pale-blue": "#e0e8ff",
      "Bright-blue": "#3829e0",
      "Very-pale-blue": "#f5f7ff",
      "Desaturated-blue": "#7280a7",
      "Dark-blue": "#1f2f56",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        "Red-hat": ["Red Hat Display", "sans-serif"],
      },
      backgroundImage: {
        "mobile-pattern": "url('images/pattern-background-mobile.svg')",
        "desktop-pattern": "url('images/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
};
