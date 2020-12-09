const check = (input) => {
  let map = input.split("\n").map((x) => parseInt(x));
  let invalidNum = 466456641;

  for (let i = 2; i < map.length; i++) {
    for (let y = 0; y < map.length; y++) {
      let sum = 0;
      for (let x = 0; x < i; x++) {
        sum += map[y + x];
      }

      if (sum == invalidNum) {
        let list = map.slice(y, y + i);
        let max = Math.max(...list);
        let min = Math.min(...list);
        return max + min;
      }
    }
  }
};
