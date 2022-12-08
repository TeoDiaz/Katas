function getGiftsToRefill(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) == 1
  );
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

const gifts = getGiftsToRefill(a1, a2, a3);
console.log(gifts)

// Crea una función getGiftsToRefill que reciba tres Array como parámetros.
// La función debe devolver un Array con los regalos que hay que reponer.
// Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
// Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
// Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.

// https://adventjs.dev/es/challenges/2022/7
