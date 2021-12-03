const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

function bitCriteria(input) {
  let gamma = {};

  input.forEach((x) => {
    for (let i = 0; i < x.length; i++) {
      let num = x.split("");
      if (gamma[i] == undefined) {
        gamma[i] = num[i];
      } else {
        gamma[i] = gamma[i] + num[i];
      }
    }
  });
  return gamma;
}

let oxygen = lines;
let co2 = lines;
let O2index = 0;
let co2Index = 0;

function oxygenRating() {
  while (oxygen.length > 1) {
    let gamma = bitCriteria(oxygen);

    let nums = gamma[O2index].split("");
    let ones = nums.filter((x) => x == 1).length;
    let zeros = nums.filter((x) => x == 0).length;

    if (ones >= zeros) {
      oxygen = oxygen.filter((x) => x.split("")[O2index] == 1);
    } else {
      oxygen = oxygen.filter((x) => x.split("")[O2index] == 0);
    }

    O2index++;
  }
}

function co2Rating() {
  while (co2.length > 1) {
    let gamma = bitCriteria(co2);
    console.log(co2);

    let nums = gamma[co2Index].split("");
    let ones = nums.filter((x) => x == 1).length;
    let zeros = nums.filter((x) => x == 0).length;

    if (zeros == ones) {
      co2 = co2.filter((x) => x.split("")[co2Index] == 0);
    } else if (zeros > ones) {
      co2 = co2.filter((x) => x.split("")[co2Index] == 1);
    } else {
      co2 = co2.filter((x) => x.split("")[co2Index] == 0);
    }
    co2Index++;
  }
}

oxygenRating();
co2Rating();

console.log(parseInt(oxygen.join(""), 2));
console.log(parseInt(co2.join(""), 2));

console.log(parseInt(oxygen.join(""), 2) * parseInt(co2.join(""), 2));
