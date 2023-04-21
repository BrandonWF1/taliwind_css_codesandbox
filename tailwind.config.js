/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'title': '64px',
      '4xl': '35px',
      'lg': '17px',
      'sm': '14px',
      'base': '16px'
    },
    fontFamily: {
      'sandbox' : ['Inter'],
      'title': ['Roboto']
    },
    extend: {
      colors: {
        'lighter-black': '#0F0E0E',
        'backing-create': '#EAFF96'
      },
      spacing: {
        'header-width': '1076px',
        'img-margin': '152px',
        'title-width': '568px',
        'gray-text': '422px'
      },
      lineHeight: {
        'title-lh': '64px',
        'gray-text': '23px'
      }
    },
  },
  plugins: [],
}

