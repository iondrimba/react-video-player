const convertFormatedTimeToSeconds = (time) => {
  return time.split(':').reduce((acc, time) => (60 * acc) + +time);
}
export default convertFormatedTimeToSeconds;
