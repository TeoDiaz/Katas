const check = (input) => {
  let map = input.split("");
  let count = 0;

  map.forEach(function (item, index) {
    // use the modulus to iterate the array in a circular way
    if (item == map[(index + 1) % map.length]) {
      count += parseInt(item);
    }
  });

  return count;
};
