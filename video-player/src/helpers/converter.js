export const convertFormatedTimeToSeconds = (time) => {
  return time.split(':').reduce((acc, time) => (60 * acc) + +time);
}

export const percent = (current, total) => {
  return (current / total) * 100
}
