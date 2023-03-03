<template>
  <div>"Hello, Here is the {{ Page }}";</div>
  <div>
    <router-link to="/">
      <button>VERIFY</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      Page: "Verify Login Page!",
    };
  },
});
</script>
