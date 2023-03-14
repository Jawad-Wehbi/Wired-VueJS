import { get } from '@/service';
import { TaskRecord } from 'DataTypes';
import { isSameDay, parseISO } from 'date-fns';
import { defineComponent } from 'vue';
import MembersBoard from '../MembersBoard/MembersBoard.vue';
import MembersTasks from '../MembersTasks/MembersTasks.vue';
import TeamDetails from '../TeamDetails/TeamDetails.vue';
export default defineComponent({
  data() {
    return {
      userId: 0,
      showMemberTasks: false,
      showTeamDetails: false,
      result: [] as TaskRecord[],
      todayMemberTasks: [] as TaskRecord[],
      MemberTasks: [] as TaskRecord[],
    };
  },
  async mounted() {
    try {
      const response = await get('/team/tasks', { limit: 100 });
      console.log('Team Information ========>', response.data.data.items);
      this.result = response.data.data.items;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    todayData(): TaskRecord[] {
      const today = new Date();
      console.log('Today is:', today);
      return this.result.filter((items) => {
        const itemDate = parseISO(items.first_log.start_date);
        return isSameDay(today, itemDate);
      });
    },
    memberData(): TaskRecord[] {
      return this.todayData.filter((todayMemberTasks) => {
        console.log('Here are all the users', todayMemberTasks);
        if (this.userId == todayMemberTasks.user.id) {
          console.log('Here is the User you want', todayMemberTasks);
          return todayMemberTasks;
        }
      });
    },
  },
  methods: {
    setUserId(id: number) {
      this.userId = id;
      this.showMemberTasks = !this.showMemberTasks;
    },
    toggleDetails() {
      this.showTeamDetails = !this.showTeamDetails;
    },
  },
  components: { MembersBoard, MembersTasks, TeamDetails },
});
