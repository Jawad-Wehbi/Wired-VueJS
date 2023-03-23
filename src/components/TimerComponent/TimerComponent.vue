<template>
  <div class="timer-container" :style="computedStyles">
    <div>
      <v-icon v-if="icon" size="small">{{ icon }}</v-icon>
    </div>
    <div>{{ TimerTitle }}</div>
    <div v-if="TimerTitle === 'Total Work Time'">
      {{ computedTotalWorkTime }}
    </div>
    <div v-if="TimerTitle === 'Total Break Time'">
      {{ computedTotalBreakTime }}
    </div>
    <div v-if="TimerTitle === 'Current Break Time'">
      {{ computedCurrentBreakTime }}
    </div>
  </div>
</template>

<script lang="ts" src="./TimerComponent"></script>

<style lang="scss" src="./TimerComponent.scss"></style>
