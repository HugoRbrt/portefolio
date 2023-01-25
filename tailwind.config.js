/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "black-t-80": "rgba(0, 0, 0, 0.6)",
        "portefolio-blue1": "#00509d",
        "portefolio-blue2": "#003f88",
        "portefolio-blue3": "#0b1829",
        "portefolio-yellow1": "#ffd500",
        "portefolio-yellow2": "#fdc500",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontColor: {
        "portefolio-blue3": "#0b1829",
      },
    },
  },
  plugins: [],
};
