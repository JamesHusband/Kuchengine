const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    join(__dirname, '../../libs/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
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
