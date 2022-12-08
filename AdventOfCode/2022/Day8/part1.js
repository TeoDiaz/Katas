const fs = require("fs");

const trees = fs
  .readFileSync("day8.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function rightTree(locX, locY) {
  let rightTree = null;

  for (let y = locY; y <= trees[locX].length; y++) {
    let right = trees[locX][y + 1] == undefined ? Infinity : trees[locX][y + 1];
    if (right == Infinity && rightTree == null) {
      rightTree = Infinity;
    } else if (
      (right > rightTree && right != Infinity) ||
      (right < rightTree && rightTree == null) ||
      !rightTree
    ) {
      rightTree = right;
    }
  }

  return rightTree;
}

function leftTree(locX, locY) {
  let leftTree = null;
  for (let y = locY; y >= 0; y--) {
    let left = trees[locX][y - 1] == undefined ? Infinity : trees[locX][y - 1];

    if ((left == undefined || left == Infinity) && leftTree == null) {
      leftTree = Infinity;
    } else if (
      (left > leftTree && left != Infinity) ||
      (left < leftTree && leftTree == null) ||
      !leftTree
    ) {
      leftTree = left;
    }
  }
  return leftTree;
}

function downTree(locX, locY) {
  let downTree = null;

  for (let x = locX; x <= trees.length; x++) {
    let down = trees[x + 1] == undefined ? Infinity : trees[x + 1][locY];
    if ((down == undefined || down == Infinity) && downTree == null) {
      downTree = Infinity;
    } else if (
      (down > downTree && down != Infinity) ||
      (down < downTree && downTree == null) ||
      !downTree
    ) {
      downTree = down;
    }
  }

  return downTree;
}

function upTree(locX, locY) {
  let upTree = null;

  for (let x = locX; x >= 0; x--) {
    let up = trees[x - 1] == undefined ? Infinity : trees[x - 1][locY];
    if (up == Infinity && upTree == null) {
      upTree = Infinity;
    } else if (
      (up > upTree && up != Infinity) ||
      (up < upTree && upTree == null) ||
      !upTree
    ) {
      upTree = up;
    }
  }

  return upTree;
}
let count = 0;
function countTrees(tree, right, left, down, up) {
  if (
    tree > right ||
    right == Infinity ||
    tree > left ||
    left == Infinity ||
    tree > up ||
    up == Infinity ||
    tree > down ||
    down == Infinity
  )
    count++;
}

function part1() {
  for (let x = 0; x < trees.length; x++) {
    for (let y = 0; y < trees[x].length; y++) {
      let tree = trees[x][y];

      let right = rightTree(x, y);
      let left = leftTree(x, y);
      let down = downTree(x, y);
      let up = upTree(x, y);

      countTrees(tree, right, left, down, up);
    }
  }
  return count;
}

console.log("Part1 ->", part1());
