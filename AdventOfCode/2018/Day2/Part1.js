const fs = require("fs");

const lines = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let two = 0;
let three = 0;

lines.forEach((x) => {
  let obj = {};
  x.split("").forEach((char) => {
    obj[char] = obj[char] + 1 || 1;
  });

  if (Object.values(obj).indexOf(3) > -1) {
    three++;
  }
  if (Object.values(obj).indexOf(2) > -1) {
    two++;
  }
});

console.log(two * three);
