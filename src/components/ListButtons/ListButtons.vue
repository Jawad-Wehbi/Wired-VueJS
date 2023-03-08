<template>
  <button class="list-button">
    <v-icon v-if="listIcon" size="small">{{ listIcon }}</v-icon>
    <div>{{ listButtonName }}</div>
  </button>
</template>

<script lang="ts" src="./ListButtons"></script>

<style lang="scss" src="./ListButtons.scss"></style>
