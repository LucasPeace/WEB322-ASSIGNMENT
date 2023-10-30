/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/home.html'],
    theme: {
      extend: {},
    },
   
   plugins: [require('@tailwindcss/typography'), require('daisyui')],
   
  }
  
  