function check(input) {
  let map = input
    .split("\n")
    .sort((a, b) => a - b)
    .map((x) => parseInt(x));

  map.unshift(0);
  map.push(map[map.length - 1] + 3);

  let obj = { 1: 0, 2: 0, 3: 0 };

  for (let i = 0; i < map.length; i++) {
    let val = map[i];
    let rest = map[i + 1] - val;

    if (rest <= 3) {
      obj[rest]++;
    }
  }
  obj[3]++;
  let total = 1;

  Object.values(obj).map((ele) => {
    if (ele != 0 && ele != 2) {
      console.log(ele);
      total = total * ele;
    }
  });
  console.log(total);
}
