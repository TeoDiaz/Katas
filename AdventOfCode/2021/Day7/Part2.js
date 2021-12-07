console.time("Part2");

const fs = require("fs");

const input = fs
  .readFileSync("day7.txt", { encoding: "utf-8" })
  .split(",")
  .map((x) => parseInt(x))
  .sort((a, b) => a - b);

let max = Math.max(...input);
let aligns = [];

console.time("Brute force");
for (let i = 1; i < max; i++) {
  aligns.push(
    input.reduce((count, crab) => count + fuelCost(Math.abs(crab - i)), 0)
  );
}
console.timeEnd("Brute force"); // 1460.150ms Not bad!

function fuelCost(dist) {
  let cost = 0;

  for (let i = 0; i <= dist; i++) {
    cost += i;
  }

  return cost;
}

console.time("Gauss");
for (let i = 1; i < max; i++) {
  aligns.push(
    input.reduce(
      (count, crab) => count + fuelCostByGauss(Math.abs(crab - i)),
      0
    )
  );
}
console.timeEnd("Gauss"); // 27.784ms Better!

function fuelCostByGauss(dist) {
  return (dist * (dist + 1)) / 2;
}

console.log(Math.min(...aligns));
