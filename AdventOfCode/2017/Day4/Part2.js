const fs = require("fs");

const lines = fs
  .readFileSync("day4.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let sum = 0;
lines.forEach((line) => {
  line = line.split(" ");
  let sorted_words = line.map((word) => {
    let s = word.split("");
    s.sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    });

    return s.join("");
  });
  let uniq = [...new Set(sorted_words)];
  if (uniq.length == line.length) sum++;
});

console.log(sum);
