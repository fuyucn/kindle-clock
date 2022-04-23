<template>
  <div v-if="!loading">
    <div class="clock-container">
      <span class="time">
        {{ hour }}
        <span>:</span>
        {{ minute }}
        <span>:</span>
        {{ second }}
      </span>
    </div>
  </div>
</template>
<script >
import timeMixin  from "../composable/time.js";
export default {
  name:"ClockBlock",
  mixins:[timeMixin]
}
</script>
<style scoped>
.clock-container {
  padding: 20px;
  text-align: center;
}
.time {
  font-size: 68px;
  font-weight: 500;
}
</style>