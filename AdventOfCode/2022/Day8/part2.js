const fs = require("fs");

const trees = fs
  .readFileSync("day8.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function rightTree(tree, locX, locY) {
  let rightTrees = [];

  for (let y = locY; y <= trees[locX].length; y++) {
    let right = trees[locX][y + 1] == undefined ? Infinity : trees[locX][y + 1];

    if (right == Infinity) {
      break;
    } else if (right >= tree) {
      rightTrees.push(right);
      break;
    } else {
      rightTrees.push(right);
    }
  }
  return rightTrees;
}

function leftTree(tree, locX, locY) {
  let leftTrees = [];
  for (let y = locY; y >= 0; y--) {
    let left = trees[locX][y - 1] == undefined ? Infinity : trees[locX][y - 1];

    if (left == Infinity) {
      break;
    } else if (left >= tree) {
      leftTrees.push(left);
      break;
    } else {
      leftTrees.push(left);
    }
  }
  return leftTrees;
}

function downTree(tree, locX, locY) {
  let downTrees = [];

  for (let x = locX; x <= trees.length; x++) {
    let down = trees[x + 1] == undefined ? Infinity : trees[x + 1][locY];
    if (down == Infinity) {
      break;
    } else if (down >= tree) {
      downTrees.push(down);
      break;
    } else {
      downTrees.push(down);
    }
  }

  return downTrees;
}

function upTree(tree, locX, locY) {
  let upTrees = [];

  for (let x = locX; x >= 0; x--) {
    let up = trees[x - 1] == undefined ? Infinity : trees[x - 1][locY];

    if (up == Infinity) {
      break;
    } else if (up >= tree) {
      upTrees.push(up);
      break;
    } else {
      upTrees.push(up);
    }
  }

  return upTrees;
}

function part2() {
  let highest = 0;
  
  for (let x = 0; x < trees.length; x++) {
    for (let y = 0; y < trees[x].length; y++) {
      let tree = trees[x][y];

      let right = rightTree(tree, x, y).length;
      let left = leftTree(tree, x, y).length;
      let down = downTree(tree, x, y).length;
      let up = upTree(tree, x, y).length;

      count = [right, left, down, up]
        .filter((num) => num != 0)
        .reduce((a, b) => a * b);

      if (count > highest) {
        highest = count;
      }
    }
  }
  return highest;
}

console.log("Part2 ->", part2());
