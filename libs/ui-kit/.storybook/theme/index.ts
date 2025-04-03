import { create } from '@storybook/theming/create';
import { colors } from './colors';
import { typography } from './typography';
import { brand } from './brand';

export const theme = create({
  base: 'light',

  // Typography
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.code,

  // Brand
  brandTitle: brand.title,
  brandUrl: brand.url,
  brandImage: brand.logo,
  brandTarget: brand.target,

  // Colors
  colorPrimary: colors.primary,
  colorSecondary: colors.secondary,

  // UI
  appBg: colors.content.bg,
  appContentBg: colors.content.bg,
  appPreviewBg: colors.content.bg,
  appBorderColor: colors.content.border,
  appBorderRadius: typography.radius.base,

  // Text colors
  textColor: colors.content.text,
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: colors.sidebar.text,
  barSelectedColor: colors.sidebar.selected,
  barHoverColor: colors.sidebar.hover,
  barBg: colors.content.bg,

  // Form colors
  inputBg: colors.form.bg,
  inputBorder: colors.form.border,
  inputTextColor: colors.form.text,
  inputBorderRadius: typography.radius.input,
});
