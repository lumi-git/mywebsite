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
      }



    },
  },
  plugins: [require("daisyui"),require('feather-icons')]
  
}
