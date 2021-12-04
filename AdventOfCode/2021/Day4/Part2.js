const fs = require("fs");

const lines = fs.readFileSync("day4.txt", { encoding: "utf-8" }).split("\n");

let nums = lines[0].split(",");

let boards = lines.slice(2);

let bingoBoards = {};

let board = 1;
let line = 1;
let boardNums = [];

boards.forEach((ele) => {
  if (ele == "") {
    board++;
    line = 1;
    boardNums = [];
  } else {
    let splitted = ele.split(" ").filter((x) => x);

    boardNums.push(splitted);
  }

  bingoBoards[board] = { nums: boardNums };
});

let boardsCount = Object.keys(bingoBoards).length;

function checkRow(row) {
  return row.filter((x) => x == ".").length == row.length;
}

let winsSet = new Set();

for (const num of nums) {
  for (const [key, value] of Object.entries(bingoBoards)) {
    let total = 0;
    let numsLength = value.nums["1"].length;

    for (let i = 0; i < value.nums.length; i++) {
      let indexOf = value.nums[i].indexOf(num);
      if (indexOf != -1) {
        value.nums[i][indexOf] = ".";
      }
    }
    let wins = winsSet.size

    value.nums.forEach((x) => {
      if (checkRow(x) && wins <= boardsCount) {
        winsSet.add(value.nums);
      }
    });

    let count = 0;

    for (let z = 0; z < numsLength; z++) {
      for (let y = 0; y < value.nums.length; y++) {
        if (value.nums[y][z] == ".") {
          count++;
        }

        if (count == value.nums.length && wins <= boardsCount) {
          winsSet.add(value.nums);
        }
      }
      count = 0;
    }

    if (wins == boardsCount) {
      console.log(Array.from(winsSet).pop());

      console.log(num);

      throw new Error("Get out");
    }
  }
}
