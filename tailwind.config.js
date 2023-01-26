/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "black-t-80": "rgba(0, 0, 0, 0.6)",
        "yellow-t-50": "rgba(239, 179, 47, 0.5)",
        "portefolio-blue1": "#00509d",
        "portefolio-blue2": "#003f88",
        "portefolio-blue3": "#0b1829",
        "portefolio-yellow1": "#ffd500",
        "portefolio-yellow2": "#fdc500",
        ensimag: "#398240",
        epfl: "#EA3323",
        capgemini: "#2F6EA8",
        wavestone: "#4B3174",
      },
    },
  },
  plugins: [],
};
