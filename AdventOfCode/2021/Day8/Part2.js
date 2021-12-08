const fs = require("fs");

const lines = fs.readFileSync("day8.txt", { encoding: "utf-8" }).split("\n");

let codes = {
  0: "",
  1: "",
  2: "",
  3: "",
  3: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

let finalCode = [];

lines.forEach((x) => {
  let mainPattern = x.split(" | ")[0];
  let codePattern = x.split(" | ")[1];
  // First I set the initialCodes that we are sure this will be 
  initialCodes(mainPattern);


  // Then I set the number 6, 9 and 0 with length 6
  mainPattern.split(" ").forEach((code) => {
    switch (code.length) {
      case 6:
        if (!includeChars(code, codes[1])) {
          codes[6] = code;
        } else if (includeChars(code, codes[4])) {
          codes[9] = code;
        } else {
          codes[0] = code;
        }

        break;
      default:
        break;
    }
  });

  // Then I set the number 3, 5 and 5 with length 5, because they depend on number 6
  setFive(mainPattern);

  // Once we have all the codes, get the final code
  checkFinalCode(codePattern);
});

function setFive(mainPattern) {
  mainPattern.split(" ").forEach((code) => {
    switch (code.length) {
      case 5:
        if (includeChars(code, codes[1])) {
          codes[3] = code;
        } else if (isFive(code, codes[6])) {
          codes[5] = code;
        } else {
          codes[2] = code;
        }
        break;
      default:
        break;
    }
  });
}

function initialCodes(mainPattern) {
  mainPattern.split(" ").forEach((code) => {
    switch (code.length) {
      case 2:
        codes[1] = code;
        break;
      case 3:
        codes[7] = code;
        break;
      case 4:
        codes[4] = code;
        break;
      case 7:
        codes[8] = code;
        break;
      default:
        break;
    }
  });
}

function isFive(code, chars) {
  let count = 0;

  [...chars].forEach((x) => {
    if (code.includes(x)) {
      count++;
    }
  });

  return count == chars.length - 1 ? true : false;
}

function includeChars(code, chars) {
  let count = 0;

  [...chars].forEach((x) => {
    if (code.includes(x)) {
      count++;
    }
  });

  return count == chars.length ? true : false;
}

function exactChars(code, chars) {
  let count = 0;

  [...chars].forEach((x) => {
    if (code.includes(x)) {
      count++;
    }
  });

  return count === code.length && code.length == chars.length ? true : false;
}

function checkFinalCode(codePattern) {
  let codeNums = [];
  codePattern.split(" ").forEach((code) => {
    codeNums.push(checkCode(code));
  });
  finalCode.push(codeNums.join(""));
}

function checkCode(code) {
  for (const [key, value] of Object.entries(codes)) {
    if (exactChars(code, value)) {
      return key;
    }
  }
  return 0;
}

console.log(
  finalCode.map((x) => parseInt(x)).reduce((acc, curr) => acc + curr)
);
