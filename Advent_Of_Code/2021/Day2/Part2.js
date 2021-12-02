const fs = require("fs");

const lines = fs
  .readFileSync("day2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let horizontal = 0;
let depth = 0;
let aim = 0

lines.forEach((line) => {
  const { groups } = /^(?<direction>.*) (?<num>.*)$/.exec(line);

  switch (groups.direction) {
    case "forward":
      horizontal += parseInt(groups.num);
      depth = depth + (aim * parseInt(groups.num));
      break;
    case "down":
      aim += parseInt(groups.num);
      break;
    case "up":
      aim -= parseInt(groups.num);
      break;
    default:
      break;
  }
});

console.log(horizontal * depth);
