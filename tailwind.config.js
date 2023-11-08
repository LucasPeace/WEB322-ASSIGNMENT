/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["retro"],
  },
    content: ['./views/index.ejs'
  ,
'./views/partials/navbar.ejs',
'./views/sets.ejs',
'./views/set.ejs'],
    theme: {
      extend: {},
    },
   
   plugins: [require('@tailwindcss/typography'), require('daisyui')],
   
  }
  
  