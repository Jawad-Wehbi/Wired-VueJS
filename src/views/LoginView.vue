<template>
  <div>"Hello, Here is the {{ Page }}";</div>
  <div>
    <input
      id="email"
      ref="email"
      v-model="email"
      class=""
      type="email"
      required
      placeholder="Email"
      @input="autofillDomain"
    />
    <input
      id="domain"
      ref="domain"
      v-model="domain"
      class=""
      type="domain"
      required
      placeholder="Domain"
    />
    <button type="submit" @click.prevent="login" :disabled="!isValidEmail" >Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      Page: "Login Page!",
      email: "",
      domain: "",
      error: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "https://api.wired.sowlutions.com/api/v2/signin",
          {
            email: this.email,
            domain: this.domain,
          }
        );
        console.log(response.data);
        // Route to the next page if login is successful
        this.$router.push("/verify-login");
      } catch (error) {
        console.error(error);
        this.error = "Invalid email or domain";
      }
    },
    autofillDomain():void {
      const atIndex = this.email.indexOf("@");
      if (atIndex !== -1) {
        this.domain = this.email.slice(atIndex + 1);
      }
    },
  },
  computed: {
    isValidEmail(): boolean {
      const emailRegex = /\S+@\S+\.\S+/
      return emailRegex.test(this.email)
    }
  },
});
</script>
