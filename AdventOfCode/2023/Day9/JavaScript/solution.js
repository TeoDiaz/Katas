const fs = require("fs");

const lines = fs
  .readFileSync("day9.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map((i) => {
    return i.split(" ").map((x) => parseInt(x));
  });

function findNext(line) {
  let nexts = [line];
  let current = line;

  while (1) {
    let next = [];

    for (let i = 0; i < current.length - 1; i++) {
      next.push(current[i + 1] - current[i]);
    }

    nexts.push(next);

    if (next.filter((i) => i !== 0).length !== 0) {
      current = next;
      next = [];
    } else {
      break;
    }
  }

  return nexts;
}

function part1(line) {
  let list = findNext(line).reverse();

  for (let i = 0; i < list.length - 1; i++) {
    let sum = list[i][list[i].length - 1] + list[i + 1][list[i + 1].length - 1];
    list[i + 1].push(sum);
  }

  return list.pop().pop();
}

let res1 = lines.reduce((prev, curr) => (prev += part1(curr)), 0);
console.log(res1);

function part2(line) {
  let list = findNext(line).reverse();

  for (let i = 0; i < list.length - 1; i++) {
    let sum = list[i + 1][0] - list[i][0];
    list[i + 1].unshift(sum);
  }

  return list.pop()[0];
}

let res2 = lines.reduce((prev, curr) => (prev += part2(curr)), 0);
console.log(res2);