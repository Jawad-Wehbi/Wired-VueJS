<template>
  <div class="buttons-container">
    <MainButton
      icon="mdi-plus"
      buttonName="ADD SHORTCUT"
      :styles="{ color: '#F51B5', backgroundColor: 'white' }"
      @click="addShortcutDialog = true"
    /><v-dialog v-model="addShortcutDialog" width="auto" center>
      <div class="add-shortcut-overlay">
        <div class="add-shortcut-title">
          <v-icon icon="mdi-arrow-right-top" size="small"></v-icon>
          <div class="create-shortcut">Create Shortcut</div>
        </div>
        <div class="create-shortcut-form">
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
              @click="createNewShortcut()"
            >
              <v-icon class="white" icon="mdi-pencil"></v-icon>
              Create
            </v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
    <MainButton
      icon="mdi-checkbox-marked"
      buttonName="SHOW ALL TASKS"
      :styles="{ color: 'white', backgroundColor: '#1976d2' }"
      @click="getAllTasks"
    />
    <v-dialog v-model="allTasksDialog" width="auto" center>
      <div class="all-tasks-overlay">
        <div class="overlay-title">
          <div class="left-side">
            <v-icon icon="mdi-laptop" size="small"></v-icon>
            <div class="all-tasks">All Tasks</div>
          </div>
          <div>
            <v-icon
              icon="mdi-close"
              size="small"
              @click="allTasksDialog = false"
            ></v-icon>
          </div>
        </div>
        <div class="tasks-list">
          <TaskCard
            v-for="item in allTasks"
            :TaskDetails="item"
            :key="item.id"
          />
          <div class="show-more-bottom">
            <MainButton
              icon="mdi-chevron-down"
              buttonName="SHOW MORE"
              :styles="{ color: 'white', backgroundColor: '#1976d2' }"
              @click="getAllTasks"
            />
          </div>
        </div>
      </div>
    </v-dialog>
    <MainButton
      icon="mdi-stop"
      buttonName="END ALL TASKS"
      :styles="{ color: 'white', backgroundColor: '#1976d2' }"
      @click="endAllTasks"
    />
    <div class="text-center">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <MainButton
            icon="mdi-star"
            buttonName="CUSTOM TASKS"
            :styles="{ color: 'white', backgroundColor: '#1976d2' }"
            v-bind="props"
            @click="getCustomShortcuts"
          />
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title
              >{{ item.data.project_name }}({{
                item.data.category_name
              }})</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts" src="./ButtonSection.ts"></script>

<style scoped lang="scss" src="./ButtonSection.scss"></style>
