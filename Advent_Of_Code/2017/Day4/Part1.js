const fs = require("fs");

const lines = fs
  .readFileSync("day4.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let sum = 0;
lines.forEach((line) => {
  line = line.split(" ");
  let uniq = [...new Set(line)];
  if (uniq.length == line.length) sum++;
});

console.log(sum);
