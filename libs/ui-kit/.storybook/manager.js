// NOTE: This file must remain as .js due to Storybook 7.0+ limitations.
// See: https://github.com/storybookjs/storybook/issues/20582
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',

  // Brand
  brandTitle: 'Kuchen UI Kit',
  brandUrl: 'https://github.com/yourusername/kuchen',
  brandImage: './fantakuchen.png',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#F0BB78', // Golden Orange
  colorSecondary: '#543A14', // Dark Brown

  // UI
  appBg: '#FFF0DC', // Light Cream (sidebar)
  appContentBg: '#FFFFFF', // White (main content)
  appBorderColor: '#F0BB78', // Golden Orange
  appBorderRadius: 8,

  // Text colors
  textColor: '#131010', // Almost Black
  textInverseColor: '#FFF0DC', // Light Cream

  // Toolbar default and active colors
  barTextColor: '#543A14', // Dark Brown
  barSelectedColor: '#F0BB78', // Golden Orange
  barBg: '#FFF0DC', // Light Cream (topbar)

  // Form colors
  inputBg: '#FFF0DC', // Light Cream
  inputBorder: '#F0BB78', // Golden Orange
  inputTextColor: '#131010', // Almost Black
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
});
