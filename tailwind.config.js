/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'accent':{
        'navy':{
          200:'#9b59b6',
          100:'#485468',
          75:'#bfd2f2',
          50:'#d7e3f7'
        }
      }
      } 
    },
    fontFamily:{
      'Ubuntu' :['Ubuntu','sans-serif']
    }
   },
  plugins: [],
}
