const fs = require("fs");

const lines = fs
  .readFileSync("day3.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

let points = {};
let count = 1;

[...Array(26).keys()].map((i) => {
  points[String.fromCharCode(i + 97)] = count;
  count++;
});

[...Array(26).keys()].map((i) => {
  points[String.fromCharCode(i + 65)] = count;
  count++;
});

// Part 1

let commons = [];
let result = 0;

function part1(input) {
  input.forEach((ele) => {
    let splitted = chunkString(ele, ele.length);
    find_commons(splitted);
  });

  commons.forEach((ele) => {
    result += points[ele];
  });

  return result;
}

function chunkString(str, length) {
  return str.match(new RegExp(".{1," + length / 2 + "}", "g"));
}

function find_commons([str1, str2]) {
  let common = [];
  let chunks = str1.split("");
  for (var i = 0; i < chunks.length; i++) {
    if (str2.indexOf(chunks[i]) != -1) common.push(chunks[i]);
  }

  let uniqueChars = [...new Set(common)];
  commons.push(uniqueChars);

  return;
}

console.log("Part1 -> " + part1(lines));

// Part 2

let commons_part2 = [];

function find_commons_part2([str1, str2, str3]) {
  let common = [];
  let chunks = str1.split("");
  for (var i = 0; i < chunks.length; i++) {
    if (str2.indexOf(chunks[i]) != -1 && str3.indexOf(chunks[i]) != -1)
      common.push(chunks[i]);
  }

  let uniqueChars = [...new Set(common)];
  commons_part2.push(uniqueChars);

  return;
}

function part2(input) {
  const chunkSize = 3;
  let count = 0;

  for (let i = 0; i < input.length; i += chunkSize) {
    chunk = input.slice(i, i + chunkSize);
    find_commons_part2(chunk);
  }
  commons_part2.forEach((ele) => {
    count += points[ele];
  });

  return count;
}

console.log("Part2 -> " + part2(lines));
