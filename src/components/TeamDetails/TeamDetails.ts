import { TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
import { filteredTask } from 'DataTypes';
import MemberDetails from '../MemberDetails/MemberDetails.vue';
export default defineComponent({
  data() {
    return {
      memberData: [] as TaskRecord[],
      uniqueMemberTasks: [] as filteredTask[],
      usersTasks: [] as TaskRecord[],
      totalSpentTime: 0,
    };
  },
  mounted() {
    console.log('Team Detailssssss', this.TeamDetails);
    this.getUniqueTasks();
    // this.totalMemberWorkTimeAddition();
  },
  methods: {
    getUniqueTasks() {
      this.memberData = this.TeamDetails;
      const filteredTasks = [] as filteredTask[];
      this.memberData.map((task) => {
        const obj: filteredTask = {
          name: task.user.full_name,
          tasks: [] as TaskRecord[],
        };
        filteredTasks.push(obj);
        this.memberData.map((task) => {
          if (task.user.full_name === obj.name) {
            obj.tasks.push(task);
          }
        });
      });
      const uniqueTasks = filteredTasks.filter(
        (user, index, self) =>
          index === self.findIndex((member) => member.name === user.name)
      );
      console.log('UNIQUE TASKS', uniqueTasks);
      this.uniqueMemberTasks = uniqueTasks;
      console.log('Heyyyyyyyyyyy', this.uniqueMemberTasks);
      return uniqueTasks;
    },
    //

    //
    // Total Work Time functions
    //

    //
    // totalMemberWorkTimeAddition() {
    //   if (this.uniqueMemberTasks !== undefined) {
    //     console.log('this.uniqueMemberTasks :>> ', this.uniqueMemberTasks);
    //     this.uniqueMemberTasks.map((item) => {
    //       console.log('item.tasks :>> ', item);
    //       let name = item.name;
    //       if ((name = item.name)) {
    //         item.tasks.map(
    //           (tasktime) => (this.totalSpentTime += +tasktime.total_spent_time)
    //         );
    //         console.log('this.totalSpentTime :>> ', this.totalSpentTime);
    //       }
    //     });
    //   }
    // },
  },
  props: {
    TeamDetails: {
      type: Array as PropType<TaskRecord[]>,
      required: true,
    },
  },
  components: { MemberDetails },
});
