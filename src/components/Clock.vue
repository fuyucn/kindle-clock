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
<script setup lang="ts">
import useTimer from "../composable/timer.ts";

const { loading, time, hour, minute, second, day, date, week } = useTimer();
</script>
<style scoped>
.clock-container {
  padding: 20px;
}
.time {
  font-size: 84px;
  font-weight: 500;
}
</style>