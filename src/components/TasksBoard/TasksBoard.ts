import { defineComponent } from 'vue';
import NewTaskCard from '../../components/NewTaskCard/NewTaskCard.vue';
import TaskCard from '../../components/TaskCard/TaskCard.vue';
export default defineComponent({
  data() {
    return {};
  },
  components: { NewTaskCard, TaskCard },
});
