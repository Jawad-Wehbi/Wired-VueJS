import { TaskRecord } from 'DataTypes';
import { parseISO, isSameDay, differenceInSeconds, format } from 'date-fns';
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
      tasksArray: [] as TaskRecord[],
      totalBreakTime: 0,
      totalSpentTime: 0,
      Time: '',
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
  },
  setup(props) {
    return {
      icon: props.icon,
      TimerTitle: props.TimerTitle,
    };
  },
  computed: {
    computedStyles(): Record<string, string> {
      const styles = {
        color: this.styles.color,
        backgroundColor: this.styles.backgroundColor,
      };
      return styles;
    },
    todayData(): TaskRecord[] {
      const today = new Date();
      return this.tasksArray.filter((items) => {
        console.log('Tasks Array :>> ', this.tasksArray);
        const itemDate = parseISO(items.first_log.start_date);
        return isSameDay(today, itemDate);
      });
    },
  },
  methods: {
    //

    //
    // Total Break Time Functions
    //

    //
    findFirstTask() {
      return Math.min(...this.todayData.map((item: TaskRecord) => item.id));
    },
    getStartDate() {
      const task = this.todayData.find(
        (task) => task.id === this.findFirstTask()
      );
      const startedTime = task?.first_log.start_date;
      let formattedDate;
      if (startedTime) {
        const date = parseISO(startedTime);

        formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
        console.log('formattedDate :>> ', formattedDate);
        console.log('Type of formattedDate :>> ', typeof formattedDate);
      }
      return formattedDate;
    },
    breakTimeCalculations() {
      const currentTime = new Date();
      const start_date_s = this.getStartDate();
      if (start_date_s) {
        const start_date_d = new Date(start_date_s);
        const totalTime = differenceInSeconds(currentTime, start_date_d);
        console.log('totalTime :>> ', totalTime);
        this.totalBreakTime = Math.abs(totalTime - this.totalSpentTime);
        console.log('totalBreakTime :>> ', this.totalBreakTime);
      }
    },
    totalBreaktimeIncrementter() {
      this.totalBreakTime = this.totalBreakTime + 1;
      const formattedTotalBreakTime = addSecondsToTime(
        '00:00:00',
        this.totalBreakTime
      );
      // console.log('formattedTotalBreakTime :>> ', formattedTotalBreakTime);
      return formattedTotalBreakTime;
    },
    totalBreakTimer() {
      setInterval(() => {
        console.log(
          'totalBreaktimeIncrementter',
          this.totalBreaktimeIncrementter()
        );
        // this.totalBreaktimeIncrementter();
      }, 1000);
    },
    //

    //
    // Current Break Time functions
    //

    //
    currrentBreaktimeIncrementter() {
      this.currentBreak = this.currentBreak + 1;
      const formattedBreakTime = addSecondsToTime(
        '00:00:00',
        this.currentBreak
      );
      // console.log('formattedBreakTime :>> ', formattedBreakTime);
      return formattedBreakTime;
    },
    currentBreakTimer() {
      setInterval(() => {
        console.log(
          'currrentBreaktimeIncrementter',
          this.currrentBreaktimeIncrementter()
        );
        // this.currrentBreaktimeIncrementter();
      }, 1000);
    },
    //

    //
    // Total Work Time functions
    //

    //
    totalWorkTimeAddition() {
      this.todayData.map((item) => {
        return (this.totalSpentTime += +item.total_spent_time);
      });
      console.log('totalSpentTime is:>> ', this.totalSpentTime);
    },
    worktimeIncrementter() {
      const IncrementedTime = (this.totalSpentTime = this.totalSpentTime + 1);
      // console.log('Incremented Time is :>> ', IncrementedTime);
      const formattedWorkTime = addSecondsToTime(
        '00:00:00',
        Math.round(IncrementedTime)
      );
      return formattedWorkTime;
    },
    startWorkTimer() {
      setInterval(() => {
        // console.log(this.worktimeIncrementter());
        this.worktimeIncrementter();
      }, 1000);
    },
  },
  mounted() {
    // this.totalWorkTimeAddition();
    // this.startWorkTimer();
    // this.currrentBreaktimeIncrementter();
    // this.currentBreakTimer();
    // this.totalBreaktimeIncrementter();
    // this.totalBreakTimer();
    this.getStartDate();
    this.breakTimeCalculations();
  },
});
