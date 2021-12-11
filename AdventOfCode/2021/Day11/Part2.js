const fs = require("fs");

const lines = fs.readFileSync("day11.txt", { encoding: "utf-8" }).split("\n");

let matrix = new Array();

lines.forEach((x) => {
  matrix.push(x.split("").map((x) => parseInt(x)));
});

function getAdjacentLocs(x, y) {
  let left = matrix[x][y - 1] == undefined ? null : [x, y - 1];
  let right = matrix[x][y + 1] == undefined ? null : [x, y + 1];
  let up = matrix[x - 1] == undefined ? null : [x - 1, y];
  let down = matrix[x + 1] == undefined ? null : [x + 1, y];
  let rightDUp = matrix[x - 1] == undefined ? null : [x - 1, y + 1];
  let leftDUp = matrix[x - 1] == undefined ? null : [x - 1, y - 1];
  let rightDDown = matrix[x + 1] == undefined ? null : [x + 1, y + 1];
  let leftDDown = matrix[x + 1] == undefined ? null : [x + 1, y - 1];

  return [left, right, up, down, rightDUp, leftDUp, rightDDown, leftDDown];
}

let flashes = new Set();
let flashesCount = 0;

function addOneAdjacents(x, y) {
  if (matrix[x][y] >= 9) {
    flashes.add(`${x},${y}`);
    matrix[x][y] = 0;
    flashesCount++;

    getAdjacentLocs(x, y)
      .filter((loc) => loc)
      .forEach(([l, j]) => {
        if (!flashes.has(`${l},${j}`) && matrix[l][j] != undefined) {
          matrix[l][j] += 1;
          if (matrix[l][j] > 9) {
            flashes.add(`${l},${j}`);
            addOneAdjacents(l, j);
          }
        }
      });
  } else if (!flashes.has(`${x},${y}`)) {
    matrix[x][y] += 1;
  }
}
let steps = 0;
while (steps < 500) {
  flashes = new Set();
  steps++;
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      addOneAdjacents(x, y);
    }
  }
  
  let zeroMatrix = 0;

  for (let z = 0; z < matrix.length; z++) {
    let matrixFiltered = matrix[z].filter((x) => x != 0);

    if (matrixFiltered.length < 1) {
      zeroMatrix++;
    }
  }

  if (zeroMatrix == matrix.length) {
    console.log(steps);
    break;
  }
}
