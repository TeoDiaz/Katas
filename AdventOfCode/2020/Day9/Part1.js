const check = (input) => {
  let map = input.split("\n").map((x) => parseInt(x));
  let preamble = 25;
  let list = map.slice(0, preamble);

  const isValidNum = (num) => {
    for (let i = 0; i < list.length; i++) {
      for (let x = 1; x < list.length; x++) {
        if (list[i] + list[x] == num) {
          return true;
        }
      }
    }
  };

  for (let y = preamble; y < map.length; y++) {
    if (isValidNum(map[y])) {
      list.push(map[y]);
      list.shift();
    } else {
      return map[y];
    }
  }
};
