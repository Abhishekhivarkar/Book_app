/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 enables dark mode using the 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 scans all your src files
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'], // 👈 your custom font
      },
    },
  },
  plugins: [],
}