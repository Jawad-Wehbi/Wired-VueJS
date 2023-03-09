import { defineComponent } from 'vue';
import TimerComponent from '../TimerComponent/TimerComponent.vue';
import TaskCard from '../TaskCard/TaskCard.vue';
export default defineComponent({
  data() {
    return {};
  },
  components: { TimerComponent, TaskCard },
});
