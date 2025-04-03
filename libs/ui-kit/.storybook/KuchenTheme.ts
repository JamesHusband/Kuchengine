import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Inter", system-ui, -apple-system, sans-serif',
  fontCode: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace',

  // Brand
  brandTitle: 'Kuchen UI Kit',
  brandUrl: 'https://github.com/yourusername/kuchen',
  brandImage: './kuchen-logo.svg',
  brandTarget: '_self',

  // Colors
  colorPrimary: 'green',
  colorSecondary: 'purple',

  // UI
  appBg: 'orange',
  appContentBg: 'green',
  appPreviewBg: 'yellow',
  appBorderColor: '#E2E8F0',
  appBorderRadius: 8,

  // Text colors
  textColor: '#1A202C',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#64748B',
  barSelectedColor: '#0066FF',
  barHoverColor: 'red',
  barBg: 'yellow',

  // Form colors
  inputBg: '#F8FAFC',
  inputBorder: '#E2E8F0',
  inputTextColor: '#1A202C',
  inputBorderRadius: 6,
});
