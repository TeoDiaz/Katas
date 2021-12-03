const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let gamma = {};

lines.forEach((x) => {
  for (let i = 0; i < x.length; i++) {
    let num = x.split("");
    if (gamma[i] == undefined) {
      gamma[i] = num[i];
    } else {
      gamma[i] = gamma[i] + num[i];
    }
  }
});

let gammaNum = []
let epsilonNum = []
for (const [key, value] of Object.entries(gamma)) {
  let nums = value.split("")
  let ones = nums.filter(x => x == 1).length
  let zeros = nums.filter(x => x == 0).length

  if(ones > zeros){
    gammaNum.push(1)
    epsilonNum.push(0)
  }else{
    gammaNum.push(0)
    epsilonNum.push(1)
  }
}


console.log(parseInt(gammaNum.join(""), 2) * parseInt(epsilonNum.join(""), 2));