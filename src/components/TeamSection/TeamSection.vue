<template>
  <div class="team-section-container">
    <div class="team-board-container">
      <MembersBoard @showMemberTasks="togglelistItem()" />
    </div>
    <div
      class="team-tasks-container"
      v-if="showMemberTasks"
    >
      <MembersTasks />
    </div>
  </div>
  <div class="team-details"></div>
</template>

<script lang="ts" src="./TeamSection.ts"></script>

<style lang="scss" src="./TeamSection.scss" scoped></style>
