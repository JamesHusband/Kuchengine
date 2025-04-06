const { mergeConfig } = require('vite');
const { join } = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// Addons
const addons = [
  '@storybook/addon-essentials',
  '@storybook/addon-interactions',
  '@storybook/addon-themes',
  '@storybook/theming',
];

// Vite config
const getViteConfig = async (config) =>
  mergeConfig(config, {
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: join(__dirname, '../tailwind.config.js'),
          }),
          autoprefixer(),
        ],
      },
    },
  });

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  core: {
    disableWhatsNewNotifications: true,
  },
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons,
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  managerHead: (head) => `
    ${head}
   `,
  viteFinal: getViteConfig,
};

module.exports = config;
