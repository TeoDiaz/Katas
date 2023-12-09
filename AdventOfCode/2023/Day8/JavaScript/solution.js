const { log } = require("console");
const fs = require("fs");

const lines = fs
  .readFileSync("day8.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .filter((x) => x); // Remove empty lines

let instructions = lines.shift().split("");
let obj = {};

for (let i = 0; i < lines.length; i++) {
  let moves = lines[i];

  const { groups } = /^(?<step>.*) = \((?<left>.*), (?<right>.*)\)$/.exec(
    moves
  );

  obj[groups.step] = { L: groups.left, R: groups.right };
}

function part1() {
  let pos = "AAA";
  let count = 0;

  let doLoop = true;

  function search() {
    for (let i = 0; i < instructions.length; i++) {
      let next = obj[pos][instructions[i]];

      if (next == "ZZZ") {
        count++;
        doLoop = false;
        break;
      }
      count++;

      pos = next;
    }
  }

  while (doLoop) {
    search();
  }
  console.log(count);
}

// part1();

function part2() {
  let loops = [];

  let filtered = Object.keys(obj).filter((key) => key.slice(-1) == "A");

  filtered.forEach((key) => {
    let pos = key;
    let count = 0;
    let doLoop = true;

    function search() {
      for (let i = 0; i < instructions.length; i++) {
        let next = obj[pos][instructions[i]];

        if (next.slice(-1) == "Z") {
          count++;
          doLoop = false;
          break;
        }
        count++;

        pos = next;
      }
    }

    while (doLoop) {
      search();
    }
    loops.push(count);
  });

  console.log(loops);

  function gcd(a, b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }


  let lcm_of_loops = loops.reduce((a, b) => (a * b) / gcd(a, b));
  console.log(lcm_of_loops);
}

part2();
