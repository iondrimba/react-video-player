export const convertFormatedTimeToSeconds = (time) => {
  return time.split(':').reduce((acc, time) => (60 * acc) + +time);
}

export const convertSecondsToHHMMss = (totalSeconds) => {
  const sec_num = parseInt(totalSeconds, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  return `${hours}:${minutes}:${seconds}`;
}


export const percent = (current, total) => {
  return (current / total) * 100
}
