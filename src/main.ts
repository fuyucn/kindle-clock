// import { createApp } from "vue";
import App from "./App.vue";
// createApp(App).mount("#app");
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
new Vue({
  render: (h) => {
    return h(App);
  }
}).$mount("#app");
