import { defineComponent } from 'vue';
import NewTaskCard from '../../components/NewTaskCard/NewTaskCard.vue';
import TaskCard from '../../components/TaskCard/TaskCard.vue';
import { get } from '../../../src/service';
import { TaskRecord } from '../../../DataTypes';
import { todayDataHelper } from '@/helpers/utils';

export default defineComponent({
  data() {
    return {
      result: [] as TaskRecord[],
      taskId: 0,
      totalSpentTime: 0,
    };
  },
  mounted() {
    this.getAllTasks();
  },
  computed: {
    todayData(): TaskRecord[] {
      return todayDataHelper(this.result);
    },
  },
  methods: {
    async getAllTasks() {
      try {
        const allTasks = await get('/tasks');
        this.result = allTasks.data.data.items;
        this.runningTaskId();
      } catch (error) {
        console.error(error);
      }
    },
    reloadAllTasks() {
      this.$emit('reloadTasks');
      this.getAllTasks();
    },
    runningTaskId(): void {
      this.result.filter((task) => {
        if (task.status == 'started') {
          this.taskId = task.id;
        }
      });
    },
  },
  components: { NewTaskCard, TaskCard },
  watch: {
    reloadResults() {
      this.result;
    },
  },
});
