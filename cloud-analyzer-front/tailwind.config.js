/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.vue', './src/**/*.jsx'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

