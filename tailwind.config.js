const colors = require('tailwindcss/colors')
const { BG_ME } = require('./constant.js')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        me: `url(${BG_ME})`,
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        violet: colors.violet,
        cyan: colors.cyan,
        orange: colors.orange,
      },
      fontFamily: {
        muli: "'Mulish', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
