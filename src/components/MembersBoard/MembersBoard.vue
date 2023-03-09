<template>
  <div class="active-members">
    <div class="members-title">
      <v-icon icon="mdi-account-multiple" size="small"></v-icon>
      <div class="my-tasks">Active members</div>
    </div>
    <div class="members-container">
      <ListItem @click="togglelistItem" />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
    <div class="list-bottom">
      <ListButtons listIcon="mdi-refresh" listButtonName="RELOAD" />
      <ListButtons listIcon="mdi-account-details" listButtonName="DETAILS" />
      <ListButtons listIcon="mdi-notebook" listButtonName="PLANS" />
    </div>
  </div>
</template>

<script lang="ts" src="./MembersBoard"></script>

<style lang="scss" src="./MembersBoard.scss"></style>
