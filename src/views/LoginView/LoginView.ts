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
        await axios.post('https://api.wired.sowlutions.com/api/v2/signin', {
          email: this.email,
          domain: this.domain,
        });
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
