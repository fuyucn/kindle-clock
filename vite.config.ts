import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  build: { polyfillModulePreload: true },
  plugins: [
    createVuePlugin({}),
    legacy({
      targets: ["defaults",  'ie >= 6'],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"] // 面向IE11时需要此插件
    })
  ]
});
