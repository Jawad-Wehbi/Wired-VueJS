import { defineComponent, ref } from 'vue';

export default defineComponent({
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
