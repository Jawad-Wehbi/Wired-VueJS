<script lang="ts" src="./NewTaskCard"></script>

<template>
  <div class="new-task">New Task</div>
  <v-form ref="form" class="form">
    <v-select
      v-model="selectedProject"
      id="selcetProject"
      label="Select Project"
      density="compact"
      variant="underlined"
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
      density="compact"
      variant="underlined"
      required
      class="form-item"
      :items="categories"
    >
      <option v-for="option in projects" :value="option">
        {{ option }}
      </option>
    </v-select>
    <div class="">
      <button
        class="form-item create-task-button"
        :disabled="isCategorySelected"
        @click="createNewTask()"
      >
        <v-icon class="white" icon="mdi-pencil"></v-icon>
        Create Task
      </button>
    </div>
  </v-form>
</template>

<style scoped lang="scss" src="./NewTaskCard.scss"></style>
