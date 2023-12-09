function organizeGifts(gifts) {
  // Separar el string en arrays que corte en donde encuentre una letra
  let arrayGifts = gifts.split(/([a-z])/);
  // Esto lo separa asi, por ejemplo: ['76', 'a', '11', 'b'], debo juntar cada 2 elementos y unirlo a otro array
  let arrayGiftsFinal = [];
  for (let i = 0; i < arrayGifts.length; i++) {
    if (i % 2 === 0) {
      arrayGiftsFinal.push(arrayGifts[i] + arrayGifts[i + 1]);
    }
  }
  // Esto lo separa asi, por ejemplo: ['76a', '11b'], debo juntar cada 2 elementos y unirlo a otro array, genera un undefined a lo ultimo que hay que eliminar
  arrayGiftsFinal.pop();

  // Esta funcion se ecarga de formatear las cajas usarems mas delante
  function formatBoxes(letter, giftsQ) {
    // Ordenamos los regalos en cajas de 10
    let boxes = Math.floor(giftsQ / 10);
    // Ordenamos las cajas en palets de 5
    let palets = Math.floor(boxes / 5);
    // Cajas que sobran
    boxes = boxes % 5;
    // Regalos sueltos que sobran
    let uniqueGifts = giftsQ % 10;

    // Devolvemos el resultado, por cada pallet [letter]
    let result = "";
    for (let i = 0; i < palets; i++) {
      result += `[${letter}]`;
    }
    // Por cada caja {letter}
    for (let i = 0; i < boxes; i++) {
      result += `{${letter}}`;
    }
    // Por cada regalo (letter)
    if (uniqueGifts > 0) {
      result += "(";
    }
    for (let i = 0; i < uniqueGifts; i++) {
      result += letter;
    }
    if (uniqueGifts > 0) {
      result += ")";
    }

    return result;
  }

  let allTheReturn = "";
  for (let i = 0; i < arrayGiftsFinal.length; i++) {
    // Recorremos el array y separamos el numero de la letra
    let number = parseInt(arrayGiftsFinal[i].match(/\d+/g));
    let letter = arrayGiftsFinal[i].match(/[a-z]/g);

    // Llamamos a la funcion para formatear las cajas
    allTheReturn += formatBoxes(letter, number);
  }

  return allTheReturn;
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'
