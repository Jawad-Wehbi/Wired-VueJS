<script lang="ts" src="./LoginView"></script>

<template>
  <!-- <section class="background-image"> -->
  <!-- <InputComponent
      id="email"
      ref="email"
      v-model="email"
      type="email"
      required
      placeholder="Email address ex: user@company.com"
      @input="autofillDomain"
    />
    <InputComponent
      id="domain"
      ref="domain"
      v-model="domain"
      type="domain"
      placeholder="company.com"
    /> -->
  <div class="container">
    <div class="item inline-block">
      <span><img class="logo" src="../../assets/logo.png" /></span>
      <span class="wired-font">WIRED</span>
    </div>
    <input
      id="email"
      ref="email"
      v-model="email"
      class="input item"
      type="email"
      required
      placeholder="Email address ex: user@company.com"
      @input="autofillDomain"
    />
    <input
      id="domain"
      ref="domain"
      v-model="domain"
      class="input item"
      type="domain"
      required
      placeholder="company.com"
    />
    <button
      class="item button"
      type="submit"
      @click.prevent="login"
      :disabled="!isValidEmail"
    >
      Login
    </button>
  </div>
  <!-- </section> -->
</template>

<style lang="scss" src="./LoginView.scss"></style>
