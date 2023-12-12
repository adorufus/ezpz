/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        pulseCustom: "pulseCustom 0.3s",
        pulseBackCustom: "pulseBackCustom 0.3s",
        pulseProduct: "pulseProduct 0.3s",
        pulseBackProduct: "pulseBackProduct 0.3s",
        fadeItem: "fadeItem 0.3s ease-in-out",
      },
      backgroundColor: {
        ezpz: "#F26522",
      },
      colors: {
        ezpz: "#F26522",
      },
      cursor: {
        // 'ezpz': 'url("/assets/cursor/ezpz.svg"), pointer'
        ezpz: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bang_icon_32x32.svg/1024px-Bang_icon_32x32.svg.png), auto",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.red.300") },
        },
        fadeItem: {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.white") },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseCustom: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
        pulseBackCustom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(0)" },
        },
        pulseProduct: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
        },
        pulseBackProduct: {
          "0%": { transform: "scale(2)" },
          "50%": { transform: "scale(1)" },
        },
      }),
    },
    container: {
      padding: "50%",
    },
  },
  plugins: [],
};
