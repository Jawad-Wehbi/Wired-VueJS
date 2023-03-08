<template>
  <section>
    <div class="board-title">
      <v-icon icon="mdi-laptop" size="small"></v-icon>" "My Tasks
    </div>
    <div class="Container">
      <div class="fixed-card"><NewTaskCard /></div>
      <div class="relative-cards">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./TasksBoard"></script>

<style lang="scss" src="./TasksBoard.scss"></style>
