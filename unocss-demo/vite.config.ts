import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//unocss vite插件
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
})
