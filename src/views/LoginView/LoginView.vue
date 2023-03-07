<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import InputComponent from '@/components/InputComponent/InputComponent.vue';
export default defineComponent({
  data() {
    return {
      Page: 'Login Page!',
      email: '',
      domain: '',
      error: '',
    };
  },
  components: { InputComponent },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          'https://api.wired.sowlutions.com/api/v2/signin',
          {
            email: this.email,
            domain: this.domain,
          }
        );
        console.log(response.data);
        // Route to the next page if login is successful
        this.$router.push('/verify-login');
      } catch (error) {
        console.error(error);
        this.error = 'Invalid email or domain';
      }
    },
    autofillDomain(): void {
      const atIndex = this.email.indexOf('@');
      if (atIndex !== -1) {
        this.domain = this.email.slice(atIndex + 1);
      }
    },
  },
  computed: {
    isValidEmail(): boolean {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(this.email);
    },
  },
});
</script>

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
