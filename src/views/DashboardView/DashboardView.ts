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
    this.getAllTasks();
  },
  methods: {
    reloadAllTasks() {
      console.log('reloadAllTasks :>> ', this.getAllTasks());
      console.log('Test :>> ');
      this.getAllTasks();
    },
    async getAllTasks() {
      try {
        const response = await get('/tasks');
        console.log('========>', response.data);
        this.result = response.data.data.items;
        console.log('Result :>> ', this.result);
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    reloadResultChanges() {
      console.log('Result Changed :>> ', this.result);
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
