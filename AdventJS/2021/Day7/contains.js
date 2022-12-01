function contains(store, product) {
  for (const [key, value] of Object.entries(store)) {
    if (value == product) return true;
    if (isObject(value) && contains(value, product)) return true;
  }

  return false;
}

function isObject(value) {
  return value instanceof Object;
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, "camiseta")); // true


input = "  balon bici     aksdo "

console.log(input.split(" ").filter(x => x));