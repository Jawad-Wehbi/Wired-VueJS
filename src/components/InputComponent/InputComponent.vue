<template>
  <input
    :id="id"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    required
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'InputComponent',
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(event: Event) {
      // const target = event.target as HTMLInputElement;
      // this.$emit("update:value", target.value);
    },
  },
});
</script>

<style scoped>
@import 'InputComponent.scss';
</style>
