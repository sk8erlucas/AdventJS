function calculateTime(deliveries) {
  let totalTime = 0;
  for (let i = 0; i < deliveries.length; i++) {
    const delivery = deliveries[i];
    const [hours, minutes, seconds] = delivery.split(":");
    totalTime +=
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  }

  let restar = null;

  if (totalTime > 25200) {
    totalTime -= 25200;
    restar = false;
  } else if (totalTime < 25200) {
    totalTime = 25200 - totalTime;
    restar = true;
  } else {
    return "00:00:00";
  }

  let hours = Math.floor(totalTime / 3600);
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = Math.floor((totalTime % 3600) / 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = totalTime % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (restar) {
    return `-${hours}:${minutes}:${seconds}`;
  } else {
    return `${hours}:${minutes}:${seconds}`;
  }
}

const result1 = calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
console.log(result1);
// '-02:20:00'

const result2 = calculateTime(["7:00:00"]);
console.log(result2);
// '0:00:00'

const result3 = calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
console.log(result3);
// '00:30:00'
