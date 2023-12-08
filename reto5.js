function cyberReindeer(road, time) {
  const a = [];
  let r = road.replace("S", ".");

  let santaPos = -1;
  for (let i = 0; i < time; i++) {
    if (i == 5) r = r.replaceAll("|", "*");
    if (r[santaPos + 1] != "|") santaPos++;
    const newR = [...r];
    newR[santaPos] = "S";
    a.push(newR.join(""));
  }

  return a;
}

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

console.log(result);
