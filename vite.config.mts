import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/scripts/template/**'],
    coverage: {
      exclude: [
        '**/node_modules/**',
        '**/commitlint.config.ts',
        '**/release.config.cjs',
        '**/index.ts',
        '**/scripts/template/**',
      ],
    },
    globals: true,
    restoreMocks: true,
  },
  plugins: [tsconfigPaths()],
});
