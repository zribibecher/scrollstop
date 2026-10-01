import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src/web',
  base: './',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/web/index.html'),
        carousel: resolve(__dirname, 'src/web/carousel.html')
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: false
  }
});
