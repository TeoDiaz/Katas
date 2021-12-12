const fs = require("fs");

const lines = fs
  .readFileSync("day12.txt")
  .toString()
  .split("\n")
  .map((line) => line.split("-"));

const routes = {};

lines.forEach(([from, to]) => {
  if (routes[from]) {
    routes[from].push(to);
  } else {
    routes[from] = [to];
  }

  if (routes[to]) {
    routes[to].push(from);
  } else {
    routes[to] = [from];
  }
});

function isLowerCase(path) {
  return path == path.toLowerCase();
}

console.time("Part2");

let count = 0

function allValidPaths(from, paths = [], visitedPath = false) {
  let visited = [...paths, from];

  if (from == "end") {
    count++
    return;
  }

  routes[from].forEach((path) => {
    if (path == "start") return;

    let hasVisited = visitedPath;
    if (isLowerCase(path) && paths.includes(path)) {
      if (visitedPath) return;
      hasVisited = true;
    }

    allValidPaths(path, visited, hasVisited);
  });
}

allValidPaths("start");

console.log(count);
console.timeEnd("Part2") // 88.158ms