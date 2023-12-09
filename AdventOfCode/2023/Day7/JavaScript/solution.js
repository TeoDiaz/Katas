const fs = require("fs");

const lines = fs
  .readFileSync("day7.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline

function part1() {
  console.log(lines);
}

part1();

function part2() {
  //do something here
}

part2();
