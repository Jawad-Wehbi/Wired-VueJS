<template>
  <section>
    <NavigationBar />
    <div class="wired-page">
      <TimerSection v-if="result.length" :tasks="result" />
      <ButtonSection />
      <TasksBoard />
      <TeamSection />
    </div>
  </section>
</template>

<script lang="ts" src="./DashboardView"></script>

<style lang="scss" src="./DashboardView.scss"></style>
