/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif']
      },
      screens: {
        'lg': '1100px',
      },
    },
    colors: {
      ...colors,
      primary: {
        dark: '#213665',
        light: '#3B5A9F'
      },
      white: '#FFFFFF',
      black: '#000000'
    },
  },
  plugins: [],
};
