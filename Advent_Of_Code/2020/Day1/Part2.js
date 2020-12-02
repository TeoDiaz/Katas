function sum(input) {
  let map = input.split("\n");

  for (let i = 0; i < map.length - 1; i++) {
    for (let x = 1; x < map.length; x++) {
      for (let y = 2; y < map.length; y++) {
        let sum = +map[i] + +map[x] + +map[y];
        if (sum == 2020) {
          return map[i] * map[x] * map[y];
        }
      }
    }
  }
}

// 131248694