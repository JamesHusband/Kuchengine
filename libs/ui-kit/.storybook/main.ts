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
            config: join(__dirname, '../../../apps/kuchen/tailwind.config.js'),
          }),
          autoprefixer(),
        ],
      },
    },
  });

// Manager styles
const getManagerStyles = () => `
  nav.sidebar-container,
  div[role="main"] > div:first-child {
    background-color: #0B0F17 !important;
  }
  nav.sidebar-container *,
  div[role="main"] > div:first-child * {
    color: #94A3B8 !important;
  }
  nav.sidebar-container button:hover {
    color: #0066FF !important;
  }
  nav.sidebar-container [data-selected="true"] {
    color: #0066FF !important;
  }
`;

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
    <style>${getManagerStyles()}</style>
    <link rel="icon" type="image/svg+xml" href="./kuchen-logo.svg" />
  `,
  viteFinal: getViteConfig,
};

module.exports = config;
