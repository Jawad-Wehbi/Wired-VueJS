<script lang="ts" src="./TaskCard"></script>

<template>
  <div class="sheet" :style="{ backgroundColor: sheetColor }">
    <div class="upper">
      <div class="upper-left">
        <div class="task-title">Wired</div>
        <div class="task-subtitle">Web</div>
      </div>
      <div class="upper-right">
        <div class="day">Today</div>
        <div class="task-current-timing">Current: 00:05:00</div>
        <div class="task-total-timing">Total: 00:15:00</div>
      </div>
    </div>
    <div class="mid-card">
      <div class="buttons">
        <button class="play-pause round-button" @click="togglePlay">
          <v-icon size="x-small" icon="mdi-play"></v-icon>
        </button>
        <button class="save round-button">
          <v-icon size="x-small" icon="mdi-content-save"></v-icon>
        </button>
        <button class="delete round-button">
          <v-icon size="x-small" icon="mdi-delete"></v-icon>
        </button>
      </div>
    </div>
    <div class="text-area">
      <v-textarea label="Notes" bg-color="white"></v-textarea>
    </div>
  </div>
</template>

<style lang="scss" src="./TaskCard.scss"></style>
