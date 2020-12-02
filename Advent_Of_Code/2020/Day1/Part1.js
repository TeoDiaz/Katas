function sum(input) {
  let map = input.split("\n");

  for (let i = 0; i < map.length - 1; i++) {
    for (let x = 1; x < map.length; x++) {
      let sum = +map[i] + +map[x];

      if (sum == 2020) {
        return map[i] * map[x];
      }
    }
  }
}

// 997899