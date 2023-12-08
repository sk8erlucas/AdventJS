function maxDistance(movements) {
  movements = movements.split("");

  let distance = 0;
  for (let i = 0; i < movements.length; i++) {
    if (movements[i] == ">") {
      distance++;
    } else if (movements[i] == "<") {
      distance--;
    }
  }

  for (let i = 0; i < movements.length; i++) {
    if (distance >= 0) {
      if (movements[i] == "*") movements[i] = ">";
    } else {
      if (movements[i] == "*") movements[i] = "<";
    }
  }

  distance = 0;
  for (let i = 0; i < movements.length; i++) {
    if (movements[i] == ">") {
      distance++;
    } else if (movements[i] == "<") {
      distance--;
    }
  }

  return Math.abs(distance);
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
