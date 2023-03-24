import { get, put } from '@/service';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      full_name: '',
      first_name: '',
      last_name: '',
      editNameDialog: false,
    };
  },
  mounted() {
    this.getName();
  },
  methods: {
    async getName() {
      try {
        const response = await get('/users/info');
        this.full_name = response.data.data.full_name;
        this.first_name = response.data.data.first_name;
        this.last_name = response.data.data.last_name;
        console.log('this.fullname :>> ', this.full_name);
      } catch (error) {
        console.error(error);
      }
    },
    async editName() {
      try {
        const response = await put('/users/info', {
          first_name: this.first_name,
          last_name: this.last_name,
        });
        this.first_name = response.data.data.first_name;
        this.last_name = response.data.data.last_name;
        console.log('this.first_name :>> ', this.first_name);
        console.log('this.last_name :>> ', this.last_name);
        return this.getName();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
