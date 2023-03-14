<template>
  <div>
    <div class="member-details">
      <TimerComponent
        icon="mdi-laptop"
        TimerTitle="Total Work Time"
        Timer="00:00:00"
        :styles="{ color: '#3D6554', backgroundColor: '#86ddb6' }"
      />
      <TimerComponent
        icon="mdi-coffee"
        TimerTitle="Total Break Time"
        Timer="00:00:00"
        :styles="{ color: '#683C42', backgroundColor: '#e16774cc' }"
      />
      <TaskCard
        showName="true"
        v-for="item in MembersInfo.tasks"
        :TaskDetails="item"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./MemberDetails.ts"></script>

<style lang="scss" src="./MemberDetails.scss" scoped></style>
