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
      this.uniqueMemberTasks = uniqueTasks;
      return uniqueTasks;
    },
    //

    //
    // Total Work Time functions
    //

    //
    // totalMemberWorkTimeAddition() {
    //   if (this.uniqueMemberTasks !== undefined) {
    //     this.uniqueMemberTasks.map((item) => {
    //       let name = item.name;
    //       if ((name = item.name)) {
    //         item.tasks.map(
    //           (tasktime) => (this.totalSpentTime += +tasktime.total_spent_time)
    //         );
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
