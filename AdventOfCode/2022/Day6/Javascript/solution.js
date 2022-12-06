const fs = require("fs");

const line = fs
  .readFileSync("day6.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim(); // Remove starting/ending whitespace

function solution(length) {
  for (var i = length; i < line.length; i++) {
    chunks = new Set(line.substring(i - length, i));
    if(chunks.size == length) return i
  }
}

console.log("Part 1 -> ", solution(4))
console.log("Part 2 -> ", solution(14))
