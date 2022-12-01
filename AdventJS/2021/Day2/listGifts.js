// https://adventjs.dev/challenges/02

function listGifts(letter) {
  let obj = {};
  letter = letter.split(" ").filter((x) => x);
  letter.forEach((x) => {
    if (!x.includes("_")) {
      obj[x] = obj[x] + 1 || 1;
    }
  });

  return obj;
}

// Example 

const carta = "bici coche balón _playstation bici coche peluche";

const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
