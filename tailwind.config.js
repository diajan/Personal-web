const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet:colors.violet,
        cyan:colors.cyan,
        orange:colors.orange
      },
      fontFamily: {
        muli: "'Mulish', sans-serif"
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
