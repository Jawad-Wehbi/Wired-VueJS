<template>
  <div class="container">
    <div class="item inline-block">
      <span><img class="logo" src="../../assets/logo.png" /></span>
      <span class="wired-font">WIRED</span>
    </div>
    <input
      id="auth_token"
      ref="auth_token"
      v-model="auth_token"
      class="input item"
      type="auth_token"
      required
      placeholder="Enter the token you received by email"
    />
    <button
      class="button item"
      type="submit"
      :disabled="!isAuthTokenValid"
      @click.prevent="verify"
    >
      Verify
    </button>
  </div>
</template>

<script lang="ts" src="./VerifyLogin"></script>

<style lang="scss" src="../LoginView/LoginView.scss"></style>
