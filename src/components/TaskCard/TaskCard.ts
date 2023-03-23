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
      try {
        if (this.runningTaskId != 0) {
          const pauseresponse = await post(`/tasks/${this.runningTaskId}/stop`);
          this.result = pauseresponse.data.data.items;
        }
        const playTask = await post(`/tasks/${id}/start`);
        this.result = playTask.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async pauseTask(id: number) {
      this.$emit('reloadAllTasks');
      try {
        const pauseTask = await post(`/tasks/${id}/stop`);
        this.result = pauseTask.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async saveTask(id: number) {
      try {
        const saveTask = await put(`/tasks/${id}`, {
          notes: this.noteMessage,
        });
        this.result = saveTask.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async unendTask(id: number) {
      try {
        const unendTask = await put(`/tasks/${id}/unend`);
        this.result = unendTask.data.data.items;
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(id: number) {
      try {
        await deleteData(`/tasks/${id}`);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    // Task Current Timer Functions

    computedTaskCurrentTime() {
      return this.taskCurrentTimer();
    },

    // Total Task Time functions

    computedTaskTotalTime() {
      return this.taskTotalTimeIncrementter();
    },

    // Buttons Functions

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
