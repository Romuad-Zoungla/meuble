/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js}", "./pages/**/*.html"],
  theme: { 
    extend: {
      colors: {
        'oran' : '#FB923C',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
    },
  },
  plugins: [],
}
}