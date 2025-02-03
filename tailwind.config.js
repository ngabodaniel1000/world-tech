/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newsbg':'url("./src/assets/Neuralink.jpg")'
      }
    },
  },
  plugins: [],
}