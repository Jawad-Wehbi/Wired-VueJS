import { defineComponent } from 'vue';
import MainButton from '../MainButton/MainButton.vue';
import TaskCard from '../TaskCard/TaskCard.vue';
import NewTaskCard from '../NewTaskCard/NewTaskCard.vue';
export default defineComponent({
  data() {
    return {
      addShortcutDialog: false,
      allTasksDialog: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  components: { MainButton, TaskCard, NewTaskCard },
});
