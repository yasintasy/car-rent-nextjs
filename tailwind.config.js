/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006AFF",
        secondary: "#FF2727",
        black: "#1A1919",
        green: "#52C93F",
        gray: {
          "01": "#525256",
          "02": "#656575",
          "03": "#A3A3A3",
          "04": "#F8F7F1",
        }
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
