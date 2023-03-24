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
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    reloadAllTasks() {
      this.getTasks();
    },
    async getTasks() {
      try {
        const allTasks = await get('/tasks');
        this.result = allTasks.data.data.items;
      } catch (error) {
        console.error(error);
      }
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
