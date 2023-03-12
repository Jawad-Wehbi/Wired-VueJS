import { get } from '@/service';
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
  async mounted() {
    try {
      const response = await get('/team');
      console.log('========>', response.data);
      // this.result = response.data.data.items;
    } catch (error) {
      console.error(error);
    }
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
