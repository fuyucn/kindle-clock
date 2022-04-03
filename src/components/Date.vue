<template>
  <div v-if="!loading">
    <div class="date-container">
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import useTimer from "../composable/timer.ts";

const { loading, date } = useTimer();
</script>
<style scoped>
.date-container {
  padding: 4px;
}
.date {
  font-size: 36px;
  font-weight: 300;
}
</style>