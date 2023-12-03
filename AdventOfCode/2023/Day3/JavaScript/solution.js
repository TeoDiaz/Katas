const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((line) => line.split("")); // Split each line on character

const isNumber = (x, y) => lines[x][y].match(/[0-9]/);
const notNumberOrEnd = (x, y, checkNumber) =>
  (y == lines[x].length - 1 || !isNumber(x, y)) && checkNumber;

function part1() {
  let sum = 0;

  for (let x = 0; x < lines.length; x++) {
    let currentNumber = "",
      checkNumber = false,
      nearSymbol = false;

    for (let y = 0; y < lines[x].length; y++) {
      if (isNumber(x, y) && !checkNumber) {
        checkNumber = true;
        currentNumber = "";
        nearSymbol = false;
      }

      if (notNumberOrEnd(x, y, checkNumber)) {
        if (nearSymbol) {
          sum += parseInt(currentNumber + (isNumber(x, y) ? lines[x][y] : ""));
        }

        checkNumber = false;
      }

      if (checkNumber) {
        currentNumber += lines[x][y];

        for (let j = -1; j <= 1; j++) {
          for (let i = -1; i <= 1; i++) {
            if (i == 0 && j == 0) continue;
            if (
              x + j < 0 ||
              x + j >= lines.length ||
              y + i < 0 ||
              y + i >= lines[x].length
            )
              continue;

            if (!lines[x + j][y + i].match(/[0-9.]/)) nearSymbol = true;
          }
        }
      }
    }
  }

  return sum;
}

console.log(part1());

function part2() {
  let gearNumbers = {};

  for (let x = 0; x < lines.length; x++) {
    let currentNumber = "",
      checkNumber = false,
      gearLocation = null;

    for (let y = 0; y < lines[x].length; y++) {
      if (isNumber(x, y) && !checkNumber) {
        checkNumber = true;
        currentNumber = "";
        gearLocation = null;
      }

      if (notNumberOrEnd(x, y, checkNumber)) {
        if (gearLocation) {
          gearNumbers[gearLocation].push(
            parseInt(currentNumber + (isNumber(x, y) ? lines[x][y] : ""))
          );
        }

        checkNumber = false;
      }

      if (checkNumber) {
        currentNumber += lines[x][y];

        for (let j = -1; j <= 1; j++) {
          for (let i = -1; i <= 1; i++) {
            if (i == 0 && j == 0) continue;
            if (
              x + j < 0 ||
              x + j >= lines.length ||
              y + i < 0 ||
              y + i >= lines[x].length
            )
              continue;

            const char = lines[x + j][y + i];
            if (char == "*") {
              gearLocation = `${y + i},${x + j}`;
              if (gearNumbers[gearLocation] == null)
                gearNumbers[gearLocation] = [];
            }
          }
        }
      }
    }
  }

  return Object.values(gearNumbers).reduce((sum, array) => {
    if (array.length == 2) sum += array[0] * array[1];
    return sum;
  }, 0);
}

console.log(part2());
