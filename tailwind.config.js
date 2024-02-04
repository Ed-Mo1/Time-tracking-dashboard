/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "1rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
      },
      backgroundColor: {
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(246 80% 60%)",
        "pale-blue": "hsl(236, 100%, 87%)",
        "self-care": "hsl(43, 84%, 65%)",
        blue: "hsl(246, 80%, 60%)",
        work: "hsl(15, 100%, 70%)",
        play: "hsl(195, 74%, 62%)",
        study: "hsl(348, 100%, 68%)",
        exercise: "hsl(145, 58%, 55%)",
        social: "hsl(264, 64%, 52%)",
      },
      colors: {
        blue: "hsl(246, 80%, 60%)",
        work: "hsl(15, 100%, 70%)",
        play: "hsl(195, 74%, 62%)",
        study: "hsl(348, 100%, 68%)",
        exercise: "hsl(145, 58%, 55%)",
        social: "hsl(264, 64%, 52%)",
        "self-care": "hsl(43, 84%, 65%)",
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(246, 80%, 60%);",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [],
};
