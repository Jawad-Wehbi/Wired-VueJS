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
  async mounted() {
    try {
      const response = await get('/tasks');
      console.log('========>', response.data);
      this.result = response.data.data.items;
      console.log('Result :>> ', this.result);
    } catch (error) {
      console.error(error);
    }
  },
  components: {
    NavigationBar,
    TimerSection,
    TasksBoard,
    ButtonSection,
    TeamSection,
  },
});
