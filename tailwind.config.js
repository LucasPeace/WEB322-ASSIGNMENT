/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/index.ejs',
 './views/about.ejs',
 './views/technic.ejs',
 './views/401.ejs',
 './views/500.ejs',
 './views/sets.ejs',
 './views/set.ejs',
 './views/addSet.ejs',
 './views/editSet.ejs',
 './views/register.ejs',
'./views/partials/navbar.ejs',
],
daisyui:{themes: ["dark"]},

theme: {
  extend: {},
},
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
 
}

