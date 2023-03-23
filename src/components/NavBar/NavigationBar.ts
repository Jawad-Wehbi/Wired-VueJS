import { get, put } from '@/service';
import { TaskRecord } from 'DataTypes';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      full_name: [] as TaskRecord[],
      first_name: [] as TaskRecord[],
      last_name: [] as TaskRecord[],
      editNameDialog: false,
    };
  },
  async mounted() {
    try {
      const response = await get('/users/info');
      this.full_name = response.data.data.full_name;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async mounted() {
      try {
        const response = await put('/users/info', {
          first_name: this.first_name,
          last_name: this.last_name,
        });
        this.full_name = response.data.data.full_name;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
