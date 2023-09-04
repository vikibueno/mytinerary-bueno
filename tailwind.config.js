/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        backgroundImage: {
          'mountain':"url('../public/img/mountain12.jpg')",
          'mountain2':"url('../public/img/mountain2.jpg')",
          'mountain3':"url('../public/img/bg-cities.jpg')"
        },
      },
      fontFamily: {
        'sans': ['Segoe UI', ...defaultTheme.fontFamily.sans],
        'rale': ['Raleway']
      },
  },
  variants: {},
  plugins: []
}

