import { todayDataHelper } from '@/helpers/utils';
import { get } from '@/service';
import { TaskRecord } from 'DataTypes';
import { defineComponent } from 'vue';
import MembersBoard from '../MembersBoard/MembersBoard.vue';
import MembersTasks from '../MembersTasks/MembersTasks.vue';
import TeamDetails from '../TeamDetails/TeamDetails.vue';
export default defineComponent({
  data() {
    return {
      userId: 0,
      userName: '',
      showMemberTasks: false,
      showTeamDetails: false,
      result: [] as TaskRecord[],
      MemberTasks: [] as TaskRecord[],
      totalSpentTime: 0,
    };
  },
  async mounted() {
    this.memberData;
    this.totalMemberWorkTimeAddition();
    try {
      const teamTasks = await get('/team/tasks', { limit: 100 });
      this.result = teamTasks.data.data.items;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    todayData(): TaskRecord[] {
      return todayDataHelper(this.result);
    },
    memberData(): TaskRecord[] {
      return this.todayData.filter((todayMemberTasks) => {
        if (this.userId == todayMemberTasks.user.id) {
          return todayMemberTasks;
        }
      });
    },
  },
  methods: {
    //

    //
    // Total Work Time functions
    //

    //
    timeOfEachMember(): TaskRecord[] {
      return this.todayData.filter((item) => {
        if (this.userId == item.user.id) {
          return item;
        }
      });
    },
    totalMemberWorkTimeAddition() {
      if (this.memberData !== undefined) {
        this.memberData.map((item) => {
          return (this.totalSpentTime += +item.total_spent_time);
        });
      }
    },
    setUserId(id: number, name: string) {
      this.userId = id;
      this.userName = name;
      this.showMemberTasks = !this.showMemberTasks;
    },
    toggleDetails() {
      this.showTeamDetails = !this.showTeamDetails;
    },
  },
  components: { MembersBoard, MembersTasks, TeamDetails },
});
