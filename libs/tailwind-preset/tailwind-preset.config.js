const colors = require('tailwindcss/colors');

module.exports = {
  prefix: '',
  important: ':root',
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px'
    },
    extend: {
      colors: {
        primary: '#5bc4d6',
        accent: '#4164a9',
        warn: '#ff9966',
        cyan: colors.cyan
      },
      spacing: {
        page: '1.25rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
};
