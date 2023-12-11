/*
 * No anda falla un test y nose que es
 */
function adjustLights(lights) {
  // Comprobamos si las luces ya están alternadas
  function checkLightsAlternated(lights) {
    for (let i = 0; i < lights.length; i++) {
      if (i === lights.length - 1) {
        continue;
      }

      if (lights[i] === lights[i + 1]) {
        return false;
      }
    }

    return true;
  }

  let changes = 0;
  let lightsAlternated = false;

  while (!lightsAlternated) {
    // Si estan alternadas return y ya esta
    if (checkLightsAlternated(lights)) {
      lightsAlternated = true;
      return changes;
    }

    // Si no estan alternadas, cambiamos las luces
    for (let i = 0; i < lights.length; i++) {
      // Si la luz actual es igual a la anterior, cambiamos la luz actual
      if (lights[i] === lights[i - 1]) {
        if (lights[i] === "") {
          lights[i] = "🟢";
        } else {
          lights[i] = "";
        }
        changes++;
      }
    }
  }
}

const result1 = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
console.log(result1);
// -> 1 (cambias la cuarta luz a 🔴)

const result2 = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
console.log(result2);
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

const result3 = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
console.log(result3);
// -> 0 (ya están alternadas)

const result4 = adjustLights(["🔴", "🔴", "🔴"]);
console.log(result4);
// -> 1 (cambias la segunda luz a 🟢)
