import { defineComponent } from 'vue';
import { TaskRecord } from 'DataTypes';
import { deleteData, post, put } from '@/service';
import { addSecondsToTime } from '@/helpers/timeFormatter';
export default defineComponent({
  data() {
    return {
      result: [] as TaskRecord[],
      noteMessage: this.TaskDetails.notes,
      currentTimer: 0,
      // totalTaskTime: 0,
      totalTaskTime: parseInt(this.TaskDetails.total_spent_time),
    };
  },
  props: {
    showButton: {
      type: Boolean,
      default: false,
    },
    showName: {
      type: Boolean,
      default: false,
    },
    TaskDetails: {
      type: Object,
      required: true,
    },
    runningTaskId: {
      type: Number,
      required: false,
    },
  },
  methods: {
    //

    //
    // Task Current Timer Functions
    //

    //
    taskCurrentTimer() {
      this.currentTimer += 0.5;
      return addSecondsToTime('00:00:00', Math.round(this.currentTimer));
    },
    //

    //
    // Total Task Time Functions
    //

    //
    taskTotalTimeIncrementter() {
      this.totalTaskTime += 0.5;
      return addSecondsToTime('00:00:00', Math.round(this.totalTaskTime));
    },
    //

    //
    // Buttons Functions
    //

    //
    async playTask(id: number) {
      this.$emit('reloadAllTasks');
      console.log('Test :>> ');
      try {
        if (this.runningTaskId != 0) {
          const pauseresponse = await post(`/tasks/${this.runningTaskId}/stop`);
          this.result = pauseresponse.data.data.items;
        }
        const response = await post(`/tasks/${id}/start`);
        console.log('========>', response.data);
        this.result = response.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async pauseTask(id: number) {
      this.$emit('reloadAllTasks');
      try {
        const response = await post(`/tasks/${id}/stop`);
        console.log('========>', response.data);
        this.result = response.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async saveTask(id: number) {
      try {
        const response = await put(`/tasks/${id}`, {
          notes: this.noteMessage,
        });
        console.log('========>', response.data);
        this.result = response.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async unendTask(id: number) {
      try {
        const response = await put(`/tasks/${id}/unend`);
        console.log('========>', response.data);
        this.result = response.data.data.items;
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(id: number) {
      try {
        const response = await deleteData(`/tasks/${id}`);
        console.log('========>', response.data);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    //

    //
    // Task Current Timer Functions
    //

    //
    computedTaskCurrentTime() {
      return this.taskCurrentTimer();
    },
    //

    //
    // Total Task Time functions
    //

    //
    computedTaskTotalTime() {
      return this.taskTotalTimeIncrementter();
    },
    //

    //
    // Buttons Functions
    //

    //
    pauseButton(): string {
      if (
        this.TaskDetails.status == 'paused' ||
        this.TaskDetails.status == 'finished'
      ) {
        return 'display-none';
      }
      return '';
    },
    playButton(): string {
      if (
        this.TaskDetails.status == 'started' ||
        this.TaskDetails.status == 'finished'
      ) {
        return 'display-none';
      }
      return '';
    },
    reloadButton(): string {
      if (
        this.TaskDetails.status == 'paused' ||
        this.TaskDetails.status == 'started'
      ) {
        return 'display-none';
      }
      return '';
    },
    showTaskCurrentTimer(): string {
      if (
        this.TaskDetails.status == 'paused' ||
        this.TaskDetails.status == 'finished'
      ) {
        return 'display-none';
      }
      return '';
    },
  },
  mounted() {
    if (this.runningTaskId === this.TaskDetails.id) {
      setInterval(() => {
        this.taskCurrentTimer();
      }, 1000);
      setInterval(() => {
        this.taskTotalTimeIncrementter();
      }, 1000);
    }
  },
});
