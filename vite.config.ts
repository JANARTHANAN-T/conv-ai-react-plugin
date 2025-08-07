import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
  ],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'ConvAIPlugin',
      fileName: (format) => `conv-ai-plugin.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
