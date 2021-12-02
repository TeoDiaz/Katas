function check(input, right, down) {
  let trees = 0;

  let map = input.split("\n");
  let pos = right;

  for (let i = down; i < map.length; i += down) {
    let last_digit = pos % map[i].length;

    if (map[i][last_digit] == "#") {
      trees++;
    }

    pos += right;
  }

  return trees;
}

function multiply(input) {
  first = check(input, 1, 1);
  second = check(input, 3, 1);
  third = check(input, 5, 1);
  fourth = check(input, 7, 1);
  fith = check(input, 1, 2);

  return first * second * third * fourth * fith;
}

// 1206576000