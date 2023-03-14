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
    };
  },
  methods: {
    passUserId(id: number) {
      this.$emit('passUserId', id);
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
  },
  mounted() {
    setTimeout(() => {
      this.reduce();
      console.log(this.plansArray);
    }, 3000);
  },
  computed: {
    todayData(): TaskRecord[] {
      const today = new Date();
      console.log(today);
      return this.MembersInfo.filter((items) => {
        const itemDate = parseISO(items.first_log.start_date);
        return isSameDay(today, itemDate);
      });
      // .filter((items) => {
      //       return items.status === 'started' || items.status === 'paused';
      //     });
    },
    plansData(): TaskRecord[] {
      console.log('CHECK ACTIVEMEMBERS', this.MembersInfo);
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
        console.log('Team planningArray', planningArray);
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
});
