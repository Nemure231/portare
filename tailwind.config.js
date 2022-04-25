
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // This is where you can change the default colors of text
      // If you want list suggestion color, check this link:
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        'primary': '#1f2937',
        'secondary': '#6b7280',
        'main': '#14b8a6',
        'light': '#d1d5db'
      },
      //This is default background colors
      backgroundColor: {
        'secondary': '#1F1F1F',
        'light': '#ffffff',
        'dark': '#121212'
      },
      // The border colors
      borderColor: {
        'main': '#14b8a6'
      },
    },
  },
  plugins: [],
}
