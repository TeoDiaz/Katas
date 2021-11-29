const { log } = require("console");
const fs = require("fs");

const lines = fs
  .readFileSync("day19.txt", { encoding: "utf-8" })
  .split("\n\n")
  .filter((x) => x);

const rules = {};

lines[0].split("\n").map((rule) => {
  const { groups } = /^(?<key>\d+): (?<value>.*)$/.exec(rule);
  rules[groups.key] = groups.value;
  return groups;
});

const messages = lines[1].split("\n");

const ruleToRegexp = {};

function computeRules(value, rules) {
  if (value in ruleToRegexp) {
    return ruleToRegexp[value];
  }

  let result = "";
  if (/^".*"$/.test(value)) {
    result = value.replace(/"/g, "");
  } else if (/\|/.test(value)) {
    const options = value.split(" | ");
    result = `(${computeRules(options[0], rules)}|${computeRules(
      options[1],
      rules
    )})`;
  } else {
    const keys = value.split(" ");
    result = keys.map((key) => computeRules(rules[key], rules)).join("");
  }

  ruleToRegexp[value] = result;
  return result;
}

computeRules(rules[0], rules);

const mainRule = new RegExp("^" + ruleToRegexp[rules[0]] + "$");

let sum = 0;

for (const message of messages) {
  if (mainRule.test(message)) sum++;
}
console.log(sum);
