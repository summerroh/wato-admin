/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pretendard: ["Pretendard"],
      display: ["pretendard"],
      sans: ["Pretendard", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      sidebar: "#1F1E24;",
      plus: "#F2F7FF",
      white: "#FFFFFF",
    }),
    extend: {
      colors: {
        primary: "#5855FE",
        purple: "#5855FE",
        graycircle: "#D9D9d9",
        life: "#54BD95",
        plusplus: "#0061FF",
        link: "#6F6F6F",
        button: "#54BD95",
        blueplus: "#0061FF",
        high: "#FFEBEB",
        highBorder: "#FFBFBF",
        medium: "#FFFCEA",
        mediumBorder: "#FFCF87",
        low: "#EBF8FF",
        lowBorder: "#99C0FF",
        redtitle: "#E64141",
        orangetitle: "#F2841F",
        superwhite: "#ffffff",
      },
      mainBackgroundImage: {
        "main-right": "url('/src/images/main-right.png')",
      },
      lineHeight: {
        "extra-tight": "1.1",
      },
    },
  },
  plugins: [],
};
