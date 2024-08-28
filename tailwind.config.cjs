const { typewindTransforms } = require('typewind/transform');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.tsx'],
    transform: typewindTransforms,
  },

  darkMode: 'selector',
};