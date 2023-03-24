import { defineComponent } from 'vue';
import NavigationBar from '../../components/NavBar/NavigationBar.vue';
import TasksBoard from '@/components/TasksBoard/TasksBoard.vue';
import TimerSection from '@/components/TimerSection/TimerSection.vue';
import ButtonSection from '@/components/ButtonSection/ButtonSection.vue';
import TeamSection from '@/components/TeamSection/TeamSection.vue';
import { TaskRecord } from '../../../DataTypes';
import { get } from '@/service';
export default defineComponent({
  data() {
    return {
      result: [] as TaskRecord[],
      taskId: 0,
    };
  },
  mounted() {
    this.getTasks();
    this.runningTaskId();
  },
  methods: {
    reloadAllTasks() {
      this.getTasks();
    },
    async getTasks() {
      try {
        const allTasks = await get('/tasks');
        this.result = allTasks.data.data.items;
        console.log('this.result :>> ', this.result);
      } catch (error) {
        console.error(error);
      }
    },
    runningTaskId(): void {
      console.log('this.runningTaskId :>> ', this.result);
      this.result.filter((task) => {
        if (task.status === 'started') {
          this.taskId = task.id;
        }
      });
    },
  },
  watch: {
    reloadResultChanges() {
      this.result;
    },
  },
  components: {
    NavigationBar,
    TimerSection,
    TasksBoard,
    ButtonSection,
    TeamSection,
  },
});
