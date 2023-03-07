<template>
  <section>
    <NavigationBar/>
    <NewTaskCard/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "../../components/NavBar/NavigationBar.vue"
import NewTaskCard from "../../components/NewTaskCard/NewTaskCard.vue"
export default defineComponent({
  data() {
    return {
      
    };
    
  },
  components:{NavigationBar, NewTaskCard}
});
</script>

<style lang="scss" src="./DashboardView.scss"></style>
