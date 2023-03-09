<template>
  <div class="board-title">
    <v-icon icon="mdi-laptop" size="small"></v-icon>
    <div class="my-tasks">Marc's Tasks</div>
  </div>
  <div class="members-tasks-container">
    <TaskCard />
    <TaskCard />
    <TaskCard />
    <TaskCard />
  </div>
</template>

<script lang="ts" src="./MembersTasks"></script>

<style scoped lang="scss" src="./MembersTasks.scss"></style>
