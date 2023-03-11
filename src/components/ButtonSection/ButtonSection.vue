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
        <div class="create-shortcut-form"></div>
      </div>
    </v-dialog>
    <MainButton
      icon="mdi-checkbox-marked"
      buttonName="SHOW ALL TASKS"
      :styles="{ color: 'white', backgroundColor: '#1976d2' }"
      @click="dialog = true"
    />
    <v-dialog v-model="dialog" width="auto" center>
      <div class="all-tasks-overlay">
        <div class="overlay-title">
          <div>
            <v-icon icon="mdi-laptop" size="small"></v-icon>
            <div class="all-tasks">All Tasks</div>
          </div>
          <div>
            <v-icon icon="mdi-close" size="small"></v-icon>
          </div>
        </div>
        <div class="tasks-list">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </v-dialog>
    <MainButton
      icon="mdi-stop"
      buttonName="END ALL TASKS"
      :styles="{ color: 'white', backgroundColor: '#1976d2' }"
    />
    <div class="text-center">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <MainButton
            icon="mdi-star"
            buttonName="CUSTOM TASKS"
            :styles="{ color: 'white', backgroundColor: '#1976d2' }"
            v-bind="props"
          />
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts" src="./ButtonSection.ts"></script>

<style lang="scss" src="./ButtonSection.scss" scoped></style>
