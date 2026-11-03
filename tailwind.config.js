/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7EC",
        green: "#1F3D2B",
        gold: "#C9962B",
        sand: "#F3ECD6",
        "pale-sage": "#E6EDE4",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
