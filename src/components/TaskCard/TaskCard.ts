import { defineComponent, ref } from 'vue';
import { TaskRecord } from 'DataTypes';
import { deleteData, post, put } from '@/service';
export default defineComponent({
  data() {
    return {
      result: [] as TaskRecord[],
      noteMessage: this.TaskDetails.notes,
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    async playTask(id: number) {
      try {
        if (this.runningTaskId != 0) {
          const pauseresponse = await post(`/tasks/${this.runningTaskId}/stop`);
          this.result = pauseresponse.data.data.items;
        }
        const response = await post(`/tasks/${id}/start`);
        console.log('========>', response.data);
        this.result = response.data.data.items;
        this.start();
      } catch (error) {
        console.error(error);
      }
    },
    async pauseTask(id: number) {
      try {
        const response = await post(`/tasks/${id}/stop`);
        console.log('========>', response.data);
        this.result = response.data.data.items;
        window.location.reload();
        this.reset();
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
        this.start();
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
  setup() {
    const time = ref('00:00:00');
    let timeBegan: Date | null = null;
    let timeStopped: Date | null = null;
    let stoppedDuration = 0;
    let started: NodeJS.Timeout | null = null;
    let running = false;

    function start() {
      if (running) return;

      if (timeBegan === null) {
        reset();
        timeBegan = new Date();
      }

      if (timeStopped !== null) {
        stoppedDuration += new Date().getTime() - timeStopped.getTime();
      }

      started = setInterval(clockRunning, 10);
      running = true;
    }

    function stop() {
      running = false;
      timeStopped = new Date();
      clearInterval(started!);
    }

    function reset() {
      running = false;
      clearInterval(started!);
      stoppedDuration = 0;
      timeBegan = null;
      timeStopped = null;
      time.value = '00:00:00';
    }

    function clockRunning() {
      const currentTime = new Date();
      const timeElapsed = new Date(
        currentTime.getTime() - timeBegan!.getTime() - stoppedDuration
      );
      const hour = timeElapsed.getUTCHours();
      const min = timeElapsed.getUTCMinutes();
      const sec = timeElapsed.getUTCSeconds();

      time.value =
        zeroPrefix(hour!, 2) +
        ':' +
        zeroPrefix(min!, 2) +
        ':' +
        zeroPrefix(sec!, 2);
    }

    function zeroPrefix(num: number | undefined, digit = 2) {
      let zero = '';
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }

    return { time, start, stop, reset };
  },
});
