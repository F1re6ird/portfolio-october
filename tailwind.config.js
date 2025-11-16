/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FAFAFA",
          light: "#FAFAFA",
          dark: "#1C1C1C",
          secondary: "#757575",
        },
      },
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};