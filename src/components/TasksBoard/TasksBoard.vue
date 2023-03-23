<template>
  <div class="board-title">
    <v-icon icon="mdi-laptop" size="small"></v-icon>
    <div class="my-tasks">My Tasks</div>
  </div>
  <div class="Container">
    <div class="fixed-card"><NewTaskCard :runningTaskId="taskId" /></div>
    <div class="relative-cards">
      <TaskCard
        :showButton="true"
        v-for="item in todayData"
        :TaskDetails="item"
        :key="item.id"
        :runningTaskId="taskId"
        @reloadAllTasks="reloadAllTasks()"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./TasksBoard"></script>

<style lang="scss" src="./TasksBoard.scss" scoped></style>
