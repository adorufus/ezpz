/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
      },
      backgroundColor: {
        ezpz: "#E51F7E",
      },
      colors: {
        ezpz: "#E51F7E",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.red.300") },
        },
      }),
    },
    container: {
      padding: "50%",
    },
  },
  plugins: [],
};
