const fs = require("fs");

const lines = fs.readFileSync("day10.txt", { encoding: "utf-8" }).split("\n");

let open = ["(", "[", "{", "<"];
let close = [")", "]", "}", ">"];

let points = { ")": 3, "]": 57, "}": 1197, ">": 25137 };

let score = 0;
lines.forEach((line) => {
  let stack = [];

  for (let i = 0; i < line.length; i++) {
    if (open.includes(line[i])) {
      stack.push(line[i]);
    } else {
      if (close.indexOf(line[i]) == open.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        score += points[line[i]];
        break;
      }
    }
  }
});

console.log(score);
