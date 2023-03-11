<script lang="ts" src="./NewTaskCard"></script>

<template>
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
      <v-btn color="success" class="form-item" :disabled="isCategorySelected">
        <v-icon class="white" icon="mdi-pencil"></v-icon>
        Create Task
      </v-btn>
    </div>
  </v-form>
</template>

<style lang="scss" src="./NewTaskCard.scss"></style>
