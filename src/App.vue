<template>
  <div class="page">
    <div class="clock">
      <ClockBLock />
    </div>
    <div class="date">
      <DateCom />
    </div>
  </div>
</template>

<script>
import ClockBLock from  "./components/ClockBlock.vue";
import DateCom from './components/DateBlock.vue'
import timeMixin from './composable/time.js'
export default {
  components: {
    ClockBLock,
    DateCom
  },
  mixins: [timeMixin]
}
</script>

<style>
html,
body {
  height: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  overflow: hidden;
}

body {
  color: #000;
  background-color: #fff;
  position: relative;
}

.page {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.clock {
  padding-top: 10%;
}
.date {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
