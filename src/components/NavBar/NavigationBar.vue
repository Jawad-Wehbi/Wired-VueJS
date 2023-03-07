<script lang="ts" src="./NavigationBar"></script>

<template>
  <nav class="navbar">
    <div class="title inline-block">
      <span><img class="logo" src="../../assets/logo.png" /></span>
      <span class="wired-font">WIRED</span>
    </div>
    <div class="right-sec">
      <button class="edit-name">
        <v-icon class="white" icon="mdi-account-circle"></v-icon>
      </button>
      <div class="white profile-name">Jawad Wehbi</div>
      <div class="white">
        <button class="sign-out">
          <v-icon class="sign-out-icon" icon="mdi-logout"></v-icon>
          SIGNOUT
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" src="./NavigationBar.scss"></style>
