const { nxViteTsPaths } = require('@nx/vite/plugins/nx-tsconfig-paths.plugin');
const { mergeConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const { join } = require('path');

const config = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            require('tailwindcss')({
              config: join(__dirname, '../../../apps/kuchen/tailwind.config.js'),
            }),
            require('autoprefixer'),
          ],
        },
      },
      plugins: [react(), nxViteTsPaths()],
    }),
};

module.exports = config;
