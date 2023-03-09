<template>
  <section>
    <NavigationBar />
    <div class="wired-page">
      <TimerSection />
      <ButtonSection />
      <TasksBoard />
      <TeamSection />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from '../../components/NavBar/NavigationBar.vue';
import TasksBoard from '@/components/TasksBoard/TasksBoard.vue';
import TimerSection from '@/components/TimerSection/TimerSection.vue';
import ButtonSection from '@/components/ButtonSection/ButtonSection.vue';
import TeamSection from '@/components/TeamSection/TeamSection.vue';
export default defineComponent({
  data() {
    return {};
  },
  components: {
    NavigationBar,
    TimerSection,
    TasksBoard,
    ButtonSection,
    TeamSection,
  },
});
</script>

<style lang="scss" src="./DashboardView.scss"></style>
