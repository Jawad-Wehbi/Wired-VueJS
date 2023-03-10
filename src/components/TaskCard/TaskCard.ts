import { defineComponent } from 'vue';
import { TaskRecord } from 'DataTypes';
import { post } from '@/service';
export default defineComponent({
  data() {
    return {
      result: [] as TaskRecord[],
    };
  },
  methods: {
    async playTask() {
      try {
        const response = await post('/tasks/:id/start');
        console.log('========>', response.data);
        this.result = response.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
  },
  props: {
    showButton: {
      type: Boolean,
      default: false,
    },
    showName: {
      type: Boolean,
      default: false,
    },
    TaskDetails: {
      type: Object,
      required: true,
    },
  },
});
