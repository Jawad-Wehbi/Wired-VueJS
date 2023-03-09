import { defineComponent } from 'vue';
import TaskCard from '../TaskCard/TaskCard.vue';
export default defineComponent({
  data() {
    return {
      display: 'none',
    };
  },
  methods: {
    togglePlay() {
      if (this.display === 'none') {
        this.display = 'true';
      } else {
        this.display = 'none';
      }
    },
  },
  components: { TaskCard },
});
