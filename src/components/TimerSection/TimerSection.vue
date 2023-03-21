<template>
  <div class="timers-container">
    <TimerComponent
      icon="mdi-laptop"
      TimerTitle="Total Work Time"
      :tasks="tasks"
      :styles="{ color: '#3D6554', backgroundColor: '#86ddb6' }"
    />
    <TimerComponent
      icon="mdi-coffee"
      TimerTitle="Total Break Time"
      :styles="{ color: '#683C42', backgroundColor: '#e16774cc' }"
    />
  </div>
</template>

<script lang="ts" src="./TimerSection.ts"></script>

<style scoped lang="scss" src="./TimerSection.scss"></style>
