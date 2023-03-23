import { TaskRecord } from 'DataTypes';
import { isSameDay, parseISO } from 'date-fns';
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
        const today = new Date();
        return this.tasksArray.filter((items) => {
          const itemDate = parseISO(items.first_log.start_date);
          return isSameDay(today, itemDate);
        });
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
