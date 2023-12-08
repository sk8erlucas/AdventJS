function decode(message) {
  let stack = [""];
  for (let char of message) {
    if (char === "(") {
      stack.push("");
    } else if (char === ")") {
      let top = stack.pop().split("").reverse().join("");
      stack[stack.length - 1] += top;
    } else {
      stack[stack.length - 1] += char;
    }
  }
  return stack[0];
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
