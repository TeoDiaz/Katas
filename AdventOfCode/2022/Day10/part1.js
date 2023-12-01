const fs = require("fs");

const lines = fs
  .readFileSync("day10.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

let map = new Map();
let loops = 1;

function part1() {
  let X = 1;

  lines.forEach((ele) => {
    let [command, sum] = ele.split(" ");
    if (command == "noop") {
      map.set(loops, X);
      loops++;
    } else {
      map.set(loops, X);
      loops++;
      map.set(loops, X);
      X += parseInt(sum);
      loops++;
    }
  });

  let checkLoop = 20;
  let diff = 40;
  let total = 0;

  while (checkLoop <= loops) {
    total += map.get(checkLoop) * checkLoop;
    checkLoop += diff;
  }
  console.log("Part 1 ->", total);
}

part1();

function part2() {
  let str = "";
  let loop = 1;
  while (loop <= loops) {
    if (isVisible(loop)) {
      str += "#";
    } else {
      str += ".";
    }

    if (loop % 40 === 0) {
      str += "\n";
    }
    loop++;
  }

  function isVisible(loop) {
    let diff = (loop % 40 ? loop % 40 : 40) - map.get(loop);

    return diff >= 0 && diff <= 2;
  }

  console.log(str);
}

part2();
