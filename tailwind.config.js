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
          'cities':"url('../public/img/bg-cities.jpg')",
          'mountain':"url('../public/img/mountain2.jpg')"
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

