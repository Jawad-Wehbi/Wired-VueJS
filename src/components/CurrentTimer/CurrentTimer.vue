<template>
  <span class="time">{{ time }}</span>

  <div class="btn-container">
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts" src="./CurrentTimer"></script>

<style scoped src="./CurrentTimer.scss"></style>
