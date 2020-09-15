/**
 *
 * @param fn {function} Callback function to run at every interval
 * @param interval {number} Interval in seconds
 */
export const pricePublishedInit = (fn: () => void, interval: number) => {
  const now = new Date();
  const nextMinute = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds() + Math.abs((now.getSeconds() % interval) - interval),
    0
  );
  const diff = nextMinute.getTime() - now.getTime();

  const loop = () => {
    fn();
    setInterval(fn, interval * 1000);
  };

  if (diff > 100) {
    setTimeout(loop, diff);
  } else {
    loop();
  }
};
