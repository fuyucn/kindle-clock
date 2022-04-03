<template>
  <div class="container">
    {{ date1 }}
    <div style="margin-top: 30%">
      <Clock />
    </div>
    <div style="margin-top: 40px">
      <DateCom />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import Clock from "./components/Clock.vue";
import DateCom from "./components/Date.vue";

const date1 = ref(Date.now());
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
