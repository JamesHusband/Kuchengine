import { StorybookConfig } from '@storybook/react-vite';
import { addons, getManagerStyles, getViteConfig, getStorybookLogo } from '.';

interface ConfigOptions {
  disableWhatsNewNotifications?: boolean;
  storiesPattern?: string;
  customAddons?: string[];
  staticDirs?: string[];
  customStyles?: string;
  customLogo?: Parameters<typeof getStorybookLogo>[0];
  customViteConfig?: typeof getViteConfig;
}

const defaultOptions: Required<ConfigOptions> = {
  disableWhatsNewNotifications: true,
  storiesPattern: '../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  customAddons: addons,
  staticDirs: ['../public'],
  customStyles: getManagerStyles(),
  customLogo: {},
  customViteConfig: getViteConfig,
};

export const createStorybookConfig = (options: ConfigOptions = {}): StorybookConfig => {
  const config = { ...defaultOptions, ...options };

  return {
    core: {
      disableWhatsNewNotifications: config.disableWhatsNewNotifications,
    },
    stories: [config.storiesPattern],
    addons: config.customAddons,
    framework: {
      name: '@storybook/react-vite',
      options: {},
    },
    staticDirs: config.staticDirs,
    managerHead: (head) => `
      ${head}
      <style>${config.customStyles}</style>
      ${getStorybookLogo(config.customLogo)}
    `,
    viteFinal: config.customViteConfig,
  };
};
