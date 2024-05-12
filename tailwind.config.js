/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bright-white": "#f4fbff",
        navy: "#000047",
        black: "#050505",
        orange: "#ff7849",
        blue: "#00c0fd",
        white: "#ffffff",
        yblue: "#3ac1de",
        dblue: "#086f83",
        lskyblue: "#b3f1ff",
        lskyblue2: "#256bf4",
        ypurple: "#a5caff",
        primary: "rgba(var(--color-primary), 0.2)",
        primary2: "rgba(var(--color-primary2), 0.2)",
      },
      fontFamily: {
        arial: "arial, sans-serif",
      },
      spacing: {
        70: "70px",
        250: "250px",
        50: "50px",
        200: "200px",
        28: "28px",
        300: "300px",
        150: "150px",
        80: "80%",
        30: "30px",
        237: "237px",
        40: "40px",
        303: "-28px",
        130: "130px",
      },
    },
  },
  plugins: [],
};
