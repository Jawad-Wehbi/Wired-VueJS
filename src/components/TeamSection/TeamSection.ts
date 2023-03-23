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
    this.memberDataSorting();
    try {
      const response = await get('/team/tasks', { limit: 100 });
      console.log('Team Information ========>', response.data.data.items);
      this.result = response.data.data.items;
      console.log('Team result ========>', this.result);
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
    memberDataSorting() {
      this.memberData.map((item) => console.log('item :>> ', item));
    },
    //

    //
    // Total Work Time functions
    //

    //
    timeOfEachMember(): TaskRecord[] {
      return this.todayData.filter((item) => {
        console.log('Here are all the users', item);
        if (this.userId == item.user.id) {
          console.log('Here is the User you want', item);
          return item;
        }
      });
    },
    totalMemberWorkTimeAddition() {
      if (this.memberData !== undefined) {
        console.log('this.memberData :>> ', this.memberData);
        this.memberData.map((item) => {
          console.log('item.total_spent_time :>> ', item.total_spent_time);
          return (this.totalSpentTime += +item.total_spent_time);
        });
        console.log(
          'totalSpentTime from TeamSection is:>> ',
          this.totalSpentTime
        );
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
