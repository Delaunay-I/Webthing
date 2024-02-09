/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['arial', "sans-serif"],
        tahoma: ['Tahoma'],
        verdana: ['Verdana'],
      },
      colors: {
        'secondary': 'rgb(170, 170, 170) ',
      },
    },
  },
  plugins: [],
};
