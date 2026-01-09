import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const simpleSort = {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};

const ignores = {
  ignores: ['node_modules/**/*', '.next/**/*', 'next-env.d.ts'],
};

const eslintConfig = [
  ignores,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  simpleSort,
];

export default eslintConfig;
