import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import configCompressPlugin from './plugins/compress'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), configCompressPlugin('gzip')],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  }, build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[hash].js`,
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[hash].[ext]`,
      },
    },
  },
})
