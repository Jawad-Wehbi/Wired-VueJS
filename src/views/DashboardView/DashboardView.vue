<template>
  <section>
    <NavigationBar/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "../../components/NavBar/NavigationBar.vue"
export default defineComponent({
  data() {
    return {
      
    };
    
  },
  components:{NavigationBar}
});
</script>

<style lang="scss" src="./DashboardView.scss"></style>
