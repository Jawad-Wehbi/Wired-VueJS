import { defineComponent } from 'vue';
import NewTaskCard from '../../components/NewTaskCard/NewTaskCard.vue';
import TaskCard from '../../components/TaskCard/TaskCard.vue';
import { get } from '../../../src/service';
import { TaskRecord } from '../../../DataTypes';
import { parseISO, isSameDay } from 'date-fns';

export default defineComponent({
  data() {
    return {
      result: [] as TaskRecord[],
      taskId: 0,
    };
  },
  async mounted() {
    try {
      const response = await get('/tasks');
      console.log('========>', response.data);
      this.result = response.data.data.items;
      this.runningTaskId();
    } catch (error) {
      console.error(error);
    }
  },
  components: { NewTaskCard, TaskCard },
  computed: {
    todayData(): TaskRecord[] {
      const today = new Date();
      console.log(today);
      return this.result.filter((items) => {
        const itemDate = parseISO(items.first_log.start_date);
        return isSameDay(today, itemDate);
      });
    },
  },
  methods: {
    runningTaskId(): void {
      this.result.filter((task) => {
        if (task.status == 'started') {
          this.taskId = task.id;
        }
      });
    },
  },
});
