import type { Preview } from '@storybook/react';
import '../../../apps/kuchen/src/styles.css';
import KuchenTheme from './KuchenTheme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: KuchenTheme,
    },
    manager: {
      theme: KuchenTheme,
    },
  },
};

export default preview;
