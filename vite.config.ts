import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import legacy from "@vitejs/plugin-legacy";
import ScriptSetup from "unplugin-vue2-script-setup/vite";

export default defineConfig({
  server: {
    host: "192.168.1.157"
  },
  build: { polyfillModulePreload: true },
  plugins: [
    createVuePlugin({}),
    legacy({
      targets: ["defaults",  'ie >= 6'],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"] // 面向IE11时需要此插件
    }),
    ScriptSetup({
      reactivityTransform: true
    })
  ]
});
