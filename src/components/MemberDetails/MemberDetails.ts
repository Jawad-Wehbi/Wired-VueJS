import { defineComponent, PropType } from 'vue';
import TimerComponent from '../TimerComponent/TimerComponent.vue';
import TaskCard from '../TaskCard/TaskCard.vue';
import { filteredTask } from 'DataTypes';
export default defineComponent({
  data() {
    return {};
  },
  props: {
    MembersInfo: {
      type: [] as PropType<filteredTask>,
      required: true,
    },
  },
  components: { TimerComponent, TaskCard },
});
