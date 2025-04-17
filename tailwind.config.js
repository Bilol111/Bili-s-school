/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '350px',  // Min-width: 350px
      'sm': '640px',  // Min-width: 640px
      'md': '768px',  // Min-width: 768px
      'lg': '1024px', // Min-width: 1024px
      'xl': '1280px', // Min-width: 1280px
      '2xl': '1580px' // Min-width: 1580px
    }
  },
  plugins: [],
}