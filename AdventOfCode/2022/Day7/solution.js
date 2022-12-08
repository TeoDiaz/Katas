const fs = require("fs");

const lines = fs
  .readFileSync("day7.txt", { encoding: "utf-8" }) // read day??.txt content
  .trim() // Remove starting/ending whitespace
  .split("\n");

function containsNumbers(str) {
  return /\d/.test(str);
}

const createTree = () => {
  const tree = { name: "/", isDirectory: true, children: [] };

  let currentNode = tree;
  let currentCommand = null;

  for (const line of lines) {
    sp_line = line.split(" ");
    if (sp_line[0] === "$") {
      currentCommand = sp_line[1];

      if (currentCommand === "cd") {
        const target = sp_line[2];
        switch (target) {
          case "/":
            currentNode = tree;
            break;
          case "..":
            currentNode = currentNode.parent;
            break;
          default:
            currentNode = currentNode.children.find(
              (folder) => folder.isDirectory && folder.name === target
            );
        }
      }
    } else {
      if (currentCommand === "ls") {
        if (containsNumbers(line)) {
          const node = {
            name: sp_line[1],
            size: parseInt(sp_line[0]),
            isDirectory: false,
            parent: currentNode,
          };
          currentNode.children.push(node);
        } else {
          const node = {
            name: sp_line[1],
            isDirectory: true,
            children: [],
            parent: currentNode,
          };
          currentNode.children.push(node);
        }
      }
    }
  }

  return tree;
};

function getSize(node, directoryCallback = () => {}) {
  if (!node.isDirectory) {
    return node.size;
  }
  const directorySize = node.children
    .map((child) => getSize(child, directoryCallback))
    .reduce((a, b) => a + b, 0);

  directoryCallback(node.name, directorySize);

  return directorySize;
}

function part1() {
  const thresholdSize = 100000;
  const tree = createTree();

  let sumSmallFolder = 0;

  getSize(tree, (name, size) => {
    if (size < thresholdSize) {
      sumSmallFolder += size;
    }
  });

  console.log(sumSmallFolder);
}

part1();

function part2() {
  const totalDiskSpace = 70000000;
  const requiredSpace = 30000000;

  const tree = createTree(lines);

  const usedSpace = getSize(tree);
  const availableSpace = totalDiskSpace - usedSpace;
  const minimumFolderSize = requiredSpace - availableSpace;
  const candidates = [];

  getSize(tree, (name, size) => {
    if (size >= minimumFolderSize) {
      candidates.push({
        name,
        size,
      });
    }
  });

  candidates.sort((a, b) => a.size - b.size);

  console.log(candidates[0].size);
}

part2();
