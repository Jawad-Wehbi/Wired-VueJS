import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      Page: 'Verify Login Page!',
      auth_token: '',
      error: '',
    };
  },
  methods: {
    async verify() {
      try {
        const response = await axios.get(
          'https://api.wired.sowlutions.com/api/v2/users/info',
          {
            headers: {
              Authorization: this.auth_token,
            },
          }
        );
        // Save data to local storage
        localStorage.setItem('auth_token', response.data.data.auth_token);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('first_name', response.data.data.first_name);
        localStorage.setItem('last_name', response.data.data.last_name);
        localStorage.setItem('full_name', response.data.data.full_name);
        localStorage.setItem('id', JSON.stringify(response.data.data.id));
        localStorage.setItem('information', response.data.data.information);
        localStorage.setItem('initials', response.data.data.initials);
        localStorage.setItem('team_admin', response.data.data.team_admin);
        localStorage.setItem('team_id', response.data.data.team_id);
        localStorage.setItem('user_status', response.data.data.user_status);

        // Navigate to home page
        this.$router.push('/');
      } catch (error) {
        console.error(error);
        this.error = 'Invalid email or domain';
      }
    },
  },
  computed: {
    isAuthTokenValid(): boolean {
      return this.auth_token.length === 32;
    },
  },
});
