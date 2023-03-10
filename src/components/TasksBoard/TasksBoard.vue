<template>
  <div class="board-title">
    <v-icon icon="mdi-laptop" size="small"></v-icon>
    <div class="my-tasks">My Tasks</div>
  </div>
  <div class="Container">
    <div class="fixed-card"><NewTaskCard /></div>
    <div class="relative-cards">
      <TaskCard
        showButton="true"
        :TaskDetails="item"
        v-for="item in todayData"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./TasksBoard"></script>

<style lang="scss" src="./TasksBoard.scss" scoped></style>
