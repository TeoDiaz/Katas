const fs = require("fs");

const lines = fs.readFileSync("day5.txt", { encoding: "utf-8" }).split("\n");

let matrix = new Array(1000).fill(".").map(() => new Array(1000).fill("."));

lines.forEach((z) => {
  const { groups } =
    /(?<fromX>\d+),(?<fromY>\d+) -> (?<toX>\d+),(?<toY>\d+)/.exec(z);

  let fromY = parseInt(groups.fromY);
  let fromX = parseInt(groups.fromX);
  let toY = parseInt(groups.toY);
  let toX = parseInt(groups.toX);

  let xPos = [fromX];
  let yPos = [fromY];

  while (fromX != toX) {
    fromX < toX ? xPos.push(fromX + 1) : xPos.push(fromX - 1);
    fromX < toX ? fromX++ : fromX--;
  }

  while (fromY != toY) {
    fromY < toY ? yPos.push(fromY + 1) : yPos.push(fromY - 1);
    fromY < toY ? fromY++ : fromY--;
  }

  if (groups.fromX == groups.toX || groups.fromY == groups.toY) {
    for (let x = 0; x < xPos.length; x++) {
      for (let y = 0; y < yPos.length; y++) {
        matrix[yPos[y]][xPos[x]] >= 1
          ? matrix[yPos[y]][xPos[x]]++
          : (matrix[yPos[y]][xPos[x]] = 1);
      }
    }
  } else {
    for (let y = 0; y < xPos.length; y++) {
      matrix[yPos[y]][xPos[y]] >= 1
        ? matrix[yPos[y]][xPos[y]]++
        : (matrix[yPos[y]][xPos[y]] = 1);
    }
  }
});

let count = 0;

for (let x = 0; x < matrix.length; x++) {
  for (let y = 0; y < matrix.length; y++) {
    matrix[x][y] > 1 ? count++ : count;
  }
}

console.log(count);
