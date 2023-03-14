<template>
  <div class="active-members">
    <div class="members-title">
      <v-icon icon="mdi-account-multiple" size="small"></v-icon>
      <div class="my-tasks">Active members</div>
    </div>
    <div class="members-container">
      <ListItem
        @click=""
        @togglelistItem="passUserId"
        v-for="item in activeMembers"
        :MembersInfo="item"
        :key="item.id"
      />
    </div>
    <div class="list-bottom">
      <ListButtons listIcon="mdi-refresh" listButtonName="RELOAD" />
      <ListButtons
        listIcon="mdi-account-details"
        listButtonName="DETAILS"
        @click="toggleDetails"
      />
      <ListButtons listIcon="mdi-notebook" listButtonName="PLANS" />
      <v-dialog v-model="plansDialog" width="auto" center>
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
    </div>
  </div>
</template>

<script lang="ts" src="./MembersBoard"></script>

<style lang="scss" src="./MembersBoard.scss"></style>
