const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "../../packages/ui/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    colors: {
      transparent: "transparent",

      "u-blue-700": "#034997", // hover
      "u-blue-500": "#005FCA", // basic
      "u-blue-300": "#4EAAFF", // accent
      "u-blue-200": "#B3CDEA", // disabled
      "u-blue-100": "#D2E7FF", // additional

      "u-yellow-800": "#FFCA1D",
      "u-yellow-700": "#FFD600", // basic
      "u-yellow-500": "#FFE600", // accent
      "u-yellow-100": "#FFF3B3", // additional

      "u-black-700": "#333",
      "u-black-600": "#212121",
      "u-black-400": "#636363",
      "u-black-200": "#C4C4C4",
      "u-black-50": "#EDEDED",
      "u-black-10": "#FAFAFA",

      ...colors,
    },
  },
  plugins: [],
};
