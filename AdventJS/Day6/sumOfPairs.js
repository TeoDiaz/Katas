function sumPairs(numbers, result) {
  let nums = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let x = 1; x < numbers.length; x++) {
      if (numbers[i] + numbers[x] == result && i != x) {
        nums.push(numbers[i]);
        nums.push(numbers[x]);
      }
    }
  }

  return nums.length > 0 ? nums.splice(0, 2) : null;
}

// Examples

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
