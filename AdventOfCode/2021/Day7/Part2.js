console.time('Part2')

const fs = require("fs");

const input = fs
  .readFileSync("day7.txt", { encoding: "utf-8" })
  .split(",")
  .map((x) => parseInt(x))
  .sort((a, b) => a - b);

let max = Math.max(...input);
let aligns = [];

for (let i = 1; i < max; i++) {
  aligns.push(
    input.reduce((count, crab) => count + fuelCost(Math.abs(crab - i)), 0)
  );
}

function fuelCost(dist) {
  let cost = 0;

  for (let i = 0; i <= dist; i++) {
    cost += i;
  }

  return cost;
}
console.timeEnd('Part2') // 1474.399ms Not bad! 

console.log(Math.min(...aligns));
