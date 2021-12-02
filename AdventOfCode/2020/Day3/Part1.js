function check(input) {
  let trees = 0;

  let map = input.split("\n");
  let pos = 3;

  for (let i = 1; i < map.length; i++) {
    let string_repeated = map[i].repeat(1000);

    if (string_repeated[pos] == "#") {
      trees++;
    }

    pos += 3;
  }

  return trees;
}

// Refactor

function check(input) {
  let trees = 0;

  let map = input.split("\n");
  let pos = 3;

  for (let i = 1; i < map.length; i++) {
    let last_digit = pos % map[i].length;

    if (map[i][last_digit] == "#") {
      trees++;
    }

    pos += 3;
  }

  return trees;
}
