<template>
  <button class="main-button" :style="computedStyles">
    <v-icon v-if="icon" size="small">{{ icon }}</v-icon>
    <div>{{ buttonName }}</div>
  </button>
</template>

<script lang="ts" src="./MainButton"></script>

<style lang="scss" src="./MainButton.scss"></style>
