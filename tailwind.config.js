/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
      screens: {
        'custom': {'min': '380px', 'max': '900px'},
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize : {
        "tiny" : '0.50rem',
        "half" : '1rem',
      },
    },
  },
  plugins: [
    require("daisyui")],
  
};

