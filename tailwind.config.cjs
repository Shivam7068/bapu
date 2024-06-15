/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      Hero: ' linear-gradient(to right top, #aff6fc, #a8eeff, #b5e3ff, #d0d5ff, #f0c5ff)',
    },
    keyframes: {
      Bounce: {
        '100%': { transform: ' translateY(-10px); ' }
      },
      Translate: {
        '100%': { transform: ' translatex(-100px); ' }
      },

    }
  },
}