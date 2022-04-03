import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import legacy from "@vitejs/plugin-legacy";
import ScriptSetup from "unplugin-vue2-script-setup/vite";
export default defineConfig({
  build: {
    target: "esnext",
    polyfillModulePreload: true
  },
  plugins: [
    createVuePlugin({}),
    legacy({
      targets: ["defaults", "ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"] // 面向IE11时需要此插件
    }),
    ScriptSetup({
      reactivityTransform: true
    })
  ]
});
