// https://adventjs.dev/challenges/01

function contarOvejas(ovejas) {
  let ovejasFiltradas = [];

  for (const [key, value] of Object.entries(ovejas)) {
    let regex = /^(?=.*n)(?=.*a).+/;
    let name = value.name.toLowerCase();
    if (name.match(regex) && value.color == "rojo") {
      ovejasFiltradas.push(value);
    }
  }

  return ovejasFiltradas;
}

// Example

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
