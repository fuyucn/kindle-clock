<template>
  <div class="container">
    <div style="margin-top: 30%">
      <Clock />
    </div>
    <div style="margin-top: 40px">
      <Date />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Clock from "./components/Clock.vue";
import Date from "./components/Date.vue";
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
