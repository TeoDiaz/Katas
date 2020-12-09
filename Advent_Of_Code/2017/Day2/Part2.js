const check = (input) => {
  let map = input.split("\n");

  let sum = 0;

  map.forEach(function (item) {
    item = item.split("\t");
    item = item.sort((a, b) => b - a);

    for (let i = 0; i < item.length; i++) {
      for (let x = 1; x < item.length; x++) {
        let result = item[i] / item[x];

        if (Number.isInteger(result)) {
          sum += result;
        }
      }
      item.shift();
      i--;
    }
  });

  return sum;
};
