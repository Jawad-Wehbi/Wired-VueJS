<template>
  <section>
    <NavigationBar />
    <div class="wired-page">
      <TimerComponent />
      <ButtonSection />
      <TasksBoard />
      <MembersBoard />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from '../../components/NavBar/NavigationBar.vue';
import TasksBoard from '@/components/TasksBoard/TasksBoard.vue';
import TimerComponent from '@/components/TimerComponent/TimerComponent.vue';
import ButtonSection from '@/components/ButtonSection/ButtonSection.vue';
import MembersBoard from '@/components/MembersBoard/MembersBoard.vue';
export default defineComponent({
  data() {
    return {};
  },
  components: {
    NavigationBar,
    TimerComponent,
    TasksBoard,
    ButtonSection,
    MembersBoard,
  },
});
</script>

<style lang="scss" src="./DashboardView.scss"></style>
