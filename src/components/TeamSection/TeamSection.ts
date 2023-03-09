import { defineComponent } from 'vue';
import MembersBoard from '../MembersBoard/MembersBoard.vue';
import MembersTasks from '../MembersTasks/MembersTasks.vue';
import TeamDetails from '../TeamDetails/TeamDetails.vue';
export default defineComponent({
  data() {
    return {
      showMemberTasks: false,
      showTeamDetails: false,
    };
  },
  methods: {
    togglelistItem() {
      this.showMemberTasks = !this.showMemberTasks;
    },
    toggleDetails() {
      this.showTeamDetails = !this.showTeamDetails;
    },
  },
  components: { MembersBoard, MembersTasks, TeamDetails },
});
