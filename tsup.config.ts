import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/server.ts'],
  format: ['cjs'],
  clean: true,
  sourcemap: true,
  minify: false,
  target: 'node18',
  tsconfig: 'tsconfig.json',
});
