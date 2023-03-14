<template>
  <div class="team-details">
    <MemberDetails
      v-for="item in uniqueMemberTasks"
      :MembersInfo="item"
      :key="item.name"
    />
    <!-- {{ uniqueMemberTasks }} -->
  </div>
</template>

<script lang="ts" src="./TeamDetails.ts"></script>

<style lang="scss" src="./TeamDetails.scss" scoped></style>
