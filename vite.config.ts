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
      targets: ["defaults", "not IE 11"]
    })
  ]
});
