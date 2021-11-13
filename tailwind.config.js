const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/images/killjoy-hero-bg.jpg')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
