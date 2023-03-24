import { todayDataHelper } from '@/helpers/utils';
import { TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
import TimerComponent from '../TimerComponent/TimerComponent.vue';
export default defineComponent({
  data() {
    return {
      tasksArray: this.tasks,
      showTotalBreakTimer: false,
    };
  },
  mounted() {
    if (this.todayData !== null) {
      this.showTotalBreakTimer = true;
    }
  },
  props: {
    tasks: {
      type: [] as PropType<TaskRecord[]>,
      required: true,
    },
  },
  computed: {
    todayData() {
      if (this.tasksArray !== undefined) {
        return todayDataHelper(this.tasksArray);
      }
    },
    TotalBreakTime(): string {
      if (this.tasksArray == null) {
        return 'display-none';
      }
      return '';
    },
    CurrentBreakTime(): string {
      if (this.tasksArray.find((task) => task.status === 'started')) {
        return 'display-none';
      }
      return '';
    },
  },
  components: { TimerComponent },
});
