const fs = require("fs");

const input = fs
  .readFileSync("day6.txt", { encoding: "utf-8" })
  .split("\t")
  .join(" ");


let results = [input];
let runs = 0;
let differenceBetweenDuplicated = 0

for (let i = 0; i < 1000000; i++) {
  let splitted = results[i].split(" ").map((x) => parseInt(x));

  let max = Math.max(...splitted);
  let index = splitted.indexOf(max);

  splitted[index] = 0;

  while (max > 0) {
    index++;

    if (index == splitted.length) {
      index = 0;
    }

    splitted[index] = splitted[index] + 1;
    max--;
  }
  runs++;

  let joinedNum = splitted.join(" ");

  if (results.includes(joinedNum)) {
    differenceBetweenDuplicated = runs - results.indexOf(joinedNum)
    break;
  }

  results.push(joinedNum);
}

console.log(runs, differenceBetweenDuplicated);
