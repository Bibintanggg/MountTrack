/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui")],
  
};

