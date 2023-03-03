<template>
  <div>"Hello, Here is the {{ Page }}";</div>
  <div>
    <router-link to="/verify-login">
      <button>LOGIN</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      Page: "Login Page!",
      EmailAddress: "",
      company: "",
    };
  },
  try() {
    axios
      .post("/api/authenticate", {
        EmailAddress: this.EmailAddress,
        company: this.company,
      })
      .then((response) => {
        // Store the access token in local storage or a cookie
        localStorage.setItem("access_token", response.data.access_token);
        // Redirect the user to the main page
        this.$router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
</script>
