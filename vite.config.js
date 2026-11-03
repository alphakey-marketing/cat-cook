import { defineConfig } from 'vite';

// 相對路徑：GitHub Pages 子目錄都行
export default defineConfig({
  base: './',
  build: { chunkSizeWarningLimit: 1000 },
});
