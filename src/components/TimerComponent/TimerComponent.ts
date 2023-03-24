import { todayDataHelper } from '@/helpers/utils';
import { TaskRecord } from 'DataTypes';
import { parseISO, differenceInSeconds, format } from 'date-fns';
import { defineComponent, PropType } from 'vue';
import { addSecondsToTime } from '../../helpers/timeFormatter';

interface StyleProps {
  color: string;
  backgroundColor: string;
  fontSize: string;
}

export default defineComponent({
  data() {
    return {
      tasksArray: this.tasks,
      totalBreakTime: 0,
      totalSpentTime: 0,
      currentBreak: 0,
    };
  },
  props: {
    styles: {
      type: Object as () => StyleProps,
      default: () => ({}),
    },
    Timer: {
      type: String as PropType<string>,
      required: true,
    },
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    TimerTitle: {
      type: String as PropType<string>,
      required: true,
    },
    tasks: {
      type: [] as PropType<TaskRecord[]>,
      required: true,
    },
  },
  computed: {
    computedStyles(): Record<string, string> {
      const styles = {
        color: this.styles.color,
        backgroundColor: this.styles.backgroundColor,
      };
      return styles;
    },
    todayData() {
      if (this.tasksArray !== undefined) {
        return todayDataHelper(this.tasksArray);
      }
    },
    //

    //
    // Total Work Time Computed Properties
    //

    //
    computedTotalWorkTime() {
      return this.worktimeIncrementter();
    },
    //

    //
    // Total Break Time Computed Properties
    //

    //
    computedTotalBreakTime() {
      return this.totalBreaktimeIncrementter();
    },
    //

    //
    // Current Break Time Computed Properties
    //

    //
    computedCurrentBreakTime() {
      return this.currrentBreaktimeIncrementter();
    },
  },
  methods: {
    //

    //
    // Total Break Time Functions
    //

    //
    findFirstTask() {
      if (this.todayData !== undefined) {
        return Math.min(...this.todayData.map((item: TaskRecord) => item.id));
      }
    },
    getStartDate() {
      if (this.todayData !== undefined) {
        const task = this.todayData.find(
          (task) => task.id === this.findFirstTask()
        );
        const startedTime = task?.first_log.start_date;
        let formattedDate;
        if (startedTime) {
          const date = parseISO(startedTime);

          formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
        }
        return formattedDate;
      }
    },
    breakTimeCalculations() {
      const currentTime = new Date();
      const start_date_s = this.getStartDate();
      if (start_date_s) {
        const start_date_d = new Date(start_date_s);
        const totalTime = differenceInSeconds(currentTime, start_date_d);
        this.totalBreakTime = Math.abs(totalTime - this.totalSpentTime);
      }
    },
    totalBreaktimeIncrementter() {
      this.totalBreakTime = this.totalBreakTime + 0.5;
      return addSecondsToTime('00:00:00', Math.round(this.totalBreakTime));
    },
    //

    //
    // Current Break Time functions
    //

    //
    currrentBreaktimeIncrementter() {
      this.currentBreak = this.currentBreak + 0.5;
      return addSecondsToTime('00:00:00', Math.round(this.currentBreak));
    },
    //

    //
    // Total Work Time functions
    //

    //
    totalWorkTimeAddition() {
      if (this.todayData !== undefined) {
        console.log('this.todayData :>> ', this.todayData);
        this.todayData.map((item) => {
          console.log('item.total_spent_time :>> ', item.total_spent_time);
          return (this.totalSpentTime += +item.total_spent_time);
        });
      }
    },
    worktimeIncrementter() {
      this.totalSpentTime += 0.5;
      return addSecondsToTime('00:00:00', Math.round(this.totalSpentTime));
    },
  },
  mounted() {
    if (this.todayData !== undefined) {
      if (this.todayData.find((task) => task.status === 'started')) {
        setInterval(() => {
          this.worktimeIncrementter();
        }, 1000);
      } else {
        setInterval(() => {
          this.totalBreaktimeIncrementter();
        }, 1000);
        setInterval(() => {
          this.currrentBreaktimeIncrementter();
        }, 1000);
      }
    }

    this.totalWorkTimeAddition();
    this.getStartDate();
    this.breakTimeCalculations();
  },
});
