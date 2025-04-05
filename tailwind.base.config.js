const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, './apps/**/src/**/*.{js,jsx,ts,tsx}'),
    join(__dirname, './apps/**/.storybook/**/*.{js,jsx,ts,tsx}'),
    join(__dirname, './libs/**/src/**/*.{js,jsx,ts,tsx}'),
    join(__dirname, './libs/**/.storybook/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {
      fontFamily: {
        'game-title': ['Bangers', 'cursive'],
        game: ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'menu-gradient': 'linear-gradient(180deg, #4299E1 0%, #2B6CB0 100%)',
      },
    },
  },
  plugins: [],
};
