import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   imports: ['vue'],
    //   dts: 'src/auto-import.d.ts'
    // })
  ],
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/index.scss";`
      }
    }
  },
  server: {
    open: true,
    host: '127.0.0.1',
    port: 3456,
    proxy: {
      '^/api/': {
        target: 'https://www.bilibili.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
