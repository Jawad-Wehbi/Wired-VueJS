<template>
  <div class="active-members">
    <div class="members-title">
      <v-icon
        icon="mdi-account-multiple"
        size="small"
      ></v-icon>
      <div class="my-tasks">Active members</div>
    </div>
    <div class="members-container">
      <ListItem
        @togglelistItem="passUserId"
        v-for="item in activeMembers"
        :MembersInfo="item"
        :key="item.id"
      />
    </div>
    <div class="list-bottom">
      <ListButtons
        listIcon="mdi-refresh"
        listButtonName="RELOAD"
      />
      <ListButtons
        listIcon="mdi-account-details"
        listButtonName="DETAILS"
        @click="toggleDetails"
      />
      <ListButtons
        listIcon="mdi-notebook"
        listButtonName="PLANS"
        @click="plansDialog=true"
      />
      <v-dialog
        v-model="plansDialog"
        width="auto"
        center
      >
        <div class="plans-overlay">
          <div class="plans-title-section">
            <div class="plans-title">
              <v-icon
                icon="mdi-notebook"
                size="small"
              ></v-icon>
              <div class="team-plans">Team's Plans</div>
            </div>
            <div>
              <v-icon
                icon="mdi-close"
                size="small"
              ></v-icon>
            </div>
          </div>
          <div class="tasks-list">
            <TaskCard
              v-for="item in plansData"
              :TaskDetails="item"
              :key="item.id"
            />
          </div>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts" src="./MembersBoard"></script>

<style lang="scss" src="./MembersBoard.scss"></style>
