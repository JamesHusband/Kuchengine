import { join } from 'path';
import { mergeConfig } from 'vite';

export const getViteConfig = async (config: any) =>
  mergeConfig(config, {
    css: {
      postcss: {
        plugins: [
          require('tailwindcss')({
            config: join(__dirname, '../tailwind.config.js'),
          }),
          require('autoprefixer'),
        ],
      },
    },
  });
