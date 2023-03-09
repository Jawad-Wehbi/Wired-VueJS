import { defineComponent } from 'vue';
import MainButton from '../MainButton/MainButton.vue';
import TaskCard from '../TaskCard/TaskCard.vue';
export default defineComponent({
  data() {
    return {
      dialog: false,
    };
  },
  components: { MainButton, TaskCard },
});
