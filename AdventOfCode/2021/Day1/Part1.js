const fs = require("fs");

const lines = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map(x => parseInt(x));

let increase = 0;

for (let i = 1; i < lines.length; i++) {
  if (lines[i - 1] < lines[i]) increase++;
}

console.log(increase);
