import { TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
import TimerComponent from '../TimerComponent/TimerComponent.vue';
export default defineComponent({
  data() {
    return {
      tasksArray: this.tasks,
    };
  },
  mounted() {
    console.log('Tasks Array is :>> ', this.tasksArray);
    console.log('Tasks are :>> ', this.tasks);
  },
  props: {
    tasks: {
      type: [] as PropType<TaskRecord[]>,
      required: true,
    },
  },
  components: { TimerComponent },
});
