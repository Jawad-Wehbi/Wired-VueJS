<template>
  <section>
    <NavigationBar />
    <div class="wired-page">
      <TimerSection v-if="result.length" :tasks="result" />
      <ButtonSection :runningTaskId="taskId" />
      <TasksBoard @reloadTasks="reloadAllTasks()" />
      <TeamSection />
    </div>
  </section>
</template>

<script lang="ts" src="./DashboardView"></script>

<style lang="scss" src="./DashboardView.scss"></style>
