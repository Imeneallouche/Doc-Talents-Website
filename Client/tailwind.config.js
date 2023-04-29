/* @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      "dark-purple": "#19202E",
      purple: "#1E2959",
      "white-bluish": "#E3EDEF",
      orange: "#D96B7F",
      green: "#51BCA2",
      white: "#ffffff",
      "light-purple": "#407BFF",
    },
    extend: {},
  },
  plugins: [],
};
