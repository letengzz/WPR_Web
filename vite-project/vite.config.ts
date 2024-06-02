import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9999, //设置端口号
    open: true, //设置自动打开浏览器
    host: '0.0.0.0', //设置IP
  }
})
