function check(input) {
  let map = input
    .split("\n")
    .sort((a, b) => a - b)
    .map((x) => parseInt(x));

  map.unshift(0);
  map.push(map[map.length - 1] + 3);

  let ar = [];

  for (let i = 0; i < map.length - 1; i++) {
    let val = map[i];
    let rest = map[i + 1] - val;

    ar.push(rest);
  }

  console.log(ar);
  let combinations = 1;
  let count = 0;
  ar.forEach((ele) => {
    if (ele == 1) {
      count++;
    }

    if (ele != 1) {
      if (count == 2) {
        combinations *= 2;
      } else if (count == 3) {
        combinations *= 4;
      } else if (count == 4) {
        combinations *= 7;
      }
      count = 0;
    }
  });

  console.log(combinations);
}
