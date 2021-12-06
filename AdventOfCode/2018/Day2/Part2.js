const fs = require("fs");

const lines = fs
  .readFileSync("day2.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

function findDiff(str1, str2) {
  let diff = "";
  str2.split("").forEach(function (val, i) {
    if (val != str1.charAt(i)) diff += val;
  });
  return diff;
}

let str = "";

for (let i = 0; i < lines.length; i++) {
  for (let y = 1; y < lines.length - 1; y++) {
    let diff = findDiff(lines[i], lines[y]);
    if (diff.length == 1) {
      str = lines[y].replace(diff, "");
      break;
    }
  }
}

console.log(str);
