import type { Preview } from '@storybook/react';
import '../../../apps/kuchen/src/styles.css';
import { theme } from './theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
    theme: theme,
  },
};

export default preview;
