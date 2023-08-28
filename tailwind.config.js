/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Montserrat']
      },
      backgroundImage:{
        'headerBackground': "url(/img/background.jpg)",
      }
    },
  },
  plugins: [],
}

