import nx from '@nx/eslint-plugin';
import functionalPlugin from 'eslint-plugin-functional';
import importPlugin from 'eslint-plugin-import';

const config = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  {
    ignores: [
      '**/*.d.ts',
      '**/dist',
      '**/out-tsc',
      '**/.nx',
      '**/node_modules',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'import/no-default-export': 'error',
      'func-style': ['error', 'expression'],
    },
    plugins: {
      import: importPlugin,
    },
  },
  {
    files: [
      'libs/project/gui/**',
      'apps/**/*.{ts,tsx}',
      '**/pages/**/*.tsx',
      '**/app/**/*.tsx',
      '**/components/**/*.tsx',
      '**/*.config.{ts,js}',
      '.storybook/**/*.{ts,tsx}',
      '**/*.stories.{ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },

  {
    files: ['libs/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      functional: functionalPlugin,
    },
    rules: {
      'functional/no-class': 'warn',
      'functional/no-this-expression': 'warn',
      'functional/no-let': 'warn',
      'functional/immutable-data': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1, maxBOF: 0 }],
      'no-trailing-spaces': 'warn',
      complexity: ['warn', { max: 5 }],
    },
  },
];

export default config;
