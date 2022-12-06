const fs = require("fs");

let lines = fs
  .readFileSync("day5.txt", { encoding: "utf-8" }) // read day??.txt content
  .split("\n"); // Split on newline

let moves = [];
for (let i = 10; i < lines.length; i++) {
  const move = lines[i];
  const { groups } = /move (?<amount>\d+) from (?<from>\d+) to (?<to>\d+)/.exec(
    move
  );

  moves.push({
    amount: parseInt(groups.amount),
    from: parseInt(groups.from),
    to: parseInt(groups.to),
  });
}

// [S]                 [T] [Q]
// [L]             [B] [M] [P]     [T]
// [F]     [S]     [Z] [N] [S]     [R]
// [Z] [R] [N]     [R] [D] [F]     [V]
// [D] [Z] [H] [J] [W] [G] [W]     [G]
// [B] [M] [C] [F] [H] [Z] [N] [R] [L]
// [R] [B] [L] [C] [G] [J] [L] [Z] [C]
// [H] [T] [Z] [S] [P] [V] [G] [M] [M]
//  1   2   3   4   5   6   7   8   9

let stacks = {
  1: "HRBDZFLS",
  2: "TBMZR",
  3: "ZLCHNS",
  4: "SCFJ",
  5: "PGHWRZB",
  6: "VJZGDNMT",
  7: "GLNWFSPQ",
  8: "MNR",
  9: "MCLGVRT",
};

function part1() {
  moves.forEach((ele) => {
    let from = ele.from;
    let to = ele.to;
    let movesCount = ele.amount;
    while (movesCount > 0) {
      const stackFrom = stacks[from];
      const crate = stackFrom.slice(-1);

      stacks[from] = stackFrom.slice(0, -1);
      stacks[to] = stacks[to] + crate;
      movesCount--;
    }
  });

  return Object.values(stacks)
    .map((stack) => stack.slice(-1))
    .join("");
}

console.log("Part 1 -> ", part1());

stacks = {
  1: "HRBDZFLS",
  2: "TBMZR",
  3: "ZLCHNS",
  4: "SCFJ",
  5: "PGHWRZB",
  6: "VJZGDNMT",
  7: "GLNWFSPQ",
  8: "MNR",
  9: "MCLGVRT",
};

function part2() {
  moves.forEach((ele) => {
    let from = ele.from;
    let to = ele.to;
    let movesCount = ele.amount;

    const stackFrom = stacks[from];
    const crate = stackFrom.slice(-movesCount);

    stacks[from] = stackFrom.slice(0, -movesCount);
    stacks[to] = stacks[to] + crate;
  });

  return Object.values(stacks)
    .map((stack) => stack.slice(-1))
    .join("");
}

console.log("Part 2 -> ", part2());
