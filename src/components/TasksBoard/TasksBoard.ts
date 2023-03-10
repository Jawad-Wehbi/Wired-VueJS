import { defineComponent } from 'vue';
import NewTaskCard from '../../components/NewTaskCard/NewTaskCard.vue';
import TaskCard from '../../components/TaskCard/TaskCard.vue';
import { get } from '../../../src/service';

export default defineComponent({
  data() {
    return {
      result: [],
    };
  },
  async mounted() {
    try {
      const response = await get('/tasks');
      console.log('========>', response.data);
      this.result = response.data.data.items;
    } catch (error) {
      console.error(error);
    }
  },
  components: { NewTaskCard, TaskCard },
});
