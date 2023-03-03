<template>
  <div>"Hello, Here is the {{ Page }}";</div>
  <div>
    <input
      id="auth_token"
      ref="auth_token"
      v-model="auth_token"
      class=""
      type="auth_token"
      required
      placeholder="Enter the token you received by email"
    />
    <button type="submit"  :disabled="!isAuthTokenValid" @click.prevent="verify">Verify</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      Page: "Verify Login Page!",
      auth_token: "",
      error: "",
    };
  },
  methods: {
    async verify() {
      try {
        const response = await axios.get(
          "https://api.wired.sowlutions.com/api/v2/users/info",
          {
            headers: {
              Authorization: this.auth_token,
            },
          }
        );
        console.log(response.data);
        // Save data to local storage
        localStorage.setItem("user", JSON.stringify(response.data));

        // Save auth token to cookies
        // this.$cookies.set("Authorization", this.auth_token);

        // Navigate to home page
        this.$router.push("/");
      } catch (error) {
        console.error(error);
        this.error = "Invalid email or domain";
      }
    },
  },
  computed: {
    isAuthTokenValid(): boolean {
      return this.auth_token.length === 32;
    },
  },
});
</script>
