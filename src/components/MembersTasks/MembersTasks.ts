import { TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
import TaskCard from '../TaskCard/TaskCard.vue';
export default defineComponent({
  data() {
    return {
      display: 'none',
    };
  },
  props: {
    MemberTasks: {
      type: Array as PropType<TaskRecord[]>,
      required: true,
    },
  },
  mounted() {
    console.log(this.MemberTasks);
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
