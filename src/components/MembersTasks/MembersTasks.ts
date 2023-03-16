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
    MembersInfo: {
      type: Array as PropType<TaskRecord[]>,
      required: true,
    },
  },
  mounted() {
    console.log(this.MembersInfo);
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
