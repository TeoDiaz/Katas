const fs = require("fs");

const lines = fs
  .readFileSync("day2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

  let horizontal = 0
  let depth = 0

  lines.forEach(line => {
    const { groups } = /^(?<direction>.*) (?<num>.*)$/.exec(line);
    
    switch (groups.direction) {
      case "forward":
        horizontal += parseInt(groups.num);
        break;
      case "down":
        depth += parseInt(groups.num)
        break;
      case "up":
        depth -= parseInt(groups.num)
        break;
      default:
        break;
    }
  });

  console.log(horizontal * depth);