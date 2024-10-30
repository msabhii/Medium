/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBeige: "#f7f4ed",
      },
      fontFamily: {
        charter: ["Merriweather", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        "9xl": "9rem",
      },
      width: {
        112: "28rem",
      },
      height: {
        112: "28rem",
      },
    },
  },
  plugins: [],
};
