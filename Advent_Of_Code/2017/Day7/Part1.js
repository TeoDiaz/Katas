const fs = require("fs");

const lines = fs
  .readFileSync("day7.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let allNames = []
let aboveNames = [];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].split(" -> ");

  let name = line[0].split(" ")[0];
  allNames.push(name)
  
  if (line.length > 1) {
    let above = line[1].split(", ");

    above.forEach((x) => aboveNames.push(x));
  }
}

let bottom = allNames.filter(x => !aboveNames.includes(x))
console.log(bottom)
