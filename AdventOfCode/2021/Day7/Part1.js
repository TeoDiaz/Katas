const fs = require("fs");

const input = fs
  .readFileSync("day7.txt", { encoding: "utf-8" })
  .split(",")
  .map((x) => parseInt(x))
  .sort((a, b) => a - b);

let max = Math.max(...input);
let aligns = [];

for (let i = 0; i < max; i++) {
  aligns.push(input.reduce((count, crab) => count + Math.abs(crab - i), 0));
}

console.log(Math.min(...aligns));
