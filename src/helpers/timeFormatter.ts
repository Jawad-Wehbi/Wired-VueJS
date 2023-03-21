export function addSecondsToTime(timeString: string, seconds: number): string {
  const [hours, minutes, oldSeconds] = timeString.split(':').map(Number);
  let newSeconds: number = oldSeconds + seconds;
  let newMinutes = minutes;
  if (newSeconds >= 60) {
    newMinutes += Math.floor(newSeconds / 60);
    newSeconds %= 60;
  }
  let newHours = hours;
  if (newMinutes >= 60) {
    newHours += Math.floor(newMinutes / 60);
    newMinutes %= 60;
  }
  return `${newHours.toString().padStart(2, '0')}:${newMinutes
    .toString()
    .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
}
