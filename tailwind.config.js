/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {},
      fontFamily: {
        'sans': ['Segoe UI', ...defaultTheme.fontFamily.sans],
      },
  },
  variants: {},
  plugins: []
}

