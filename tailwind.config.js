/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["night"],
  },
    content: ['./views/index.html'],
    theme: {
      extend: {},
    },
   
   plugins: [require('@tailwindcss/typography'), require('daisyui')],
   
  }
  
  