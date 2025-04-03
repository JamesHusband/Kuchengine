const baseConfig = require('../../apps/kuchen/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [baseConfig],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
};
