<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      SelectProject:"",
      SelectCategory:"",
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],

    };
  },
      computed: {
        selectDisplay(): string {
          return this.SelectProject ? "block" : "none";
        },
      },
});
</script>

<template>
  <div class="card">
    New Task
    <v-form ref="form" class="form">
      <v-select
        v-model="SelectProject"
        id="selcetProject"
        label="Select Project"
        required
        class="form-item"
        :items="items"
      >
    </v-select>

      <v-select
          v-model="SelectCategory"
        id="selcetCategory"
        label="Select Category"
        :style="{ display: selectDisplay }"
        required
        class="form-item"
      ></v-select>

      <div class="">
        <!-- @click="submit" -->
        <v-btn color="success" class="form-item">
          <v-icon class="white" icon="mdi-pencil"></v-icon>
          Create Task
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<style lang="scss" src="./NewTaskCard.scss"></style>
