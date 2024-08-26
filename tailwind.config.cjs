const { typewindTransforms } = require('typewind/transform');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{tsx,jsx}'],
    transform: typewindTransforms,
  },
  darkMode: 'selector',
};
