const fs = require("fs");

const lines_part1 = fs
  .readFileSync("day6_part1.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

const lines_part2 = fs
  .readFileSync("day6_part2.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function part1() {
  let times = lines_part1[0]
    .replace("Time: ", "")
    .trim()
    .split(" ")
    .filter((x) => x)
    .map((x) => parseInt(x));

  let distance = lines_part1[1]
    .replace("Distance: ", "")
    .trim()
    .split(" ")
    .filter((x) => x)
    .map((x) => parseInt(x));

  let total = 1;
  for (let i = 0; i < times.length; i++) {
    let time = times[i];
    let dist = distance[i];
    let loop = 0;
    let moves = 0;

    while (loop < time) {
      let diff = time - loop;
      if (diff * loop > dist) {
        moves++;
      }

      loop++;
    }
    total = total * moves;
  }

  console.log(total);
}

part1();

function part2() {
  let times = lines_part2[0]
    .replace("Time: ", "")
    .trim()
    .split(" ")
    .map((x) => parseInt(x));

  let distance = lines_part2[1]
    .replace("Distance: ", "")
    .trim()
    .split(" ")
    .map((x) => parseInt(x));

  let total = 1;
  for (let i = 0; i < times.length; i++) {
    let time = times[i];
    let dist = distance[i];
    let loop = 0;
    let moves = 0;

    while (loop < time) {
      let diff = time - loop;
      if (diff * loop > dist) {
        moves++;
      }

      loop++;
    }
    total = total * moves;
  }

  console.log(total);
}

part2();
