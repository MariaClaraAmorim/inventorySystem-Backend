import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/serverless.ts'],
  format: ['esm'],
  clean: true,
  sourcemap: true,
  minify: false,
  target: 'node16',
  tsconfig: 'tsconfig.json',
});
