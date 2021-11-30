const fs = require("fs");

const lines = fs
  .readFileSync("day7.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x);

let allNodes = [];
let aboveNames = [];
let tree = {};

lines.forEach((x) => {
  let line = x.split(" -> ");
  const { groups } = /^(?<name>.*) (?<value>.*)$/.exec(line[0]);
  //  /\(\d*?\)/g -> Num inside parentesis
  const value = groups.value.match(/\d+/)[0];
  if (line[1]) {
    tree[groups.name] = {
      value: parseInt(value),
      children: line[1].split(", "),
      total: 0,
    };
  } else {
    tree[groups.name] = { value: parseInt(value), children: [], total: 0 };
  }
});

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].split(" -> ");

  let name = line[0].split(" ")[0];
  allNodes.push(name);

  if (line.length > 1) {
    let above = line[1].split(", ");

    above.forEach((x) => aboveNames.push(x));
  }
}

let root = allNodes.filter((x) => !aboveNames.includes(x));

function sumWeights(tree, root) {
  tree[root].total = tree[root].value;
  tree[root].children.forEach((c) => {
    tree[root].total += sumWeights(tree, c);
  });

  return tree[root].total;
}

sumWeights(tree, root);

function balance(root, tree, target) {
  const children = {};
  let newTarget;
  tree[root].children.forEach((c) => {
    if (children[tree[c].total] == undefined) {
      children[tree[c].total] = c;
    } else {
      children[tree[c].total] = false;
      newTarget = tree[c].total;
    }
  });

  console.log(children);

  for (const i in children) {
    if (children[i]) {
      return balance(children[i], tree, newTarget);
    }
  }

  return tree[root].value + target - tree[root].total;
}

console.log(balance(root, tree));
