<template>
  <div v-if="!loading">
    <div class="container">
      <div class="date-container">
        <div class="left">{{ day }}</div>
        <div class="right">
          <div class="month">{{ month }}</div>
          <div class="year">{{ year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timeMixin from "../composable/time.js";
export default {
  mixins: [timeMixin]
}
</script>
<style scoped>
.container {
  padding: 20px;
}
.date-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center
}
.left {
  display: inline-block;
  font-size: 120px;
  font-weight: 700;
  line-height: 1;
  margin-right: 12px;
}
.right {
 display: inline-block;
  line-height: 1.35;
  position: relative;
}
.year {
  display: block;
  font-size: 24px;
  font-weight: 500;
}
.month {
  display: block;
  font-size: 24px;
  font-weight: 500;
}
</style>