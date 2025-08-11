import generouted from '@generouted/solid-router/plugin';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import postcssImport from 'postcss-import';
import resolve from 'resolve';

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths(),
    generouted(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Inter',
            styles: 'wght@400;500;600;700',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssImport({
          resolve(id, basedir) {
            return resolve.sync(id, { basedir });
          },
        }),
      ],
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
