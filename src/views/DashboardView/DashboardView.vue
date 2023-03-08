<template>
  <section>
    <NavigationBar />
    <TimerComponent />
    <TasksBoard />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from '../../components/NavBar/NavigationBar.vue';
import TasksBoard from '@/components/TasksBoard/TasksBoard.vue';
import TimerComponent from '@/components/TimerComponent/TimerComponent.vue';
export default defineComponent({
  data() {
    return {};
  },
  components: { NavigationBar, TimerComponent, TasksBoard },
});
</script>

<style lang="scss" src="./DashboardView.scss"></style>
