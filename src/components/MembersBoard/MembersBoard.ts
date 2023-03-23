import { defineComponent, PropType } from 'vue';
import ListItem from '../ListItem/ListItem.vue';
import ListButtons from '../ListButtons/ListButtons.vue';
import TaskCard from '../TaskCard/TaskCard.vue';
import ButtonSection from '../ButtonSection/ButtonSection.vue';
import { TaskRecord } from 'DataTypes';
import { isSameDay, parseISO } from 'date-fns';
export default defineComponent({
  data() {
    return {
      plansDialog: false,
      activeMembers: [] as TaskRecord[],
      teamPlans: [] as TaskRecord[],
      plansArray: [] as TaskRecord[],
      totalSpentTime: 0,
    };
  },
  methods: {
    passUserId(id: number, name: string) {
      this.$emit('passUserId', id, name);
    },
    toggleDetails() {
      this.$emit('showTeamDetails');
    },
    reduce() {
      this.activeMembers = this.MembersInfo.reduce(
        (accumulator: TaskRecord[], currentTask: TaskRecord) => {
          const userExists = accumulator.some(
            (task) => task.user.id === currentTask.user.id
          );
          if (!userExists) {
            accumulator.push(currentTask);
          }
          return accumulator;
        },
        []
      );
    },

    //

    //
    // Total Work Time functions
    //

    //

    // totalMemberWorkTimeAddition() {
    //   if (this.activeMembers !== undefined) {
    //     console.log('this.activeMembers :>> ', this.activeMembers);
    //     this.activeMembers.map((item) => {
    //       if (item.user.full_name === 'Jawad Wehbi') {
    //         console.log('item.total_spent_time :>> ', item.total_spent_time);
    //         return (this.totalSpentTime += +item.total_spent_time);
    //       }
    //     });
    //     console.log('totalSpentTime is:>> ', this.totalSpentTime);
    //   }
    // },
  },

  computed: {
    todayData(): TaskRecord[] {
      const today = new Date();
      return this.activeMembers
        .filter((items) => {
          const itemDate = parseISO(items.first_log.start_date);
          return isSameDay(today, itemDate);
        })
        .filter((items) => {
          return items.status !== 'finished';
        });
    },
    plansData(): TaskRecord[] {
      const planningArray = [] as TaskRecord[];
      const today = new Date();
      return this.MembersInfo.filter((items) => {
        const itemDate = parseISO(items.first_log.start_date);
        return isSameDay(today, itemDate);
      }).filter((teamPlans) => {
        if (
          teamPlans.project.name === 'Internal' &&
          teamPlans.task_category.name === 'Planning'
        ) {
          planningArray.push(teamPlans);
          return planningArray;
        }
        this.plansArray = planningArray;
      });
    },
  },
  props: {
    MembersInfo: {
      type: Array as PropType<TaskRecord[]>,
      required: true,
    },
  },
  components: { ListItem, ListButtons, ButtonSection, TaskCard },
  mounted() {
    setTimeout(() => {
      this.reduce();
    }, 10000);
  },
});
