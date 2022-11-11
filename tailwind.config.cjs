/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      orange: "#ef6d58",
      "orange-low": "#EF6C57",
      green: "#13ce66",
      brown: "#391400",
      "dark-blue": "#28293E",
      "pink-low": "#FDF0E9",
      "pink-border": "#F3D1BF",
      yellow: "#F6D021",
    },
    fontFamily: {
      epilogue: ["Epilogue", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
