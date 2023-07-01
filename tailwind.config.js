/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    colors: {
      'company-black': '#222427',
      'black': '#000000',
      'white': '#FFFFFF',
      'grey-400': '#d1d5db',
      'blue': '#0B92F1'
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        xl: '1095px'
      },
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
