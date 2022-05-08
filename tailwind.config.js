module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "page-background": "url('./assets/img/bg.jpg')",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        hand: ["Qwigley", "cursive"],
      },
    },
  },
  plugins: [],
};
