const { nxViteTsPaths } = require('@nx/vite/plugins/nx-tsconfig-paths.plugin');
const { mergeConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const { join } = require('path');

const config = {
  core: {
    disableWhatsNewNotifications: true,
  },
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/theming',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  managerHead: (head) => `
    ${head}
    <style>
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
    </style>
    <link rel="icon" type="image/svg+xml" href="./kuchen-logo.svg" />
  `,
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
      publicDir: '../public',
    }),
};

module.exports = config;
