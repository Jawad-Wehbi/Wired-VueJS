<template>
  <div>"Hello, Here is the {{ Page }}";</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      Page: "Dashboard Page!!",
    };
  },
});
</script>
