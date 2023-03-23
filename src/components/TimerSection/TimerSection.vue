<template>
  <div class="timers-container">
    <TimerComponent
      icon="mdi-laptop"
      TimerTitle="Total Work Time"
      :tasks="tasks"
      Timer=""
      :styles="{ color: '#3D6554', backgroundColor: '#86ddb6' }"
    />
    <TimerComponent
      icon="mdi-coffee"
      TimerTitle="Total Break Time"
      :tasks="tasks"
      Timer=""
      :class="TotalBreakTime"
      :styles="{ color: '#683C42', backgroundColor: '#e16774cc' }"
    />
    <TimerComponent
      icon="mdi-food"
      TimerTitle="Current Break Time"
      :tasks="tasks"
      Timer=""
      :class="CurrentBreakTime"
      :styles="{ color: '#C1121F', backgroundColor: '#e5e5e5' }"
    />
  </div>
</template>

<script lang="ts" src="./TimerSection.ts"></script>

<style scoped lang="scss" src="./TimerSection.scss"></style>
