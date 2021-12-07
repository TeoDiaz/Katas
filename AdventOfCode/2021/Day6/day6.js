// First part I solved it with arrays, but in second part wasn't able because memory, so I'd change the logic

const fs = require("fs");

const initialLanterns = () => {
  let lanterns = new Array(9).fill(0);

  fs.readFileSync("day6.txt", { encoding: "utf-8" })
    .split(",")
    .map((x) => parseInt(x))
    .forEach((timer) => {
      lanterns[timer]++;
    });

  return lanterns;
};

const produceFish = (lanterns, days) => {
  let day = 0;

  while (day < days) {
    let resetIndex = 6;
    let resetFishCount = lanterns.shift();

    lanterns[resetIndex] += resetFishCount;
    lanterns.push(resetFishCount);

    day++;
  }

  return lanterns.reduce((acc, curr) => (acc += curr));
};

console.log(produceFish(initialLanterns(), 80));
console.log(produceFish(initialLanterns(), 256));
