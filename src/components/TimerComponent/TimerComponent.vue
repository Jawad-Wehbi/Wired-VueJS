<template>
  <div class="timer-container" :style="computedStyles">
    <div>
      <v-icon v-if="icon" size="small">{{ icon }}</v-icon>
    </div>
    <div>{{ TimerTitle }}</div>
    <div></div>
  </div>
</template>

<script lang="ts" src="./TimerComponent"></script>

<style lang="scss" src="./TimerComponent.scss"></style>
