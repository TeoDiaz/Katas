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

let arrToSum = [];

for (const num of nums) {
  for (const [key, value] of Object.entries(bingoBoards)) {
    let total = 0;

    for (let i = 0; i < value.nums.length; i++) {
      let newNums = value.nums[i].filter((x) => x != num);

      if (newNums.length < 1) {
        if (arrToSum.length < 1) {
          let numsToSum = bingoBoards[key].nums;

          numsToSum.forEach((x) => {
            x.forEach((y) => {
              total = total + parseInt(y);
            });
          });
          arrToSum = numsToSum;
          total = total - parseInt(num)
          console.log(bingoBoards[key]);
          console.log(arrToSum, "total:", total, "Result:", total * parseInt(num));
        }
      } else {
        value.nums[i] = newNums;
      }
    }
  }
}


