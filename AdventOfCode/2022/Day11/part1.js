const fs = require("fs");

const lines = fs
  .readFileSync("day11.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline
let monkeys = {};

const monkeyNum = (monkey) => {
  let { groups } = /Monkey (?<num>\d+):/.exec(monkey);
  return groups.num;
};

const monkeyItems = (monkey) => {
  let items = monkey
    .replace("Starting items: ", "")
    .split(",")
    .map((num) => parseInt(num.trim()));

  return items;
};

const monkeyOperation = (monkey) => {
  let word = monkey.split(" ").pop();
  if (word != "old") {
    let { groups } =
      /Operation: new = old (?<operation>.*) (?<amount>\d+)/.exec(monkey);
    return [groups.operation, parseInt(groups.amount)];
  } else {
    let { groups } = /Operation: new = old (?<operation>.*) (?<amount>.*)/.exec(
      monkey
    );
    return [groups.operation, "old"];
  }
};

const monkeyDivisible = (monkey) => {
  let num = monkey.split(" ").pop();
  return parseInt(num);
};

const setupMonkeys = () => {
  lines.forEach((ele) => {
    let monkeyParams = {
      items: [],
      operation: "",
      amount: 0,
      divisible: 0,
      true: 0,
      false: 0,
      itemsCount: 0,
    };

    let monkey = ele.split("\n");
    let num = monkeyNum(monkey);
    monkeyParams.items = monkeyItems(monkey[1]);
    let [operation, amount] = monkeyOperation(monkey[2]);
    monkeyParams.operation = operation;
    monkeyParams.amount = amount;

    monkeyParams.divisible = monkeyDivisible(monkey[3]);
    monkeyParams.true = monkey[4].split(" ").pop();
    monkeyParams.false = monkey[5].split(" ").pop();
    monkeys[num] = monkeyParams;
  });
};

function part1() {
  setupMonkeys();
  let loop = 1;
  let dividedBy = 3;
  while (loop <= 20) {
    for (const [monkey, params] of Object.entries(monkeys)) {
      let actualItems = params.items;
      monkeys[monkey].items = [];
      actualItems.forEach((item) => {
        monkeys[monkey].itemsCount++;

        let multiply = params.amount;
        let wl = 0;
        if (params.amount == "old") {
          multiply = item;
        }
        if (params.operation == "*") {
          wl = item * multiply;
        } else {
          wl = item + multiply;
        }
        wl = Math.floor(wl / dividedBy);

        if (wl % params.divisible == 0) {
          let itemsList = monkeys[params.true].items;
          itemsList.push(wl);
          monkeys[params.true].items = itemsList;
        } else {
          let itemsList = monkeys[params.false].items;
          itemsList.push(wl);
          monkeys[params.false].items = itemsList;
        }
      });
    }
    loop++;
  }

  let businessLevel = [];
  for (const [key, value] of Object.entries(monkeys)) {
    businessLevel.push(value.itemsCount);
  }
  businessLevel = businessLevel.sort(function (a, b) {
    return b - a;
  });

  console.log(businessLevel[0] * businessLevel[1]);
}

part1();
