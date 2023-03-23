<script lang="ts" src="./TaskCard"></script>

<template>
  <div
    class="sheet"
    :class="
      TaskDetails.status == 'started'
        ? 'active'
        : TaskDetails.status == 'paused'
        ? 'paused'
        : 'ended'
    "
  >
    <div class="upper">
      <div class="upper-left">
        <div class="memberName" v-if="showName">
          {{ TaskDetails.user.full_name }}
        </div>
        <div class="task-title">{{ TaskDetails.project.name }}</div>
        <div class="task-subtitle">{{ TaskDetails.task_category.name }}</div>
      </div>
      <div class="upper-right">
        <div class="day">Today</div>
        <div class="task-current-timing" :class="showTaskCurrentTimer">
          Current: {{ computedTaskCurrentTime }}
        </div>
        <div class="task-total-timing">Total: {{ computedTaskTotalTime }}</div>
      </div>
    </div>
    <div class="mid-card" v-if="showButton">
      <div class="buttons">
        <button
          class="play round-button"
          :class="playButton"
          @click="playTask(TaskDetails.id)"
        >
          <v-icon size="x-small" icon="mdi-play"></v-icon>
        </button>
        <button
          class="pause round-button"
          :class="pauseButton"
          @click="pauseTask(TaskDetails.id)"
        >
          <v-icon size="x-small" icon="mdi-pause"></v-icon>
        </button>
        <button
          class="reload round-button"
          :class="reloadButton"
          @click="unendTask(TaskDetails.id)"
        >
          <v-icon size="x-small" icon="mdi-reload"></v-icon>
        </button>
        <button class="save round-button" @click="saveTask(TaskDetails.id)">
          <v-icon size="x-small" icon="mdi-content-save"></v-icon>
        </button>
        <button
          class="delete round-button"
          :class="TaskDetails.status == 'started' && 'display-none'"
          @click="deleteTask(TaskDetails.id)"
        >
          <v-icon size="x-small" icon="mdi-delete"></v-icon>
        </button>
      </div>
    </div>
    <div class="text-area">
      <v-textarea
        placeholder="Notes"
        bg-color="white"
        v-model="noteMessage"
        @blur="saveTask(TaskDetails.id)"
      ></v-textarea>
    </div>
  </div>
</template>

<style lang="scss" src="./TaskCard.scss"></style>
