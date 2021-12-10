const fs = require("fs");

const lines = fs.readFileSync("day10.txt", { encoding: "utf-8" }).split("\n");

let open = ["(", "[", "{", "<"];
let close = [")", "]", "}", ">"];

let points = { ")": 1, "]": 2, "}": 3, ">": 4 };
let scores = [];

lines.forEach((line) => {
  let stack = [];
  let incomplete = true;

  for (let i = 0; i < line.length; i++) {
    if (open.includes(line[i])) {
      stack.push(line[i]);
    } else {
      if (close.indexOf(line[i]) == open.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        incomplete = false;
        break;
      }
    }
  }

  if (incomplete) {
    let score = 0;
    for (let i = stack.length - 1; i >= 0; i--) {
      score = score * 5 + points[close[open.indexOf(stack[i])]];
    }
    scores.push(score);
  }
});

let middleScore = scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)];

console.log(middleScore);
