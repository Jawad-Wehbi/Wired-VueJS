<template>
  <div class="team-section-container">
    <div class="team-board-container">
      <MembersBoard
        @passUserId="setUserId"
        @showTeamDetails="toggleDetails()"
        :MembersInfo="result"
      />
    </div>
    <div class="team-tasks-container" v-if="showMemberTasks">
      <MembersTasks :MemberTasks="memberData" />
    </div>
  </div>
  <div class="team-details" v-if="showTeamDetails">
    <TeamDetails />
  </div>
</template>

<script lang="ts" src="./TeamSection.ts"></script>

<style lang="scss" src="./TeamSection.scss" scoped></style>
