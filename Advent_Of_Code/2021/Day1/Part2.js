const fs = require("fs");

const lines = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

let increase = 0;
let depth = 3;

for (let i = depth; i < lines.length; i++) {
  if (lines[i - depth] < lines[i]) increase++;
}

console.log(increase);
