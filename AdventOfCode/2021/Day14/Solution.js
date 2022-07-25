const fs = require("fs");

const [template, data] = fs.readFileSync("day14.txt", { encoding: "utf-8" }).trim().split("\n\n");

const pairRules = data.trim().split("\n").map(x => x.split(" -> "));

function addToMap(map, key, val = 1) {
  if (!map.has(key)) {
    map.set(key, 0);
  }
  map.set(key, map.get(key) + val)
}

function main(rounds) {
  const pairRulesMap = new Map()
  for (const rule of pairRules) {
    pairRulesMap.set(rule[0], [rule[0][0] + rule[1], rule[1] + rule[0][1]])
  }

  let map = new Map();

  for (let i = 0; i < template.length - 1; i++) {
    const pair = template[i] + template[i + 1];
    addToMap(map, pair)
  }

  const lastChar = template[template.length - 1]

  for (let step = 0; step < rounds; step++) {
    let current = new Map();

    const keys = map.keys()

    for (const key of keys) {
      const next = pairRulesMap.get(key)

      addToMap(current, next[0], map.get(key))
      addToMap(current, next[1], map.get(key))
    }
    map = current
  }

  const elementCount = new Map()
  const keys = map.keys()

  addToMap(elementCount, lastChar)

  for (const key of keys) {
    addToMap(elementCount, key[0], map.get(key))
  }

  const values = [...elementCount.values()]

  const min = Math.min(...values)
  const max = Math.max(...values)

  console.log("For rounds " + rounds + " result is: " + (max - min))
}

function part1(rounds) {
  main(rounds)
}

part1(10);

function part2(rounds) {
  main(rounds)
}

part2(40)

