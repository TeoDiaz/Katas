const check = (input) => {
  let map = input.split("");
  let count = 0;

  // same circular modulus way but this time we need to get index + the halfway of the map
  map.forEach(function (item, index) {
    if (item == map[(index + map.length / 2) % map.length]) {
      count += parseInt(item);
    }
  });

  return count;
};
