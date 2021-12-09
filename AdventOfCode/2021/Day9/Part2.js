const fs = require("fs");
let arr = [];

fs.readFileSync("day9.txt", { encoding: "utf-8" })
  .split("\n")
  .map((line) => arr.push(line.split("").map(Number)));

let locations = [];

function adjacent(x, y) {
  let left = arr[x][y - 1] == undefined ? Infinity : arr[x][y - 1];
  let right = arr[x][y + 1] == undefined ? Infinity : arr[x][y + 1];
  let up = arr[x - 1] == undefined ? Infinity : arr[x - 1][y];
  let down = arr[x + 1] == undefined ? Infinity : arr[x + 1][y];

  return [left, right, up, down];
}

function lowPoints() {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      let loc = arr[x][y];

      let [left, right, up, down] = adjacent(x, y);

      if (loc < left && loc < right && loc < up && loc < down) {
        locations.push([x, y]);
      }
    }
  }
}

lowPoints();

// Part 2

function getAdjacentLocs(x, y) {
  let left = arr[x][y - 1] == undefined ? Infinity : [x, y - 1];
  let right = arr[x][y + 1] == undefined ? Infinity : [x, y + 1];
  let up = arr[x - 1] == undefined ? Infinity : [x - 1, y];
  let down = arr[x + 1] == undefined ? Infinity : [x + 1, y];

  return [left, right, up, down];
}
let basins = [];

locations.forEach((location) => findAdjacents(location));

function findAdjacents(location) {
  let x = location[0];
  let y = location[1];

  const visited = new Set(`${x},${y}`);

  let basin = [arr[x][y]];

  let adjacentLocs = getAdjacentLocs(x, y).filter((x) => x != Infinity);

  while (adjacentLocs.length > 0) {
    const [l, j] = adjacentLocs.pop();

    if (!visited.has(`${l},${j}`) && arr[l][j] > arr[x][y] && arr[l][j] <= 8) {
      visited.add(`${l},${j}`);
      basin.push(arr[l][j]);
      adjacentLocs.push(...getAdjacentLocs(l, j).filter((x) => x != Infinity));
    }
  }

  basins.push(basin.length);
}

basins.sort((a, b) => b - a);
result = basins[0] * basins[1] * basins[2];

console.log(result);
