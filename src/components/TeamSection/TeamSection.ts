import { defineComponent } from 'vue';
import MembersBoard from '../MembersBoard/MembersBoard.vue';
import MembersTasks from '../MembersTasks/MembersTasks.vue';
export default defineComponent({
  data() {
    return {
      showMemberTasks: false,
    };
  },
  methods: {
    togglelistItem() {
      this.showMemberTasks = !this.showMemberTasks;
    },
  },
  components: { MembersBoard, MembersTasks },
});
