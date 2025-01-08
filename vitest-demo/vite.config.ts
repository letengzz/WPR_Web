/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitestConfig } from './vitestConfig'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vite.dev/config/
export default defineConfig({
  // test: {
  //   ...vitestConfig
  // },
  test:{
    globals:true,
    environment: "jsdom",
    transformMode: {
      web: [/.tsx$/]
    }
  },
  plugins: [
    vueJsx(),
    vue()
  ],
})