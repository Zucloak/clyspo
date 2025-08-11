import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginSolid from 'eslint-plugin-solid';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      solid: pluginSolid,
    },
    rules: {
      ...pluginSolid.configs.typescript.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
];
