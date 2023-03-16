<script lang="ts" src="./NewTaskCard"></script>

<template>
  New Task
  <v-form ref="form" class="form">
    <v-select
      v-model="selectedProject"
      id="selcetProject"
      label="Select Project"
      required
      class="form-item"
      :items="projects"
    >
      <option v-for="option in projects" :value="option">
        {{ option }}
      </option>
    </v-select>

    <v-select
      v-model="selectedCategory"
      id="selcetCategory"
      label="Select Category"
      :style="{ display: selectDisplay }"
      required
      class="form-item"
      :items="categories"
    >
      <option v-for="option in projects" :value="option">
        {{ option }}
      </option>
    </v-select>
    <div class="">
      <v-btn
        color="success"
        class="form-item"
        :disabled="isCategorySelected"
        @click="createNewTask()"
      >
        <v-icon class="white" icon="mdi-pencil"></v-icon>
        Create
      </v-btn>
    </div>
  </v-form>
</template>

<style scoped lang="scss" src="./NewTaskCard.scss"></style>
