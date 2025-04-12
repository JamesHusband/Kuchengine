import playwright from 'eslint-plugin-playwright';
import baseConfig from '../../eslint.config.mjs';

const config = [
  playwright.configs['flat/recommended'],
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    rules: {},
  },
];

export default config;
