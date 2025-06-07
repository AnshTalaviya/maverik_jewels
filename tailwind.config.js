/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // or any other font like "Inter", "Roboto"
      },
      colors: {
        white: "#ffffff",
        bgColorPink:"#FFE4E4",
        textGreyColor:"#6B7280"
      },
    },




  },
  plugins: [],
}