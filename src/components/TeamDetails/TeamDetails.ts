import { TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
import { filteredTask } from 'DataTypes';
import MemberDetails from '../MemberDetails/MemberDetails.vue';
export default defineComponent({
  data() {
    return {
      memberData: [] as TaskRecord[],
      uniqueMemberTasks: [] as filteredTask[],
    };
  },
  mounted() {
    console.log('Team Detailssssss', this.TeamDetails);
    this.getUniqueTasks();
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
  },
  props: {
    TeamDetails: {
      type: Array as PropType<TaskRecord[]>,
      required: true,
    },
  },
  components: { MemberDetails },
});
