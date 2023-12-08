function manufacture(gifts, materials) {
  let validGifts = [];

  for (let i = 0; i < gifts.length; i++) {
    let gift = gifts[i];
    let giftLetters = gift.split("");

    let isValid = true;

    for (let j = 0; j < giftLetters.length; j++) {
      let letter = giftLetters[j];

      if (materials.includes(letter)) {
        console.log(letter);
      } else {
        isValid = false;
      }
    }

    if (isValid) {
      validGifts.push(gift);
    }
  }

  return validGifts;
}

// TESTS
const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

manufacture(gifts, materials); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

/*const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []*/
