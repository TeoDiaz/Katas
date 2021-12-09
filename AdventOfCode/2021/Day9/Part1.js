const fs = require("fs");

const lines = fs.readFileSync("day9.txt", { encoding: "utf-8" }).split("\n");

let arr = [];

lines.forEach((line) => {
  arr.push(line.split(""));
});

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
        locations.push(loc);
      }
    }
  }
}

lowPoints()

console.log(locations);
let sum = 0;

locations.map((x) => {
  sum += parseInt(x) + 1;
});

console.log(sum);
