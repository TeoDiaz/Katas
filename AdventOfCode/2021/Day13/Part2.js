const fs = require("fs");

const lines = fs
  .readFileSync("day13.txt")
  .toString()
  .split("\n")
  .filter((x) => x);

let dots = [];
let folds = [];

lines.forEach((x) => {
  if (x.includes("fold")) {
    folds.push(x);
  } else {
    dots.push(x);
  }
});
// 895 - 1311
let matrix = new Array(895).fill(".").map(() => new Array(1311).fill("."));

dots.forEach((dot) => {
  let [x, y] = dot.split(",");
  matrix[y][x] = "#";
});

folds.forEach((fold) => {
  let [axis, loc] = fold.split(" ")[2].split("=");
  if (axis == "x") {
    for (let z = 0; z < matrix.length; z++) {
      matrix[z][loc] = "|";
    }
    let restIndex = 0;

    for (let x = 0; x < matrix.length; x++) {
      let rest = matrix[x].splice(loc, matrix[x].length - 1);
      rest.shift();
      restIndex = 0;

      for (let y = matrix[0].length - 1; y >= 0; y--) {
        if (matrix[x][y] == ".") {
          matrix[x][y] = rest[restIndex];
        }
        restIndex++;
      }
      restIndex = 0;
    }
  } else {
    for (let z = 0; z < matrix[0].length; z++) {
      matrix[loc][z] = "-";
    }

    let rest = matrix.splice(loc, matrix.length - 1);
    rest.shift();

    let matrixX = 0;
    let matrixY = 0;

    for (let y = rest.length - 1; y > 0; y--) {
      for (let z = 0; z < rest[0].length; z++) {
        if (matrix[matrixY] != undefined) {
          if (matrix[matrixY][matrixX] == ".") {
            matrix[matrixY][matrixX] = rest[y][z];
          }
        }

        matrixX++;
      }
      matrixY++;
      matrixX = 0;
    }
  }
});

matrix.forEach((x) => console.log(x.join("")));
