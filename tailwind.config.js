/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand': {
            'primary': '#ff0000',
            'secondary': '#000000',
            'accent': '#00cc99',
          }
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }