const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      fontFamily: {
        display: [
          "Source Sans Pro",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        body: [
          "Mochiy Pop P One",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
