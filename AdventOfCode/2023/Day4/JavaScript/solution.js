const fs = require("fs");

const lines = fs
  .readFileSync("day4.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function part1() {
  let win_total = 0;

  lines.forEach((line) => {
    const { groups } = /^Card (?<card>.*): (?<nums>.*)$/.exec(line);
    let [win, nums] = groups.nums.split(" | ");

    nums = nums.split(" ").filter((num) => num);
    win = win.split(" ").filter((num) => num);

    nums = nums.filter((num) => win.includes(num));

    if (nums.length > 0) {
      win_total += 2 ** (nums.length - 1);
    }
  });

  return win_total;
}

console.log("Part 1 :", part1());

function part2() {
  let obj = {};

  lines.forEach((line) => {
    const { groups } = /^Card (?<card>.*): (?<nums>.*)$/.exec(line);
    let [win, nums] = groups.nums.split(" | ");

    let indx = parseInt(groups.card);

    obj[indx] = obj[indx] || 1;

    nums = nums.split(" ").filter((num) => num);
    win = win.split(" ").filter((num) => num);

    nums = nums.filter((num) => win.includes(num));

    for (let i = indx + 1; i < indx + nums.length + 1; i++) {
      obj[i] = (obj[i] || 1) + obj[indx];
    }
  });

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

  return sumValues(obj);
}

console.log("Part 2: ", part2());
