const fs = require("fs");

const lines = fs
  .readFileSync("day4.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Part 1

const fields = lines.map((ele) => {
  const { groups } = /(?<from1>\d+)-(?<to1>\d+),(?<from2>\d+)-(?<to2>\d+)/.exec(
    ele
  );

  groups.from1 = parseInt(groups.from1);
  groups.to1 = parseInt(groups.to1);
  groups.from2 = parseInt(groups.from2);
  groups.to2 = parseInt(groups.to2);

  return groups;
});

function checkPart1(from1, to1, from2, to2) {
  return (from1 >= from2 && to1 <= to2) || (from2 >= from1 && to2 <= to1);
}

function part1() {
  let count = 0;

  fields.forEach((field) => {
    let { from1, to1, from2, to2 } = field;

    if (checkPart1(from1, to1, from2, to2)) count++;
  });

  return count;
}

console.log("Part1 -> " + part1());

// Part 2

function checkPart2(from1, to1, from2, to2) {
  return from1 <= to2 && from2 <= to1;
}

function part2() {
  let count = 0;

  fields.forEach((field) => {
    let { from1, to1, from2, to2 } = field;

    if (checkPart2(from1, to1, from2, to2)) count++;
  });

  return count;
}

console.log("Part2 -> " + part2());
