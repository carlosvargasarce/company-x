/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    colors: {
      'company-black': '#222427',
      'white': '#FFFFFF'
    },
    container: {
      center: true,
      screens: {
        xl: '1095px'
      },
    },
  },
  plugins: [],
}
