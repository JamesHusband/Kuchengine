import type { Preview } from '@storybook/react';
import KuchenTheme from './KuchenTheme';
import '../tailwind-imports.css';
import { theme } from './theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
    theme: KuchenTheme,
  },
};

export default preview;
