import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9999, //设置端口号
    open: true, //设置自动打开浏览器
    host: '0.0.0.0', //设置IP
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname,'src')
      }
    ]
  }
})
