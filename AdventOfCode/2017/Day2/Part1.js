const check = (input) => {
  let map = input.split("\n");

  let sum = 0;

  map.forEach(function (item) {
    item = item.split("\t");
    item = item.sort((a, b) => a - b);
    sum += item[item.length - 1] - item[0];
  });

  return sum;
};

// Refactor

const check = (input) => {
  let map = input.split("\n");

  let sum = 0;

  map.forEach(function (item) {
    item = item.split("\t");
    sum += Math.max.apply(null, item) - Math.min.apply(null, item);
  });

  return sum;
};
