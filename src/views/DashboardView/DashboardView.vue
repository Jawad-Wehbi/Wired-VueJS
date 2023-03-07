<template>
  <section>
    <NavigationBar />
    <NewTaskCard />
    <TaskCard />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationBar from '../../components/NavBar/NavigationBar.vue';
import NewTaskCard from '../../components/NewTaskCard/NewTaskCard.vue';
import TaskCard from '../../components/TaskCard/TaskCard.vue';
export default defineComponent({
  data() {
    return {};
  },
  components: { NavigationBar, NewTaskCard, TaskCard },
});
</script>

<style lang="scss" src="./DashboardView.scss"></style>
