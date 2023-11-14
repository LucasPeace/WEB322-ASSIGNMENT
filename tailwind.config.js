/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["retro"],
  },
    content: ['./views/index.ejs'
  ,
'./views/partials/navbar.ejs',
'./views/sets.ejs',
'./views/set.ejs',
'./views/about.ejs',
'./views/404.ejs'],
    theme: {
      extend: {},
    },
   
   plugins: [require('@tailwindcss/typography'), require('daisyui')],
   
  }
  
  