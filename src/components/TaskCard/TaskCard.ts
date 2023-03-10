import { defineComponent } from 'vue';
import { TaskRecord } from 'DataTypes';
import { deleteData, post, put } from '@/service';
export default defineComponent({
  data() {
    return {
      result: [] as TaskRecord[],
      noteMessage: this.TaskDetails.notes,
    };
  },
  mounted() {
    console.log(this.runningTaskId);
  },
  methods: {
    async playTask(id: number) {
      try {
        const pauseresponse = await post(`/tasks/${this.runningTaskId}/stop`);
        const response = await post(`/tasks/${id}/start`);
        console.log('========>', response.data);
        this.result = pauseresponse.data.data.items;
        this.result = response.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async pauseTask(id: number) {
      try {
        const response = await post(`/tasks/${id}/stop`);
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
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(id: number) {
      try {
        const response = await deleteData(`/tasks/${id}`);
        console.log('========>', response.data);
      } catch (error) {
        console.error(error);
      }
    },
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
      required: true,
    },
  },
  computed: {
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
  },
});
