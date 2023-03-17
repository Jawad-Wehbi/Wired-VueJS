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
    memberName: {
      required: true,
      default: 'Jawad',
    },
  },
  mounted() {
    console.log('Here Are the Member Info', this.MemberTasks);
    console.log(this.memberName);
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
