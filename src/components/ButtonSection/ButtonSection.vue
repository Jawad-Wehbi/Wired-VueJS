<template>
  <div class="buttons-container">
    <MainButton
      icon="mdi-plus"
      buttonName="ADD SHORTCUT"
      :styles="{ color: '#F51B5', backgroundColor: 'white' }"
    />
    <MainButton
      icon="mdi-checkbox-marked"
      buttonName="SHOW ALL TASKS"
      :styles="{ color: 'white', backgroundColor: '#1976d2' }"
    />
    <MainButton
      icon="mdi-stop"
      buttonName="END ALL TASKS"
      :styles="{ color: 'white', backgroundColor: '#1976d2' }"
    />
    <MainButton
      icon="mdi-star"
      buttonName="CUSTOM TASKS"
      :styles="{ color: 'white', backgroundColor: '#1976d2' }"
    />
  </div>
</template>

<script lang="ts" src="./ButtonSection.ts"></script>

<style lang="scss" src="./ButtonSection.scss" scoped></style>
