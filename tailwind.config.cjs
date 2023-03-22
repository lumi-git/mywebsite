/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  
  theme: {
    extend: {

      keyframes: {
        wiggle: {
          '0%, 100%': {  },
          '50%': {  color: '#00ffff' },
        }
      },


      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      cursor: {
        'fancy': 'url(C_Log.cur), pointer',
      }



    },
  },
  plugins: [require("daisyui"),require('feather-icons')]
  
}
