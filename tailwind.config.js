const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': colors.gray[800],
        'secondary': colors.gray[500],
        'warning': colors.yellow[400],
        'light': colors.gray[300]
      },
      backgroundColor: {
        'secondary': '#1F1F1F',
        'light': colors.white,
        'dark': '#121212'
      },
      borderColor: {
        'warning': colors.yellow[400]
      },
    },
  },
  plugins: [],
}
