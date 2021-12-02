const fs = require("fs");

const lines = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

let increase = 0;
let depth = 3;

/* 
If numbers are 1 2 3 4 and you compare the first three 1 2 3 and the second three 2 3 4, the 2 3 are irrelevant since they are in both sums. So you only need to compare the first and last number across 1 2 3 4

Source: https://www.reddit.com/r/adventofcode/comments/r66vow/2021_day_1_solutions/hms9f3r/?utm_source=reddit&utm_medium=web2x&context=3
*/

for (let i = depth; i < lines.length; i++) {
  if (lines[i - depth] < lines[i]) increase++;
}

console.log(increase);
