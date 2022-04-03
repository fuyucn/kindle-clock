import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  build: {
    target: "esnext",
    polyfillModulePreload: true
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    legacy({
      targets: ["defaults", "IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"] // 面向IE11时需要此插件
    })
  ]
});
