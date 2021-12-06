const fs = require("fs");

const lines = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

let sumList = [];
let sum = 0;

let run = true;

while (run) {
  for (let i = 0; i < lines.length; i++) {
    sum = sum + lines[i];

    if (sumList.includes(sum)) {
      console.log(sum);
      run = false;
      break;
    }

    sumList.push(sum);
    if (i == lines.length) i = 0;
  }
}

// 219
