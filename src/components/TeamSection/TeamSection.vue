import TeamDetails from '../TeamDetails/TeamDetails';

<template>
  <div class="team-section-container">
    <div class="team-board-container">
      <MembersBoard
        @showMemberTasks="togglelistItem()"
        @showTeamDetails="toggleDetails()"
      />
    </div>
    <div class="team-tasks-container" v-if="showMemberTasks">
      <MembersTasks />
    </div>
  </div>
  <div class="team-details" v-if="showTeamDetails"><TeamDetails /></div>
</template>

<script lang="ts" src="./TeamSection.ts"></script>

<style lang="scss" src="./TeamSection.scss" scoped></style>
