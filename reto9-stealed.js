// No lo podia pasar asi que lo consulte en discord y me pasaron este codigo

function adjustLights(lights) {
  let a = 0,
    b = 0;
  const length = lights.length;
  for (let i = 0, n = 0; i < length; i++) {
    n = (i % 2) - +(lights[i] === "🟢");
    a += Math.abs(n);
  }
  b = length - a;
  return Math.min(a, b);
}
