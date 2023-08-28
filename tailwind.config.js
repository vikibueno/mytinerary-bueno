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
          'rio': "url('../public/img/america/rioDeJaneiro.jpg')",
          'bariloche':"url('../public/img/background-bariloche.jpg')"
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

