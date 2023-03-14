<template>
  <div class="item-list" @click="togglelistItem">
    <div class="left-sec">
      <div class="member-name">{{ MembersInfo.user.full_name }}</div>
      <div class="working-task">
        Working on {{ MembersInfo.project.name }} -
        {{ MembersInfo.task_category.name }}
      </div>
    </div>
    <div class="right-sec">00:00:00</div>
  </div>
</template>

<script lang="ts" src="./ListItem"></script>

<style lang="scss" src="./ListItem.scss"></style>
